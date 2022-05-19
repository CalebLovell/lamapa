import * as React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { worldTopojson as worldGeojson } from '@data/worldGeojson';
import { Country } from '@components/Country';
import { useDataState } from '@components/DataProvider';

const laTopoJson = topojson.feature(worldGeojson, worldGeojson.objects.countries);
const height = 800;
const width = 700;
const projection = d3.geoAzimuthalEqualArea().rotate([80, 10]).fitSize([width, height], { type: `FeatureCollection`, features: laTopoJson.features });
const projectionPath = d3.geoPath().projection(projection);
d3.select(`body`).append(`div`).attr(`id`, `tooltip`).attr(`style`, `position: absolute; opacity: 0`);

export default function Map() {
	const mapRef = React.useRef(null);
	const { year, mapColorType } = useDataState();

	const domain = mapColorType === `global` ? [0, 10] : [10, 0];
	const interpolateColor = d3.scaleSequential(d3.interpolateRdBu).domain(domain);

	const countries = laTopoJson.features.map(data => {
		const country = year.find(x => x.name === data.properties.ADMIN);
		const path = projectionPath(data);
		const color = country ? interpolateColor(country.value) : `black`;

		const tooltipData = data.properties.ADMIN;
		return <Country key={tooltipData} path={path} tooltipData={tooltipData} color={color} />;
	});

	return (
		<svg id='map' ref={mapRef} width={width} height={height}>
			<g>{countries}</g>
		</svg>
	);
}

import * as React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { worldTopojson as worldGeojson } from '../data/worldGeojson';
import { Country } from './Country';
import { useDataState } from './DataProvider';

const laTopoJson = topojson.feature(worldGeojson, worldGeojson.objects.countries);

export default function Map() {
	const mapRef = React.useRef(null);
	const { year } = useDataState();

	const width = 700;
	const height = 800;

	const projection = d3
		.geoAzimuthalEqualArea()
		.rotate([80, 10])
		.fitSize([width, height], { type: `FeatureCollection`, features: laTopoJson.features });
	const path = d3.geoPath().projection(projection);

	d3.select(`body`).append(`div`).attr(`id`, `tooltip`).attr(`style`, `position: absolute; opacity: 0`);

	const countries = laTopoJson.features.map(data => {
		const country = year.find(x => x.name === data.properties.ADMIN);
		return <Country key={data.properties.ADMIN} path={path(data)} tooltipData={data.properties.ADMIN} color={country?.color} />;
	});

	return (
		<svg id='map' ref={mapRef} width={width} height={height}>
			<g>{countries}</g>
		</svg>
	);
}

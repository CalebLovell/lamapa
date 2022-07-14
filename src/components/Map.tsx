import * as React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { worldTopojson as worldGeojson } from '@data/worldGeojson';
import { Country } from '@components/Country';
import { HeadOfStateReturn } from '@data/types';
import { useStore } from '@data/store';

const laTopoJson = topojson.feature(worldGeojson, worldGeojson.objects.countries);
const height = 800;
const width = 700;
const projection = d3.geoAzimuthalEqualArea().rotate([80, 10]).fitSize([width, height], { type: `FeatureCollection`, features: laTopoJson.features });
const projectionPath = d3.geoPath().projection(projection);

d3.select(`body`).append(`div`).attr(`id`, `tooltip`).attr(`style`, `position: absolute; opacity: 0`);

type Props = {
	headsOfState: HeadOfStateReturn[] | undefined;
};

export default function Map({ headsOfState }: Props) {
	const mapRef = React.useRef(null);
	const mapColorType = useStore(state => state.mapColorType);

	const domain = mapColorType === `global` ? [0, 6] : [6, 0];
	const interpolateColor = d3.scaleSequential(d3.interpolateRdBu).domain(domain);

	const countries = laTopoJson.features.map(data => {
		const countryName = data.properties.ADMIN;
		const path = projectionPath(data);
		const headOfState = headsOfState?.find(x => x.country.name === countryName);
		const color = headOfState ? interpolateColor(headOfState.leaning) : `black`;
		return <Country key={countryName} path={path} name={countryName} color={color} />;
	});

	return (
		<svg id='map' ref={mapRef} width={width} height={height}>
			<g>{countries}</g>
		</svg>
	);
}

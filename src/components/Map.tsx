import * as React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { worldTopojson as worldGeojson } from '@data/worldGeojson';
import { Country } from '@components/Country';
import { useStore } from '@data/store';
import { useHeadsOfState } from '@hooks/useHeadsOfState';
import { getLeaningColors } from '@data/types';

const laTopoJson = topojson.feature(worldGeojson, worldGeojson.objects.countries);
const height = 500;
const width = 350;
const projection = d3.geoAzimuthalEqualArea().rotate([80, 10]).fitSize([width, height], { type: `FeatureCollection`, features: laTopoJson.features });
const projectionPath = d3.geoPath().projection(projection);

export default function Map() {
	const { data: headsOfState } = useHeadsOfState();
	const mapRef = React.useRef(null);
	const mapColorType = useStore(state => state.mapColorType);

	const countries = laTopoJson.features.map(data => {
		const countryName = data.properties.ADMIN;
		const path = projectionPath(data);
		const headOfState = headsOfState?.find(x => x.country.name === countryName);
		const color = headOfState ? getLeaningColors(mapColorType)[headOfState.leaning] : `black`;
		return <Country key={countryName} path={path} name={countryName} color={color} />;
	});

	return (
		<svg ref={mapRef} width='auto' height='auto' viewBox='-4 10 360 480'>
			<g>{countries}</g>
		</svg>
	);
}

import * as d3 from 'd3';
import * as React from 'react';
import { worldTopojson } from '../data/worldTopojson.js';
import * as topojson from 'topojson-client';

export default function Map() {
	const mapRef = React.useRef(null);

	const width = 800;
	const height = 1267.2;

	const projection = d3.geoAzimuthalEqualArea().rotate([80, 10]).fitSize([width, height], laGeojson);
	const path = d3.geoPath(projection);

	const renderMap = () => {
		const svg = d3.select(mapRef.current);
		svg.append(`path`).datum(worldGeojsonOuter).attr(`fill`, `white`).attr(`stroke`, `black`).attr(`d`, path);
		svg.append(`path`).datum(worldGeojsonInner).attr(`fill`, `none`).attr(`stroke`, `black`).attr(`d`, path);
		// svg.selectAll(`.country`).data(laGeojson.features).enter().append(`path`).attr(`class`, `country`).attr(`fill`, `#ddd`).attr(`d`, path);
	};

	React.useEffect(() => {
		renderMap();
	}, []);

	return <svg id='map' ref={mapRef} width={width} height={height}></svg>;
}

const worldGeojson = topojson.feature(worldTopojson, worldTopojson.objects.ne_110m_admin_0_countries_lakes);

const features = worldGeojson.features.filter(
	d => d.properties.CONTINENT.includes(`America`) && ![`Greenland`, `United States of America`].includes(d.properties.ADMIN),
);

const laGeojson = {
	type: `FeatureCollection`,
	features,
};

const worldGeojsonInner = topojson.mesh(worldTopojson, worldTopojson.objects.ne_110m_admin_0_countries_lakes, (a, b) => a !== b);
const worldGeojsonOuter = topojson.mesh(worldTopojson, worldTopojson.objects.ne_110m_admin_0_countries_lakes, (a, b) => a === b);

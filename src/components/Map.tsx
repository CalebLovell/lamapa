import * as React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { worldTopojson } from '../data/worldTopojson';
import { useWindowDimensions } from '@hooks/useWindowDimensions';

const laGeojson = topojson.feature(worldTopojson, worldTopojson.objects.countries);
const laGeojsonInner = topojson.mesh(worldTopojson, worldTopojson.objects.countries, (a, b) => a !== b);
const laGeojsonOuter = topojson.mesh(worldTopojson, worldTopojson.objects.countries, (a, b) => a === b);

export default function Map() {
	const mapRef = React.useRef(null);
	const { height, width } = useWindowDimensions();

	const projection = d3
		.geoAzimuthalEqualArea()
		.rotate([80, 10])
		.fitSize([width, height], { type: `FeatureCollection`, features: laGeojson.features });
	const path = d3.geoPath(projection);

	const renderMap = () => {
		const svg = d3.select(mapRef.current);
		svg.append(`path`).datum(laGeojsonOuter).attr(`fill`, `none`).attr(`stroke`, `black`).attr(`stroke-width`, `1`).attr(`d`, path);
		svg.append(`path`).datum(laGeojsonInner).attr(`fill`, `none`).attr(`stroke`, `black`).attr(`stroke-width`, `1`).attr(`d`, path);
		svg.selectAll(`.country`)
			.data(laGeojson.features)
			.enter()
			.append(`path`)
			.attr(`class`, `country`)
			.attr(`id`, d => d.properties.ADMIN)
			.attr(`fill`, d => (d.properties.ADMIN === `Brazil` ? `red` : `blue`))
			.attr(`d`, path);
	};

	React.useEffect(() => {
		renderMap();
	}, []);

	return <svg id='map' ref={mapRef} width={width} height={height} />;
}

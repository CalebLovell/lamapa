import * as d3 from 'd3';
import * as React from 'react';
import * as topojson from 'topojson-client';

export function Map() {
	const svgRef = React.useRef();

	const aspect = 1.1;
	const width = 1000;
	const height = width * aspect;

	const projection = d3.geoAzimuthalEqualArea().rotate([80, 10]).fitSize([width, height], laGeojson);
	const path = d3.geoPath(projection);

	const renderChart = (nyc, path) => {
		d3.select(svgRef.current);

		svg.append(`path`).datum(d3.geoGraticule()).attr(`d`, path).attr(`fill`, `none`).attr(`stroke`, `#f0f0f0`);

		svg.append(`path`).datum(worldGeojsonOuter).attr(`fill`, `white`).attr(`stroke`, `#aaa`).attr(`d`, path);

		svg.selectAll(`.country`).data(laGeojson.features).enter().append(`path`).attr(`class`, `country`).attr(`fill`, `#ddd`).attr(`d`, path);

		svg.append(`path`).datum(worldGeojsonInner).attr(`fill`, `none`).attr(`stroke`, `#eee`).attr(`d`, path);

		svg.node();
	};

	return <svg id='map' ref={svgRef} width={width} height={height}></svg>;
}

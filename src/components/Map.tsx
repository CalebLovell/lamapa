import * as d3 from 'd3';
import * as topojson from 'topojson-client';

import worldTopojsonData from '../data/worldTopojson.json';
import laGeojsonData from '../data/laGeojson.json';
import worldGeojsonData from '../data/worldGeojson.json';
import worldGeojsonInnerData from '../data/worldGeojsonInner.json';
import worldGeojsonOuterData from '../data/worldGeojsonOuter.json';

export default function Map() {
	const aspect = 1.1;
	const width = 1000;
	const height = width * aspect;

	const worldGeojson = topojson.feature(worldTopojsonData, worldTopojsonData.objects.ne_110m_admin_0_countries_lakes);
	const worldGeojsonOuter = topojson.mesh(worldTopojsonData, worldTopojsonData.objects.ne_110m_admin_0_countries_lakes, (a, b) => a === b);
	const worldGeojsonInner = topojson.mesh(worldTopojsonData, worldTopojsonData.objects.ne_110m_admin_0_countries_lakes, (a, b) => a !== b);

	const features = worldGeojsonData.features.filter(
		d => d.properties.CONTINENT.includes(`America`) && ![`Canada`, `Greenland`, `United States of America`].includes(d.properties.ADMIN),
	);

	const laGeojson = {
		type: `FeatureCollection`,
		features,
	};

	const projection = d3.geoAzimuthalEqualArea().rotate([80, 10]).fitSize([width, height], laGeojson);
	const path = d3.geoPath(projection);
	// const scaleBar = d3
	// 	.geoScaleBar()
	// 	.size([width, height])
	// 	.projection(projection)
	// 	.left(0.1)
	// 	.top(0.9)
	// 	.units(d3.geoScaleMiles)
	// 	.distance(1000)
	// 	.label(`1,000 MILES`)
	// 	.labelAnchor(`middle`)
	// 	.tickValues(null)
	// 	.tickSize(null);

	const createSvg = () => {
		const svg = d3.select(`#map`);
		// const svg = d3.create(`svg`).attr(`width`, width).attr(`height`, height);
		svg.append(`path`).datum(d3.geoGraticule()).attr(`d`, path).attr(`fill`, `none`).attr(`stroke`, `#f0f0f0`);
		svg.append(`path`).datum(worldGeojsonOuter).attr(`fill`, `white`).attr(`stroke`, `#aaa`).attr(`d`, path);
		// svg.selectAll(`.country`).data(laGeojson.features).enter().append(`path`).attr(`class`, `country`).attr(`fill`, `#ddd`).attr(`d`, path);
		svg.append(`path`).datum(worldGeojsonInner).attr(`fill`, `none`).attr(`stroke`, `#eee`).attr(`d`, path);
		// svg.append(`g`).call(scaleBar);

		return svg;
	};

	return (
		<div>
			<svg id='map' width={width} height={height}>
				{createSvg()}
			</svg>
		</div>
	);
}

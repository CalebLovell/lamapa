import * as React from 'react';
import { motion } from 'framer-motion';
import { useStore } from '@data/store';
import ReactTooltip from 'react-tooltip';

export const Country = ({ path, name, color }: { path: string | null; name: string; color: string }) => {
	const setSelectedCountryName = useStore(state => state.setSelectedCountryName);
	const onClick = () => setSelectedCountryName(name);

	return (
		<motion.path
			// whileHover={{ fill: `purple`, scale: 1.1 }}
			onClick={onClick}
			className='path'
			d={path ? path : undefined}
			fill={color}
			strokeWidth='1.5'
			stroke='white'
		></motion.path>
	);
};

// const zoomSettings = {
// 	duration: 1000,
// 	ease: d3.easeCubicOut,
// 	zoomLevel: 5,
// };

// const clicked = (d: any) => {
// 	let x;
// 	let y;
// 	let zoomLevel;

// 	if (d && centered !== d) {
// 		let centroid = path.centroid(d);
// 		x = centroid[0];
// 		y = centroid[1];
// 		zoomLevel = zoomSettings.zoomLevel;
// 		centered = d;
// 	} else {
// 		x = width / 2;
// 		y = height / 2;
// 		zoomLevel = 1;
// 		centered = null;
// 	}

// 	g.transition().duration(zoomSettings.duration).ease(zoomSettings.ease).attr('transform', `translate(${width / 2}, ${height / 2})
// };

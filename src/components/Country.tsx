import * as React from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useDataDispatch } from './DataProvider';

export const Country = ({ path, name, color }: { path: string | null; name: string; color: string }) => {
	const dispatch = useDataDispatch();
	const onClick = () => dispatch({ type: `SET_SELECTED_COUNTRY`, payload: name });
	return (
		<motion.path
			whileHover={{ fill: `purple` }}
			onClick={onClick}
			className='path'
			d={path ? path : undefined}
			fill={color}
			strokeWidth='1.5'
			stroke='white'
			onMouseOver={() => handleMouseOver(name)}
			onMouseOut={handleMouseOut}
			onMouseMove={event => handleMouseMove(event)}
		/>
	);
};

// Show tooltip when hovering over a region
const handleMouseOver = name => {
	d3.select(`#tooltip`).style(`opacity`, 1).style(`background-color`, `white`).text(name);
};

// Hide tooltip as mouse leaves region
const handleMouseOut = () => {
	d3.select(`#tooltip`).style(`opacity`, 0);
};

// Get mouse location so tooltip tracks cursor
const handleMouseMove = event => {
	d3.select(`#tooltip`)
		.style(`left`, `${event.pageX + 10}px`)
		.style(`top`, `${event.pageY + 10}px`);
};

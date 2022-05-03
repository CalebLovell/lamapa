import * as React from 'react';
import * as d3 from 'd3';

// show tooltip when hovering over a region
const handleMouseOver = tooltipData => {
	d3.select(`#tooltip`).style(`opacity`, 1).style(`background-color`, `burlywood`).text(tooltipData);
};

// hide tooltip as mouse leaves region
const handleMouseOut = () => {
	d3.select(`#tooltip`).style(`opacity`, 0);
};

// get mouse location so tooltip tracks cursor
const handleMouseMove = event => {
	d3.select(`#tooltip`)
		.style(`left`, `${event.pageX + 10}px`)
		.style(`top`, `${event.pageY + 10}px`);
};

export const Country = ({ path, tooltipData, color }) => {
	return (
		<path
			className='path'
			d={path}
			fill={color}
			strokeWidth='1.5'
			stroke='white'
			onMouseOver={() => {
				handleMouseOver(tooltipData);
			}}
			onMouseOut={handleMouseOut}
			onMouseMove={event => {
				handleMouseMove(event);
			}}
		/>
	);
};

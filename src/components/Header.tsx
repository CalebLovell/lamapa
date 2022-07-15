import * as React from 'react';
import { InformationCircleIcon, ColorSwatchIcon } from '@heroicons/react/solid';
import { useStore } from '@data/store';

export const Header = () => {
	const mapColorType = useStore(state => state.mapColorType);
	const setMapColorType = useStore(state => state.setMapColorType);
	return (
		<header className='relative flex items-center justify-center p-2 h-14'>
			<h1 className='text-xl font-medium text-center text-white'>Latin America Political History</h1>
			<div className='absolute right-0 flex items-center'>
				<button
					name='toggle-map-colors'
					aria-label='Toggle map color scheme'
					type='button'
					className='p-2 mr-1 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500 hover:text-blue-500 text-white-500'
					onClick={() => setMapColorType(mapColorType === `global` ? `usa` : `global`)}
				>
					<ColorSwatchIcon className='w-6 h-6' />
				</button>
				<button
					name='open-map-info'
					aria-label='Open map info modal'
					type='button'
					className='p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-blue-500 hover:text-blue-500 text-white-500'
					onClick={() => null}
				>
					<InformationCircleIcon className='w-6 h-6' />
				</button>
			</div>
		</header>
	);
};

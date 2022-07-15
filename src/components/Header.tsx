import * as React from 'react';
import { InformationCircleIcon, ColorSwatchIcon, KeyIcon } from '@heroicons/react/solid';
import { useStore } from '@data/store';

export const Header = () => {
	const mapColorType = useStore(state => state.mapColorType);
	const setMapColorType = useStore(state => state.setMapColorType);
	const keyVisible = useStore(state => state.keyVisible);
	const setKeyVisible = useStore(state => state.setKeyVisible);

	return (
		<header className='relative flex items-center justify-center h-14'>
			<div className='absolute left-0 flex items-center'>
				<button
					name='toggle-map-colors'
					aria-label='Toggle map color scheme'
					type='button'
					className='p-2 mr-1 text-black rounded-md hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
					onClick={() => setKeyVisible(!keyVisible)}
				>
					<KeyIcon className='w-6 h-6' />
				</button>
			</div>
			<h1 className='text-xl font-medium text-center text-gray-900'>Latin America Political History</h1>
			<div className='absolute right-0 flex items-center'>
				<button
					name='toggle-map-colors'
					aria-label='Toggle map color scheme'
					type='button'
					className='p-2 mr-1 text-black rounded-md hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
					onClick={() => setMapColorType(mapColorType === `global` ? `usa` : `global`)}
				>
					<ColorSwatchIcon className='w-6 h-6' />
				</button>
				<button
					name='open-map-info'
					aria-label='Open map info modal'
					type='button'
					className='p-2 text-black rounded-md hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
					onClick={() => null}
				>
					<InformationCircleIcon className='w-6 h-6' />
				</button>
			</div>
		</header>
	);
};

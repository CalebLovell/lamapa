import * as React from 'react';
import { InformationCircleIcon, ColorSwatchIcon, KeyIcon } from '@heroicons/react/solid';
import { useStore } from '@data/store';

export const Toolbar = () => {
	const mapColorType = useStore(state => state.mapColorType);
	const setMapColorType = useStore(state => state.setMapColorType);
	const keyVisible = useStore(state => state.keyVisible);
	const setKeyVisible = useStore(state => state.setKeyVisible);

	return (
		<div className='absolute right-0 top-36 z-10 flex h-14 flex-col items-center justify-center'>
			<button
				name='open-map-info'
				aria-label='Open map info modal'
				type='button'
				className='rounded-md p-2 text-black hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
				onClick={() => null}
			>
				<InformationCircleIcon className='h-6 w-6' />
			</button>
			<button
				name='toggle-map-colors'
				aria-label='Toggle map color scheme'
				type='button'
				className='mr-1 rounded-md p-2 text-black hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
				onClick={() => setMapColorType(mapColorType === `global` ? `usa` : `global`)}
			>
				<ColorSwatchIcon className='h-6 w-6' />
			</button>
			<button
				name='toggle-map-colors'
				aria-label='Toggle map color scheme'
				type='button'
				className='mr-1 rounded-md p-2 text-black hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-0'
				onClick={() => setKeyVisible(!keyVisible)}
			>
				<KeyIcon className='h-6 w-6' />
			</button>
		</div>
	);
};

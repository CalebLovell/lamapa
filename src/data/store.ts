import create from 'zustand';

type MapState = {
	datetime: string;
	setDatetime: (by: string) => void;
	mapColorType: `global` | `usa`;
	setMapColorType: (by: `global` | `usa`) => void;
	selectedCountryName: string | null;
	setSelectedCountryName: (by: string | null) => void;
};

export const useStore = create<MapState>(set => ({
	datetime: `2022-01-01`,
	setDatetime: by => set(() => ({ datetime: by })),
	mapColorType: `global`,
	setMapColorType: by => set(() => ({ mapColorType: by })),
	selectedCountryName: null,
	setSelectedCountryName: by => set(() => ({ selectedCountryName: by })),
}));

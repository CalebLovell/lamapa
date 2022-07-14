import create from 'zustand';

type MapState = {
	year: number;
	setYear: (by: number) => void;
	mapColorType: `global` | `usa`;
	setMapColorType: (by: `global` | `usa`) => void;
	selectedCountryName: string | null;
	setSelectedCountryName: (by: string | null) => void;
};

export const useStore = create<MapState>(set => ({
	year: new Date().getFullYear(),
	setYear: by => set(() => ({ year: by })),
	mapColorType: `usa`,
	setMapColorType: by => set(() => ({ mapColorType: by })),
	selectedCountryName: null,
	setSelectedCountryName: by => set(() => ({ selectedCountryName: by })),
}));

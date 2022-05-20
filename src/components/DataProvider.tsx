import { MapColorType, Year } from '@data/data';
import * as React from 'react';

type Action =
	| { type: `SET_YEAR`; payload: Year }
	| { type: `SET_MAP_COLOR_TYPE`; payload: MapColorType }
	| { type: `SET_SELECTED_COUNTRY`; payload: string | null };
type Dispatch = (action: Action) => void;
type State = { year: Year; mapColorType: MapColorType; selectedCountryName: string | null };

const DataStateContext = React.createContext<State | undefined>(undefined);
const DataDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const initialDataState = {
	year: `2022-01-01` as Year,
	mapColorType: `global` as MapColorType,
	selectedCountryName: null,
};

const DataReducer = (state: State, action: Action) => {
	switch (action.type) {
		case `SET_YEAR`: {
			return { ...state, year: action.payload };
		}
		case `SET_MAP_COLOR_TYPE`: {
			return { ...state, mapColorType: action.payload };
		}
		case `SET_SELECTED_COUNTRY`: {
			return { ...state, selectedCountryName: action.payload };
		}
		default: {
			throw new Error(`Unhandled action type: ${action}`);
		}
	}
};

const DataProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(DataReducer, initialDataState);

	return (
		<DataStateContext.Provider value={state}>
			<DataDispatchContext.Provider value={dispatch}>{children}</DataDispatchContext.Provider>
		</DataStateContext.Provider>
	);
};

const useDataState = (): State => {
	const context = React.useContext(DataStateContext);
	if (context === undefined) {
		throw new Error(`useDataState must be used within a DataProvider`);
	}
	return context;
};

const useDataDispatch = (): Dispatch => {
	const context = React.useContext(DataDispatchContext);
	if (context === undefined) {
		throw new Error(`useDataDispatch must be used within a DataProvider`);
	}
	return context;
};

export { DataProvider, useDataState, useDataDispatch };

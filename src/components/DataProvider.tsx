import { Year, years } from '@data/data';
import * as React from 'react';

type Action = { type: `SET_YEAR`; payload: Year };
type Dispatch = (action: Action) => void;
type State = { year: Year };

const DataStateContext = React.createContext<State | undefined>(undefined);
const DataDispatchContext = React.createContext<Dispatch | undefined>(undefined);

const initialDataState = {
	year: years[0],
};

const DataReducer = (state: State, action: Action) => {
	switch (action.type) {
		case `SET_YEAR`: {
			return { ...state, year: action.payload };
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

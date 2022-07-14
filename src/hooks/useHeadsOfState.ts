import { useQuery } from 'react-query';
import axios from 'axios';
import { HeadOfStateReturn } from '@data/types';
import { useStore } from '@data/store';

const getHeadsOfState = async (year: number) => {
	const dateObj = new Date(year.toString());
	console.log(dateObj);
	const { data } = await axios.get<HeadOfStateReturn[]>(`/api/headOfState`, {
		params: {
			date: dateObj,
		},
	});
	return data;
};

export const useHeadsOfState = () => {
	const year = useStore(state => state.year);
	return useQuery([`headsOfState`, year], () => getHeadsOfState(year));
};

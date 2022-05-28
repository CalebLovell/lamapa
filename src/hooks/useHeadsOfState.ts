import { useQuery } from 'react-query';
import axios from 'axios';
import { HeadOfStateReturn } from '@data/types';

const getHeadsOfState = async (date: Date) => {
	const { data } = await axios.get<HeadOfStateReturn[]>(`/api/headOfState`, {
		params: {
			date,
		},
	});
	return data;
};

export const useHeadsOfState = (date: Date) => {
	return useQuery([`headsOfState`, date], () => getHeadsOfState(date));
};

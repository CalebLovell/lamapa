import { useQuery } from 'react-query';
import axios from 'axios';
import { HeadOfState } from '@prisma/client';

const getHeadsOfState = async (date: Date) => {
	const { data } = await axios.get<HeadOfState[]>(`/api/headOfState`, {
		params: {
			date,
		},
	});
	return data;
};

export const useHeadsOfState = (date: Date) => {
	return useQuery([`headsOfState`, date], () => getHeadsOfState(date));
};

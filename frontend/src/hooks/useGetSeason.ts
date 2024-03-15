import { useFetch } from './useFetch';
import { SeasonForm } from '../pages/SeasonPlanPage';

export function useGetSeason(form: SeasonForm) {
	const url = new URL('url');

	return useFetch<string>(url, form, 'GET');
}

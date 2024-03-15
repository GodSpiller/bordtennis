import { useEffect, useState } from 'react';
import { SeasonForm } from '../pages/SeasonPlanPage';

type userCreate = {
	email: string;
	name: string;
};

export function useFetch<T>(url: URL, body: SeasonForm, method: 'POST' | 'GET') {
	const [data, setData] = useState<T>();
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	const fetchData = async () => {
		try {
			setLoading(true);
			const request = await fetch(url, {
				method: method,
				body: JSON.stringify(body),
				headers: { 'Content-Type': 'application/json; charset=UTF-8' },
			});

			const response = await request.json();
			setData(response);
		} catch (e) {
			setError(e as string);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	return { data, loading, error };
}

import { z } from 'zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ageGroups, classes, regi, seasons } from '../constants';
import { Select } from '../components/selects/Select';
import { DoubleInput } from '../components/inputs/DoubleInput';
import { useGetSeason } from '../hooks/useGetSeason';
import { useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

const SeasonFormSchema = z.object({
	season: z.string(),
	classes: z.string(),
	ageGroup: z.string(),
	regi: z.string(),
	weekFrom: z.string(),
	weekTo: z.string(),
	dateFrom: z.string(),
	dateTo: z.string(),
});

export type SeasonForm = z.infer<typeof SeasonFormSchema>;

export function SeasonPlanPage() {
	const {
		register,
		handleSubmit,
		getValues,
		formState: { errors },
	} = useForm<SeasonForm>({ resolver: zodResolver(SeasonFormSchema) });
	const [data, setData] = useState(null);

	const onSubmit: SubmitHandler<SeasonForm> = async data => {
		console.log(data);
	};

	return (
		<form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
			<Select label="Sæson" register={register} options={seasons} id="season" />
			<Select label="Klasse" register={register} options={classes} id="classes" />
			<Select label="Aldersgruppe" register={register} options={ageGroups} id="ageGroup" />
			<Select label="Regi" register={register} options={regi} id="regi" />
			<DoubleInput from="dateFrom" to="dateTo" label="Dato" register={register} type="date" />
			<DoubleInput from="weekFrom" to="weekTo" label="Uge" register={register} type="week" />
			<button type="submit">Søg</button>
		</form>
	);
}

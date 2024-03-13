import { z } from 'zod';
import { useForm } from 'react-hook-form';
import SelectOptions from '../components/selects/SelectOptions';
import { ageGroups, classes, regi, seasons } from '../constants';
import { WeekInput } from '../components/inputs/WeekInput';
import { Select } from '../components/selects/Select';
import { DoubleInput } from '../components/inputs/DoubleInput';

const SeasonFormSchema = z.object({
	classes: z.string(),
	ageGroup: z.string(),
	regi: z.string(),
	weekFrom: z.date(),
	weekTo: z.date(),
	dateFrom: z.date(),
	dateTo: z.date(),
});

export type SeasonForm = z.infer<typeof SeasonFormSchema>;

export function SeasonPlanPage() {
	const { register } = useForm<SeasonForm>();

	return (
		<div className="">
			<form>
				<Select label="Sæson" register={register} options={seasons} />
				<Select label="Klasse" register={register} options={classes} />
				<Select label="Aldersgruppe" register={register} options={ageGroups} />
				<Select label="Regi" register={register} options={regi} />
				<DoubleInput from="dateFrom" to="dateTo" label="Dato" register={register} type="date" />
				<DoubleInput from="weekFrom" to="weekTo" label="Uge" register={register} type="week" />
			</form>
		</div>
	);
}

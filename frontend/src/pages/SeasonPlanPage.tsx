import { z } from 'zod';
import { useForm } from 'react-hook-form';
import SelectOptions from '../components/selects/SelectOptions';
import { ageGroups, classes, regi, seasons } from '../constants';
import { WeekInput } from '../components/inputs/WeekInput';

const SeasonFormSchema = z.object({
	classes: z.string(),
	ageGroup: z.string(),
	regi: z.string(),
});

type SeasonForm = z.infer<typeof SeasonFormSchema>;

export function SeasonPlanPage() {
	const { register } = useForm<SeasonForm>();

	return (
		<div className="">
			<form>
				<label>Sæson</label>
				<select {...register('regi')}>
					<SelectOptions options={seasons} />
				</select>
				<label>Klasse</label>
				<select {...register('classes')}>
					<SelectOptions options={classes} />
				</select>
				<label>Aldersgruppe</label>
				<select {...register('ageGroup')}>
					<SelectOptions options={ageGroups} />
				</select>
				<label>Regi</label>
				<select {...register('regi')}>
					<SelectOptions options={regi} />
				</select>
				<label>Uge</label>
				<WeekInput></WeekInput>
			</form>
		</div>
	);
}

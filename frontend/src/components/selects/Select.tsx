import { FieldValues, UseFormRegister } from 'react-hook-form';
import { SelectElement, seasons } from '../../constants';
import SelectOptions from './SelectOptions';
import { SeasonForm } from '../../pages/SeasonPlanPage';

export type SelectProps = {
	label: string;
	options: SelectElement[];
	register: UseFormRegister<SeasonForm>;
};

export function Select({ label, options, register }: SelectProps) {
	return (
		<>
			<label>{label}</label>
			<select {...register('regi')}>
				<SelectOptions options={options} />
			</select>
		</>
	);
}

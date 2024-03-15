import { UseFormRegister } from 'react-hook-form';
import { SelectElement } from '../../constants';
import SelectOptions from './SelectOptions';
import { SeasonForm } from '../../pages/SeasonPlanPage';

export type SelectProps = {
	label: string;
	id: keyof SeasonForm;
	options: SelectElement[];
	register: UseFormRegister<SeasonForm>;
};

export function Select({ label, options, register, id }: SelectProps) {
	return (
		<>
			<label>{label}</label>
			<select {...register(id)}>
				<SelectOptions options={options} />
			</select>
		</>
	);
}

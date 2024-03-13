import { UseFormRegister } from 'react-hook-form';
import { SeasonForm } from '../../pages/SeasonPlanPage';

type DoubleInputProps = {
	label: string;
	type: string;
	from: keyof SeasonForm;
	to: keyof SeasonForm;
	register: UseFormRegister<SeasonForm>;
};

export function DoubleInput({ label, type, from, to, register }: DoubleInputProps) {
	return (
		<>
			<label>{label}</label>
			<p>
				<input {...register(from)} className="border border-black h-[28px]" type={type} /> -{' '}
				<input {...register(to)} className="border border-black h-[28px]" type={type} />
			</p>
		</>
	);
}

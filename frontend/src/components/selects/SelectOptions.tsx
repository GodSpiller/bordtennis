import { SelectElement } from '../../constants';

type SelectOptionsProps = {
	options: SelectElement[];
};

export default function SelectOptions({ options }: SelectOptionsProps) {
	return (
		<>
			{options.map(option => (
				<option key={option.id}>{option.title}</option>
			))}
		</>
	);
}

import { regi } from '../../constants';

type Props = {
	setRegi: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function RegiSelect({ setRegi }: Props) {
	return (
		<form className="flex flex-col w-[260px]">
			<label>Regi</label>
			<select onChange={setRegi} className="border-black border h-[28px]">
				{regi.map(regi => (
					<option key={regi.id} value={regi.id}>
						{regi.title}
					</option>
				))}
			</select>
		</form>
	);
}

import { seasons } from '../../constants';

type Props = {
	setSeason: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function SeasonSelect({ setSeason }: Props) {
	return (
		<form className="flex flex-col w-[260px]">
			<label>Sæson</label>
			<select onChange={setSeason} className="border-black border h-[28px]">
				{seasons.map(season => (
					<option key={season.id} value={season.id}>
						{season.title}
					</option>
				))}
			</select>
		</form>
	);
}

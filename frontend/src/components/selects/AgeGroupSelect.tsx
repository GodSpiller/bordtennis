type Props = {
	setAgeGroup: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function AgeGroupSelect({ setAgeGroup }: Props) {
	return (
		<form className="flex flex-col w-[130px] ">
			<label>Aldersgruppe</label>
			<select onChange={setAgeGroup} className="border-black border h-[28px]">
				{ageGroups.map(age => (
					<option key={age.id} value={age.id}>
						{age.title}
					</option>
				))}
			</select>
		</form>
	);
}

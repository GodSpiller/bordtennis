type Season = {
  title: string;
  identifier: number;
};

const seasons: Season[] = [
  {
    identifier: 0,
    title: "",
  },
  {
    identifier: 1,
    title: "2023/2024",
  },
];

type Props = {
  setSeason: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function SeasonSelect({ setSeason }: Props) {
  return (
    <form className="flex flex-col w-[260px]">
      <label>Sæson</label>
      <select onChange={setSeason} className="border-black border h-[28px]">
        {seasons.map((season) => (
          <option key={season.identifier} value={season.identifier}>
            {season.title}
          </option>
        ))}
      </select>
    </form>
  );
}

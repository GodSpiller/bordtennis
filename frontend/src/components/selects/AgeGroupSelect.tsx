type AgeGroup = {
  title: string;
  identifier: number;
};

const ageGroups: AgeGroup[] = [
  {
    identifier: 0,
    title: "",
  },
  {
    identifier: 1,
    title: "Puslinge",
  },
  {
    identifier: 2,
    title: "Ydr/Ypg",
  },
  {
    identifier: 3,
    title: "Dr/Pg",
  },
  {
    identifier: 4,
    title: "Junior",
  },
  {
    identifier: 5,
    title: "U 21",
  },
  {
    identifier: 6,
    title: "Senior",
  },
  {
    identifier: 7,
    title: "Old Girls",
  },
  {
    identifier: 8,
    title: "Veteran 40",
  },
  {
    identifier: 9,
    title: "Veteran 50",
  },
  {
    identifier: 10,
    title: "Veteran 60",
  },
  {
    identifier: 11,
    title: "Veteran 65",
  },
  {
    identifier: 12,
    title: "Veteran 70",
  },
  {
    identifier: 13,
    title: "Veteran 75",
  },
  {
    identifier: 14,
    title: "Veteran 80",
  },
  {
    identifier: 15,
    title: "Veteran 85",
  },
  {
    identifier: 16,
    title: "Ungdom",
  },
  {
    identifier: 17,
    title: "Minipuslinge",
  },
  {
    identifier: 18,
    title: "Oldies",
  },
  {
    identifier: 19,
    title: "Veteran",
  },
];

type Props = {
  setAgeGroup: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function AgeGroupSelect({ setAgeGroup }: Props) {
  return (
    <form className="flex flex-col w-[130px] ">
      <label>Aldersgruppe</label>
      <select onChange={setAgeGroup} className="border-black border h-[28px]">
        {ageGroups.map((age) => (
          <option key={age.identifier} value={age.identifier}>
            {age.title}
          </option>
        ))}
      </select>
    </form>
  );
}

type Class = {
  title: string;
  identifier: number;
};

const classes: Class[] = [
  {
    identifier: 0,
    title: "",
  },
  {
    identifier: 1,
    title: "Elite",
  },
  {
    identifier: 2,
    title: "1",
  },
  {
    identifier: 3,
    title: "2",
  },
  {
    identifier: 4,
    title: "3",
  },
  {
    identifier: 5,
    title: "4",
  },
  {
    identifier: 6,
    title: "5",
  },
  {
    identifier: 7,
    title: "6",
  },
  {
    identifier: 8,
    title: "7",
  },
  {
    identifier: 9,
    title: "A",
  },
  {
    identifier: 10,
    title: "B",
  },
  {
    identifier: 11,
    title: "C",
  },
  {
    identifier: 12,
    title: "D",
  },
  {
    identifier: 13,
    title: "E",
  },
  {
    identifier: 14,
    title: "F",
  },
  {
    identifier: 15,
    title: "G",
  },
  {
    identifier: 16,
    title: "Alle",
  },
];

type Props = {
  setClass: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function ClassSelect({ setClass }: Props) {
  return (
    <form className="flex flex-col w-[130px] ">
      <label>Klasse</label>
      <select onChange={setClass} className="border-black border h-[28px] ">
        {classes.map((clas) => (
          <option key={clas.identifier} value={clas.identifier}>
            {clas.title}
          </option>
        ))}
      </select>
    </form>
  );
}

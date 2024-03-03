type Regi = {
  title: string;
  identifier: number;
};

const regi: Regi[] = [
  {
    identifier: 0,
    title: "",
  },
  {
    identifier: 1,
    title: "Bordtennis Danmar/DT",
  },
  {
    identifier: 2,
    title: "DGI Bornholm",
  },
  {
    identifier: 3,
    title: "DGI Jylland Nord",
  },
  {
    identifier: 4,
    title: "DGI Jylland Syd",
  },
  {
    identifier: 5,
    title: "DGI Sjælland",
  },
  {
    identifier: 6,
    title: "MIDT (Fyn)",
  },
  {
    identifier: 7,
    title: "VEST (Jylland)",
  },
  {
    identifier: 8,
    title: "ØST (Sjælland, Lolland F.)",
  },
];

type Props = {
  setRegi: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function RegiSelect({ setRegi }: Props) {
  return (
    <form className="flex flex-col w-[260px]">
      <label>Regi</label>
      <select onChange={setRegi} className="border-black border h-[28px]">
        {regi.map((regi) => (
          <option key={regi.identifier} value={regi.identifier}>
            {regi.title}
          </option>
        ))}
      </select>
    </form>
  );
}

import { useState } from "react";
import { AgeGroupSelect } from "../components/selects/AgeGroupSelect";

export function SeasonPlanPage() {
  const [ageGroup, setAgeGroup] = useState<string | undefined>();

  const ageGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAgeGroup(event.target.value);
    console.log(ageGroup);
  };

  return (
    <div className="flex flex-col">
      Sæsonplan!
      <AgeGroupSelect setAgeGroup={ageGroupChange} />
    </div>
  );
}

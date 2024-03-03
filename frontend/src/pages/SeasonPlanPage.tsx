import { useState } from "react";
import { AgeGroupSelect } from "../components/selects/AgeGroupSelect";
import { WeekInput } from "../components/inputs/WeekInput";
import { RegiSelect } from "../components/selects/RegiSelect";

export function SeasonPlanPage() {
  const [ageGroup, setAgeGroup] = useState<string | undefined>();
  const [regi, setRegi] = useState<string | undefined>();

  const ageGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAgeGroup(event.target.value);
    console.log(ageGroup);
  };

  const regiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegi(event.target.value);
    console.log(regi);
  };

  return (
    <div className="flex flex-row gap-3">
      <AgeGroupSelect setAgeGroup={ageGroupChange} />
      <RegiSelect setRegi={regiChange}></RegiSelect>
      <WeekInput />
    </div>
  );
}

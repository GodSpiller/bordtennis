import { useState } from "react";
import { AgeGroupSelect } from "../components/selects/AgeGroupSelect";
import { WeekInput } from "../components/inputs/WeekInput";
import { RegiSelect } from "../components/selects/RegiSelect";
import { SeasonSelect } from "../components/selects/SeasonSelect";
import { DateSelect } from "../components/selects/DateSelect";
import { ClassSelect } from "../components/selects/ClassSelect";
import { SearchButton } from "../components/SearchButton";

export function SeasonPlanPage() {
  const [ageGroup, setAgeGroup] = useState<string | undefined>();
  const [regi, setRegi] = useState<string | undefined>();
  const [season, setSeason] = useState<string | undefined>();
  const [_class, setClass] = useState<string | undefined>();

  const ageGroupChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAgeGroup(event.target.value);
    console.log(ageGroup);
  };

  const regiChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setRegi(event.target.value);
    console.log(regi);
  };

  const seasonChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSeason(event.target.value);
    console.log(season);
  };

  const classChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setClass(event.target.value);
    console.log(_class);
  };

  const Search = () => {
    // call api hook with search parameters
  };

  return (
    <div>
      <div className="flex flex-row gap-3">
        <SeasonSelect setSeason={seasonChange} />
        <RegiSelect setRegi={regiChange} />
        <AgeGroupSelect setAgeGroup={ageGroupChange} />
        <ClassSelect setClass={classChange} />
        <DateSelect />
        <WeekInput />
      </div>
      <SearchButton search={() => null} />
    </div>
  );
}

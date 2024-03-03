export function WeekInput() {
  return (
    <form className="flex flex-col">
      <label>Uge</label>
      <div>
        <input className="border border-black" type="week"></input> -{" "}
        <input className="border border-black" type="week"></input>
      </div>
    </form>
  );
}

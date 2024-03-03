export function WeekInput() {
  return (
    <form className="flex flex-col">
      <label>Uge</label>
      <p>
        <input className="border border-black h-[28px]" type="week" /> -{" "}
        <input className="border border-black h-[28px]" type="week" />
      </p>
    </form>
  );
}

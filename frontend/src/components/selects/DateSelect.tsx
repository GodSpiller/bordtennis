export function DateSelect() {
  return (
    <form className="flex flex-col">
      <label>Dato</label>
      <p>
        <input className="border border-black h-[28px]" type="date" /> -{" "}
        <input className="border border-black h-[28px]" type="date" />
      </p>
    </form>
  );
}

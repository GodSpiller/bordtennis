type Props = {
  search: () => void;
};

export function SearchButton({ search }: Props) {
  return <button onClick={search}>search</button>;
}

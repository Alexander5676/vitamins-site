export default function SearchInput({ value, onChange }: any) {
  return (
    <input
      className="mb-6 p-3 border rounded-xl w-full"
      placeholder="Поиск витамина"
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
}

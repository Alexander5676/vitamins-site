export default function VitaminCard({ title, benefit, id }: any) {
  return (
    <a href={`/vitamins/${id}`} className="p-6 bg-white rounded-xl shadow">
      <h3 className="font-bold">{title}</h3>
      <p>{benefit}</p>
    </a>
  );
}

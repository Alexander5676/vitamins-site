import { vitamins } from '@/data/vitamins';
import VitaminInfoBlocks from '@/components/VitaminInfoBlocks';

export default function VitaminPage({ params }: any) {
  const vitamin = vitamins.find(v => v.id === params.id);
  if (!vitamin) return null;

  return (
    <main className="p-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{vitamin.title}</h1>
      <VitaminInfoBlocks {...vitamin} />
    </main>
  );
}

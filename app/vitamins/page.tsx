import VitaminGrid from '@/components/VitaminGrid';
import { vitamins } from '@/data/vitamins';

export default function VitaminsPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <VitaminGrid vitamins={vitamins} />
    </main>
  );
}

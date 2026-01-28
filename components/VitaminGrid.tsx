'use client';
import VitaminCard from './VitaminCard';
import SearchInput from './SearchInput';
import { useState } from 'react';

export default function VitaminGrid({ vitamins }: any) {
  const [q, setQ] = useState('');
  const filtered = vitamins.filter(v =>
    v.title.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <>
      <SearchInput value={q} onChange={setQ} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filtered.map(v => <VitaminCard key={v.id} {...v} />)}
      </div>
    </>
  );
}

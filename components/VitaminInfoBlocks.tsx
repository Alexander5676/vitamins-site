export default function VitaminInfoBlocks({ benefit, deficiency, sources }: any) {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <div><b>Польза</b><p>{benefit}</p></div>
      <div><b>Дефицит</b><p>{deficiency}</p></div>
      <div><b>Источники</b><p>{sources.join(', ')}</p></div>
    </div>
  );
}

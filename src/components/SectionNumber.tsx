export default function SectionNumber({ num }: { num: string }) {
  return (
    <span
      className="font-serif-head inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#1e293b]/30 text-sm font-medium text-[#1e293b] relative"
      style={{
        transform: "rotate(-2deg)",
        boxShadow: "1px 2px 0 rgba(30,41,59,0.06)",
      }}
    >
      {num}
    </span>
  );
}

import { farbtoene } from "@/constants";

// Beim Laden und beim Seitenwechsel fallen die Farbtöne an den unteren Rand
export default function Farbvorhang() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 top-[calc(var(--header)+1px)] z-30 flex motion-reduce:hidden"
    >
      {farbtoene.map((ton, index) => (
        <div
          key={ton.name}
          className="farbvorhang-balken flex-1"
          style={{
            backgroundColor: ton.hex,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}

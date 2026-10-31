import { farbtoene } from "@/constants";

// Beim Laden und beim Seitenwechsel fallen die Farbtöne an den unteren Rand.
// Die Breiten entsprechen der Farbleiste auf der Startseite.
export default function Farbvorhang() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 bottom-0 top-[calc(var(--header)+1px)] z-30 flex motion-reduce:hidden"
    >
      {farbtoene.map((ton, index) => (
        <div
          key={ton.name}
          className="farbvorhang-balken basis-0"
          style={{
            backgroundColor: ton.hex,
            flexGrow: index === 0 ? 4 : 1,
            animationDelay: `${index * 50}ms`,
          }}
        />
      ))}
    </div>
  );
}

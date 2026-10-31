import Reveal from "@/components/ui/reveal";
import { farbtoene } from "@/constants";

export default function Farbleiste() {
  return (
    <Reveal art="kachel" ohneRand aria-hidden="true" className="flex h-3">
      {farbtoene.map((ton) => (
        <div
          key={ton.name}
          className="flex-1"
          style={{ backgroundColor: ton.hex }}
        />
      ))}
    </Reveal>
  );
}

import { useRef } from "react";
import { Dialog } from "@headlessui/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import type { Referenz } from "@/constants/referenzen";

interface LightboxProps {
  bilder: Referenz[];
  index: number | null;
  onChange: (index: number) => void;
  onClose: () => void;
}

const buttonClass =
  "flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15";

export default function Lightbox({
  bilder,
  index,
  onChange,
  onClose,
}: LightboxProps) {
  const wischStart = useRef<number | null>(null);

  const bild = index === null ? null : bilder[index];
  const blaettern = (schritt: number) =>
    onChange((index! + schritt + bilder.length) % bilder.length);

  return (
    <Dialog
      open={bild !== null}
      onClose={onClose}
      className="relative z-50"
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "ArrowLeft") blaettern(-1);
        if (event.key === "ArrowRight") blaettern(1);
      }}
    >
      {bild && (
        <Dialog.Panel className="fixed inset-0 flex flex-col bg-mbfir text-white duration-200 [--ring:var(--mblime)] motion-safe:animate-in motion-safe:fade-in">
          <div className="gutter flex min-h-[var(--header)] shrink-0 items-center justify-between gap-x-4">
            <Dialog.Title className="text-lg lg:text-2xl">
              {bild.title}
            </Dialog.Title>
            <button
              type="button"
              onClick={onClose}
              className={buttonClass}
              aria-label="Schließen"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div
            className="relative min-h-0 flex-1"
            onTouchStart={(event) => {
              wischStart.current =
                event.touches.length === 1 ? event.touches[0].clientX : null;
            }}
            onTouchEnd={(event) => {
              if (wischStart.current === null) return;
              const weg = event.changedTouches[0].clientX - wischStart.current;
              if (Math.abs(weg) > 50) blaettern(weg < 0 ? 1 : -1);
            }}
          >
            <img
              key={bild.src}
              src={bild.src}
              srcSet={bild.srcSet}
              sizes="100vw"
              alt={bild.title}
              className="wisch-ein h-full w-full object-contain"
            />
          </div>

          <div className="gutter flex h-20 shrink-0 items-center justify-between">
            <button
              type="button"
              onClick={() => blaettern(-1)}
              className={buttonClass}
              aria-label="Vorheriges Bild"
            >
              <ChevronLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
            <span className="tabular-nums text-white/80">
              {index! + 1} von {bilder.length}
            </span>
            <button
              type="button"
              onClick={() => blaettern(1)}
              className={buttonClass}
              aria-label="Nächstes Bild"
            >
              <ChevronRightIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </Dialog.Panel>
      )}
    </Dialog>
  );
}

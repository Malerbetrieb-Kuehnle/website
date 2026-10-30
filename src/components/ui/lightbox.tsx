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
  "flex h-12 w-12 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15";

export default function Lightbox({
  bilder,
  index,
  onChange,
  onClose,
}: LightboxProps) {
  if (index === null) return null;

  const bild = bilder[index];
  const blaettern = (schritt: number) =>
    onChange((index + schritt + bilder.length) % bilder.length);

  return (
    <Dialog
      open
      onClose={onClose}
      className="relative z-50"
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "ArrowLeft") blaettern(-1);
        if (event.key === "ArrowRight") blaettern(1);
      }}
    >
      <Dialog.Panel className="fixed inset-0 flex flex-col bg-mbfir text-white">
        <div className="gutter flex h-[var(--header)] shrink-0 items-center justify-between">
          <Dialog.Title className="truncate pr-4">{bild.title}</Dialog.Title>
          <button
            type="button"
            onClick={onClose}
            className={buttonClass}
            aria-label="Schließen"
          >
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="relative min-h-0 flex-1">
          <img
            key={bild.src}
            src={bild.src}
            srcSet={bild.srcSet}
            sizes="100vw"
            alt={bild.title}
            className="h-full w-full object-contain"
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
            {index + 1} von {bilder.length}
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
    </Dialog>
  );
}

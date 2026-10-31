const urls = import.meta.glob<string>("../assets/projekte/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
});

const url = (slug: string, width: number) =>
  urls[`../assets/projekte/${slug}-${width}.webp`];

export const projektBild = (slug: string, width = 1600) => url(slug, width);

export const projektSrcSet = (slug: string) =>
  [800, 1600, 2400]
    .filter((width) => url(slug, width))
    .map((width) => `${url(slug, width)} ${width}w`)
    .join(", ");

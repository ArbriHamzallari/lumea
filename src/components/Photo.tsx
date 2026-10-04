import Image from "next/image";
import type { Photo as PhotoT } from "@/content/images";
import type { Locale } from "@/lib/i18n";

type Props = {
  photo: PhotoT;
  locale: Locale;
  sizes: string;
  className?: string;
  /** Use for the one above-the-fold image per page. */
  preload?: boolean;
  /** Fill the parent box (parent must be positioned and sized). */
  fill?: boolean;
  position?: string;
};

export function Photo({ photo, locale, sizes, className = "", preload, fill, position }: Props) {
  const common = {
    src: photo.src,
    sizes,
    placeholder: "blur" as const,
    blurDataURL: photo.blur,
    preload,
    loading: preload ? undefined : ("lazy" as const),
    className,
    style: position ? { objectPosition: position } : undefined,
  };
  const alt = photo.alt[locale];
  if (fill) return <Image {...common} alt={alt} fill />;
  return <Image {...common} alt={alt} width={photo.width} height={photo.height} />;
}

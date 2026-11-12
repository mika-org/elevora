import { cn } from "@/lib/utils";

const tones = {
  yellow: "bg-yellow text-ink",
  blue: "bg-blue text-white",
  coral: "bg-coral text-white",
  purple: "bg-purple text-white",
  teal: "bg-teal text-ink",
} as const;

export type HighlightTone = keyof typeof tones;

/** Flat colored block behind a word, as used in every Elevore heading. */
export function Highlight({
  tone,
  children,
  className,
}: {
  tone: HighlightTone;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-block px-2 leading-[1.25] box-decoration-clone",
        tones[tone],
        className
      )}
    >
      {children}
    </span>
  );
}

/** Section heading: "Plain text [highlighted]". */
export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight text-ink sm:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}

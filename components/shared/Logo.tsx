import Link from "next/link";
import { cn } from "@/lib/utils";

/** Elevore mark: a sparkle above five rising colored stripes. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 212 234"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <path d="M105 3Q108 22 127 27Q108 32 105 51Q102 32 83 27Q102 22 105 3Z" fill="#FDBE3B" />
      <path d="M2 183Q30 170 56 152Q40 185 28 215L2 215Z" fill="#55BDB5" />
      <path d="M67 115L87 103L87 135Q78 195 62 231L20 231Q50 185 67 115Z" fill="#1E79EE" />
      <path d="M98 81L117 63L117 165Q120 205 128 231L80 231Q92 205 96 165Z" fill="#7B47CB" />
      <path d="M126 107L146 120Q162 185 194 231L150 231Q134 195 126 135Z" fill="#FF6B6B" />
      <path d="M158 152Q184 170 210 183L210 215L184 215Q172 185 158 152Z" fill="#FDBE3B" />
    </svg>
  );
}

export function Logo({ className, href = "/" }: { className?: string; href?: string }) {
  return (
    <Link
      href={href}
      aria-label="Elevore — beranda"
      className={cn("inline-flex items-center gap-2", className)}
    >
      <LogoMark className="h-8 w-8" />
      <span className="text-xl font-medium tracking-tight text-ink">elevore</span>
    </Link>
  );
}

import Link from "next/link";
import { Logo } from "@/components/shared/Logo";
import { NAV_LINKS, SOCIAL_LINKS, whatsappLink } from "@/lib/site";

export function Footer() {
  const contacts = [
    { label: "WhatsApp", href: whatsappLink() },
    { label: "Instagram", href: SOCIAL_LINKS.instagram },
    { label: "TikTok", href: SOCIAL_LINKS.tiktok },
  ];

  return (
    <footer className="sheet bg-cream pb-10 pt-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 sm:grid-cols-[1.6fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-soft">
              Bantu bisnismu naik level lewat web, aplikasi, dan otomasi.
            </p>
          </div>

          <nav aria-label="Jelajahi">
            <h3 className="text-sm font-semibold text-ink">Jelajahi</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-soft">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-blue">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold text-ink">Hubungi kami</h3>
            <ul className="mt-3 flex flex-col gap-2 text-sm text-ink-soft">
              {contacts.map((c) => (
                <li key={c.label}>
                  <a href={c.href} target="_blank" rel="noopener noreferrer" className="hover:text-blue">
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-ink/10 pt-6 text-xs text-ink-soft">
          © 2026 Elevore
        </div>
      </div>
    </footer>
  );
}

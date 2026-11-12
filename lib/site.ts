// Central place for contact links and nav items used across the landing page.
// TODO: replace the WhatsApp number and social links with the real ones.
export const WHATSAPP_NUMBER = "6282134567890";

export const whatsappLink = (text = "Halo Elevore, aku mau ngobrol soal bisnisku") =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/",
  tiktok: "https://tiktok.com/",
};

export const NAV_LINKS = [
  { label: "Cara Kerja", href: "/#cara-kerja" },
  { label: "Portofolio", href: "/#portofolio" },
  { label: "Artikel", href: "/artikel" },
  { label: "FAQ", href: "/#faq" },
] as const;

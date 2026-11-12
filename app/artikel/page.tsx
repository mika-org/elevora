import type { Metadata } from "next";
import { ArticleList } from "@/components/artikel/ArticleList";

export const metadata: Metadata = {
  title: "Artikel — Elevore",
  description: "Semua tips dan cerita UMKM yang mungkin bisa bantu bisnis kamu berkembang.",
  alternates: { canonical: "/artikel" },
};

export default function ArtikelPage() {
  return <ArticleList />;
}

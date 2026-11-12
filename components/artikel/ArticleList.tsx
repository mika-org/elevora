"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { ArticleCard } from "@/components/artikel/ArticleCard";
import { ARTICLES, CATEGORIES, type CategoryKey } from "@/lib/articles";
import { cn } from "@/lib/utils";

const FILTERS: { key: CategoryKey | "semua"; label: string }[] = [
  { key: "semua", label: "Semua" },
  ...(Object.keys(CATEGORIES) as CategoryKey[]).map((key) => ({
    key,
    label: CATEGORIES[key].label,
  })),
];

export function ArticleList() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<CategoryKey | "semua">("semua");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ARTICLES.filter(
      (a) =>
        (filter === "semua" || a.category === filter) &&
        (!q || a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q))
    );
  }, [query, filter]);

  return (
    <>
      <section className="bg-mint pb-24 pt-28 sm:pt-36">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="inline-block bg-yellow px-3 text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Artikel
          </h1>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-ink-soft sm:text-base">
            Semua tips dan cerita UMKM yang mungkin bisa bantu bisnis kamu berkembang!
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <label className="relative w-full sm:w-56">
              <span className="sr-only">Cari artikel</span>
              <Search className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari artikel..."
                className="h-10 w-full rounded-full border-[1.5px] border-ink bg-white pl-10 pr-4 text-sm text-ink outline-none placeholder:text-ink-soft focus-visible:ring-2 focus-visible:ring-blue"
              />
            </label>
            {FILTERS.map((f) => (
              <button
                key={f.key}
                type="button"
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
                className={cn(
                  "h-9 rounded-full border-[1.5px] border-ink px-4 text-xs font-semibold transition-colors",
                  filter === f.key ? "bg-ink text-white" : "bg-transparent text-ink hover:bg-ink/5"
                )}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="sheet bg-cream pb-24 pt-14">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm font-medium text-ink" aria-live="polite">
            {results.length} artikel
          </p>

          {results.length > 0 ? (
            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          ) : (
            <div className="mt-5 rounded-3xl border-2 border-dashed border-ink/15 px-6 py-14 text-center">
              <p className="font-semibold text-ink">Belum ada artikel yang cocok.</p>
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  setFilter("semua");
                }}
                className="mt-3 text-sm font-medium text-blue hover:underline"
              >
                Lihat semua artikel
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

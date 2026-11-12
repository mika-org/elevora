import Link from "next/link";
import { CATEGORIES, formatDate, type Article } from "@/lib/articles";
import { cn } from "@/lib/utils";

/** Figma "Artikel Card": white card, category pill, colored blob in the top-right corner. */
export function ArticleCard({ article }: { article: Article }) {
  const cat = CATEGORIES[article.category];

  return (
    <Link
      href={`/artikel/${article.slug}`}
      className="group relative flex min-h-[220px] flex-col overflow-hidden rounded-3xl bg-white p-6 shadow-[0_10px_30px_-18px_rgba(27,31,58,0.35)] outline-none transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_36px_-18px_rgba(27,31,58,0.45)] focus-visible:ring-2 focus-visible:ring-blue"
    >
      <span
        aria-hidden
        className={cn(
          "absolute right-0 top-0 h-16 w-16 origin-top-right rounded-[40%_0_0_50%] transition-transform duration-300 group-hover:scale-110",
          cat.blob
        )}
      />
      <span className={cn("self-start rounded-full px-2.5 py-0.5 text-[11px] font-semibold", cat.pill)}>
        {cat.label}
      </span>
      <h3 className="mt-3 pr-12 text-base font-bold leading-snug text-ink">{article.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">{article.excerpt}</p>
      <time dateTime={article.date} className="mt-auto pt-6 text-xs text-ink-soft">
        {formatDate(article.date)}
      </time>
    </Link>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { ArticleCard } from "@/components/artikel/ArticleCard";
import { ARTICLES, CATEGORIES, formatDate, getArticle, type ArticleBlock } from "@/lib/articles";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

// Only the articles we know about exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(props: PageProps<"/artikel/[slug]">): Promise<Metadata> {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} — Elevore`,
    description: article.excerpt,
    alternates: { canonical: `/artikel/${article.slug}` },
    openGraph: { type: "article", title: article.title, description: article.excerpt },
  };
}

function Block({ block }: { block: ArticleBlock }) {
  switch (block.type) {
    case "h2":
      return <h2 className="mt-10 text-xl font-bold text-ink sm:text-2xl">{block.text}</h2>;
    case "ul":
      return (
        <ul className="mt-4 list-disc space-y-1.5 pl-5 marker:text-ink">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    default:
      return <p className="mt-4">{block.text}</p>;
  }
}

export default async function ArticlePage(props: PageProps<"/artikel/[slug]">) {
  const { slug } = await props.params;
  const article = getArticle(slug);
  if (!article) notFound();

  const cat = CATEGORIES[article.category];
  const others = ARTICLES.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <article>
      <header className={cn("pb-24 pt-28 sm:pt-36", cat.header)}>
        <div className="mx-auto max-w-2xl px-6">
          <Link
            href="/artikel"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-blue"
          >
            <ArrowLeft className="h-4 w-4" />
            Semua artikel
          </Link>
          <div className="mt-4">
            <span className={cn("rounded-full px-2.5 py-0.5 text-[11px] font-semibold", cat.pill)}>
              {cat.label}
            </span>
          </div>
          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-[2.6rem]">
            {article.title}
          </h1>
          <time dateTime={article.date} className="mt-4 block text-xs text-ink-soft">
            {formatDate(article.date)}
          </time>
        </div>
      </header>

      <div className="sheet bg-cream pb-24 pt-14">
        <div className="mx-auto max-w-2xl px-6 text-[15px] leading-relaxed text-ink sm:text-base">
          {article.body.map((block, i) => (
            <Block key={i} block={block} />
          ))}

          <aside className="mt-12 rounded-3xl bg-ink p-7 text-white sm:p-8">
            <p className="text-xl font-bold sm:text-2xl">Mau ngobrolin ini untuk bisnismu?</p>
            <p className="mt-2 text-sm text-white/75">Ceritain apa adanya. Kami dengerin dan bantu kamu</p>
            <a
              href={whatsappLink(`Halo Elevore, aku baru baca artikel "${article.title}" dan mau ngobrol`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded-lg bg-yellow px-6 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
            >
              Ngobrol via WhatsApp
            </a>
          </aside>
        </div>

        <section aria-labelledby="baca-juga" className="mx-auto mt-16 max-w-6xl px-6">
          <h2 id="baca-juga" className="text-2xl font-bold text-ink">
            Baca juga
          </h2>
          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      </div>
    </article>
  );
}

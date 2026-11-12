"use client";

import { ShoppingBag, Check } from "lucide-react";
import { Highlight, SectionTitle } from "@/components/shared/Highlight";
import { whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ---------- Mini illustrations shown on hover (Figma "Layanan Card") ---------- */

function ShopIllustration() {
  return (
    <div className="w-28 rounded-lg bg-white p-2 shadow">
      <div className="grid h-10 place-items-center rounded bg-coral/15">
        <ShoppingBag className="h-5 w-5 text-coral" />
      </div>
      <p className="mt-1.5 text-[10px] font-semibold text-ink">Rp 85.000</p>
      <div className="mt-1 rounded bg-coral py-0.5 text-center text-[9px] font-semibold text-white">
        Beli
      </div>
    </div>
  );
}

function WebsiteIllustration() {
  return (
    <div className="w-36 rounded-lg bg-white p-2 shadow">
      <div className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink/20" />
        ))}
      </div>
      <div className="mt-2 h-1.5 w-16 rounded bg-ink" />
      <div className="mt-1 h-1 w-24 rounded bg-ink/15" />
      <div className="mt-2 flex items-center gap-1.5 rounded bg-yellow p-1.5">
        <span className="h-3 w-3 rounded-full bg-white/70" />
        <span className="h-1 flex-1 rounded bg-white/70" />
      </div>
      <div className="mt-1.5 rounded-full bg-[#25D366] py-0.5 text-center text-[9px] font-semibold text-white">
        Chat WA
      </div>
    </div>
  );
}

function OrdersIllustration() {
  const rows = [
    ["bg-yellow", "Proses", "bg-yellow/25 text-[#a0700a]"],
    ["bg-blue", "Kirim", "bg-blue/15 text-blue"],
    ["bg-coral", "Selesai", "bg-teal/20 text-[#2f8a82]"],
  ];
  return (
    <div className="flex w-40 flex-col gap-1.5">
      {rows.map(([dot, label, pill]) => (
        <div key={label} className="flex items-center gap-1.5 rounded-md bg-white p-1.5 shadow-sm">
          <span className={cn("h-3 w-3 rounded-full", dot)} />
          <span className="h-1 flex-1 rounded bg-ink/15" />
          <span className={cn("rounded-full px-1.5 text-[8px] font-semibold", pill)}>{label}</span>
        </div>
      ))}
    </div>
  );
}

function StockIllustration() {
  const rows: [string, string, string, boolean][] = [
    ["bg-teal", "w-[80%]", "24", false],
    ["bg-blue", "w-[50%]", "12", false],
    ["bg-coral", "w-[12%]", "3", true],
  ];
  return (
    <div className="w-40 rounded-lg bg-white p-2.5 shadow">
      {rows.map(([c, w, n, warn]) => (
        <div key={n} className="mb-1.5 flex items-center gap-2 last:mb-0">
          <div className="h-1.5 flex-1 rounded bg-ink/10">
            <div className={cn("h-full rounded", c, w)} />
          </div>
          <span className={cn("w-4 text-[10px] font-bold", warn ? "text-coral" : "text-ink")}>{n}</span>
          {warn && (
            <span className="rounded-full bg-coral/15 px-1 text-[8px] font-bold text-coral">!</span>
          )}
        </div>
      ))}
    </div>
  );
}

function DashboardIllustration() {
  return (
    <div className="w-40 rounded-lg bg-white p-2.5 shadow">
      <p className="text-[8px] text-ink-soft">Omzet</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold text-ink">Rp 4,2 jt</span>
        <span className="rounded-full bg-teal/20 px-1.5 text-[8px] font-semibold text-[#2f8a82]">+18%</span>
      </div>
      <div className="mt-2 flex h-8 items-end gap-1.5">
        {[35, 55, 45, 75, 65, 100].map((h, i) => (
          <span
            key={i}
            style={{ height: `${h}%` }}
            className={cn("flex-1 rounded-sm", i === 5 ? "bg-purple" : "bg-purple/25")}
          />
        ))}
      </div>
    </div>
  );
}

function AutomationIllustration() {
  return (
    <div className="flex w-40 flex-col gap-1.5">
      {[
        ["bg-teal", "Pesanan baru masuk"],
        ["bg-blue", "Rekap harian terkirim"],
      ].map(([c, label]) => (
        <div key={label} className="flex items-center gap-1.5 rounded-md bg-white p-1.5 shadow-sm">
          <span className={cn("grid h-4 w-4 place-items-center rounded-full", c)}>
            <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
          </span>
          <span className="text-[9px] font-semibold text-ink">{label}</span>
        </div>
      ))}
    </div>
  );
}

/* ---------- Data ---------- */

const SERVICES = [
  {
    title: "Toko online",
    desc: "Pelanggan bisa lihat produk dan pesan kapan aja, bahkan pas toko fisik kamu lagi tutup",
    blob: "bg-coral",
    hover: "bg-coral",
    Illustration: ShopIllustration,
  },
  {
    title: "Website usaha",
    desc: "Wajah usahamu di internet. Rapi, cepat dibuka, dan nyaman dilihat dari HP, jadi calon pelanggan langsung percaya",
    blob: "bg-blue",
    hover: "bg-blue",
    Illustration: WebsiteIllustration,
  },
  {
    title: "Sistem pesanan",
    desc: "Semua pesanan masuk ke satu tempat, bukan tercecer di chat. Jadi nggak ada lagi yang kelewat",
    blob: "bg-teal",
    hover: "bg-teal",
    Illustration: OrdersIllustration,
  },
  {
    title: "Pencatatan stok",
    desc: "Stok kecatat otomatis, jadi nggak ada lagi selisih yang bikin pusing",
    blob: "bg-yellow",
    hover: "bg-yellow",
    Illustration: StockIllustration,
  },
  {
    title: "Dashboard laporan",
    desc: "Omzet, pesanan, dan stok bisa kamu lihat sekali buka. Ambil keputusan jadi lebih mantap",
    blob: "bg-purple",
    hover: "bg-purple",
    Illustration: DashboardIllustration,
  },
  {
    title: "Otomasi",
    desc: "Balasan, notifikasi, dan rekap jalan sendiri. Kamu fokus ngembangin bisnis, bukan ngurusin yang repetitif",
    blob: "bg-orange",
    hover: "bg-orange",
    Illustration: AutomationIllustration,
  },
];

export function Services() {
  return (
    <section id="layanan" className="sheet bg-sky pb-28 pt-20">
      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle>
          Yang bisa kami <Highlight tone="purple">buat</Highlight>
        </SectionTitle>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ title, desc, blob, hover, Illustration }) => (
            <div
              key={title}
              tabIndex={0}
              className="group relative min-h-[150px] overflow-hidden rounded-2xl bg-white p-5 shadow-[0_10px_30px_-18px_rgba(27,31,58,0.35)] outline-none focus-visible:ring-2 focus-visible:ring-blue"
            >
              <span
                aria-hidden
                className={cn("absolute -right-6 -top-6 h-16 w-16 rounded-full", blob)}
              />
              <h3 className="pr-10 text-base font-semibold text-ink">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{desc}</p>

              {/* Hover state */}
              <div
                aria-hidden
                className={cn(
                  "pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-visible:opacity-100",
                  hover
                )}
              >
                <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                  <Illustration />
                </div>
                <span
                  className={cn(
                    "text-xs font-semibold",
                    hover === "bg-yellow" || hover === "bg-teal" || hover === "bg-orange"
                      ? "text-ink"
                      : "text-white"
                  )}
                >
                  {title}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-sm text-ink">
          Nggak ada di daftar?{" "}
          <a
            href={whatsappLink("Halo Elevore, aku butuh sistem custom untuk bisnisku")}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium underline-offset-4 hover:text-blue hover:underline"
          >
            Kami buatkan custom
          </a>
        </p>
      </div>
    </section>
  );
}

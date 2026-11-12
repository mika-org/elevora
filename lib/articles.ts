/**
 * Article content for /artikel, taken from the Figma "Artikel" frames.
 * Kept as plain data so it can later move to a CMS without touching the pages.
 */

export const CATEGORIES = {
  "tips-bisnis": {
    label: "Tips Bisnis",
    pill: "bg-coral text-ink",
    blob: "bg-coral",
    header: "bg-peach",
  },
  "tips-it": {
    label: "Tips IT",
    pill: "bg-blue text-white",
    blob: "bg-blue",
    header: "bg-sky",
  },
  "cerita-umkm": {
    label: "Cerita UMKM",
    pill: "bg-teal text-ink",
    blob: "bg-teal",
    header: "bg-mint",
  },
  "tips-marketing": {
    label: "Tips Marketing",
    pill: "bg-yellow text-ink",
    blob: "bg-yellow",
    header: "bg-butter",
  },
} as const;

export type CategoryKey = keyof typeof CATEGORIES;

export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: CategoryKey;
  /** ISO date (YYYY-MM-DD) */
  date: string;
  body: ArticleBlock[];
};

export const ARTICLES: Article[] = [
  {
    slug: "pesanan-numpuk-di-wa",
    title: "Pesanan numpuk di WA? Ini tanda usahamu siap dirapikan",
    excerpt: "Kalau kamu sering scroll chat buat cari satu pesanan, itu sinyal yang jelas.",
    category: "tips-bisnis",
    date: "2026-11-10",
    body: [
      {
        type: "p",
        text: "Banyak usaha mulai dari WhatsApp. Wajar, karena mudah dan semua pelanggan sudah punya. Masalahnya muncul saat pesanan makin banyak.",
      },
      { type: "h2", text: "Tanda-tandanya" },
      {
        type: "ul",
        items: [
          "Kamu scroll panjang untuk mencari satu pesanan.",
          "Ada pesanan yang terlewat atau tercatat dua kali.",
          "Kamu harus menyalin pesanan ke buku atau spreadsheet.",
          "Karyawan bertanya hal yang sama berulang-ulang.",
        ],
      },
      { type: "h2", text: "Apa yang bisa dilakukan" },
      {
        type: "p",
        text: "Langkah pertama bukan beli aplikasi. Catat dulu alur pesananmu: dari mana masuk, siapa yang mencatat, dan ke mana datanya pergi. Dari situ kelihatan bagian mana yang paling memakan waktu.",
      },
      {
        type: "p",
        text: "Setelah itu, sistem pesanan bisa mengumpulkan semuanya di satu tempat, jadi nggak ada lagi yang tercecer di chat.",
      },
    ],
  },
  {
    slug: "kenapa-stok-sering-selisih",
    title: "Kenapa stok sering selisih, dan cara mencarinya",
    excerpt: "Selisih stok jarang soal barang hilang. Biasanya soal catatan yang terlambat.",
    category: "tips-it",
    date: "2026-11-10",
    body: [
      {
        type: "p",
        text: "Stok di rak bilang 12, catatan bilang 15. Hampir semua pemilik usaha pernah mengalaminya.",
      },
      { type: "h2", text: "Penyebab yang paling sering" },
      {
        type: "ul",
        items: [
          "Barang keluar tapi belum dicatat.",
          "Catatan dibuat di akhir hari, bukan saat barang bergerak.",
          "Beberapa orang mencatat dengan cara berbeda.",
          "Retur atau barang rusak tidak masuk catatan.",
        ],
      },
      { type: "h2", text: "Cara mencarinya" },
      {
        type: "p",
        text: "Mulai dari satu barang saja. Catat setiap kali barang itu keluar dan masuk selama seminggu, lalu bandingkan dengan jumlah di rak. Selisihnya biasanya menunjuk ke langkah mana yang bocor.",
      },
      {
        type: "p",
        text: "Kalau mencatat manual terasa berat, itu tanda pencatatan stok bisa dibantu sistem: setiap perubahan tercatat saat itu juga, jadi selisihnya gampang dilacak.",
      },
    ],
  },
  {
    slug: "kenapa-lihat-mockup-dulu",
    title: "Kenapa lihat mockup dulu itu penting",
    excerpt:
      "Mockup itu gambar tampilan sebelum apa pun dikerjakan. Kamu menilai dulu, baru memutuskan.",
    category: "cerita-umkm",
    date: "2026-11-10",
    body: [
      {
        type: "p",
        text: "Banyak proyek digital bermasalah bukan karena teknologinya, tapi karena salah paham soal tampilan dan alur. Mockup mencegah itu.",
      },
      { type: "h2", text: "Apa itu mockup" },
      {
        type: "p",
        text: "Mockup adalah rancangan tampilan website atau aplikasi. Belum bisa dipakai sungguhan, tapi kamu sudah bisa melihat bentuk, warna, dan letak tombolnya.",
      },
      { type: "h2", text: "Kenapa penting" },
      {
        type: "ul",
        items: [
          "Kamu melihat hasilnya sebelum pekerjaan dimulai.",
          "Revisi di tahap ini jauh lebih mudah.",
          "Komitmen baru terjadi setelah kamu cocok.",
        ],
      },
      {
        type: "p",
        text: "Begitu cara kami bekerja di Elevore: ngobrol, saran, mockup, baru development.",
      },
    ],
  },
  {
    slug: "cms-itu-apa",
    title: "CMS itu apa? Penjelasan simpel dijamin ngerti",
    excerpt: "CMS itu panel untuk mengubah isi website sendiri, tanpa menghubungi pembuatnya.",
    category: "tips-marketing",
    date: "2026-11-10",
    body: [
      {
        type: "p",
        text: "Pernah mau ganti harga atau foto di website, tapi harus menunggu orang lain? Di situlah CMS berguna.",
      },
      { type: "h2", text: "Apa yang bisa kamu ubah" },
      {
        type: "ul",
        items: ["Teks dan judul", "Foto produk", "Harga dan daftar layanan", "Artikel atau pengumuman"],
      },
      { type: "h2", text: "Perlu paham teknis?" },
      {
        type: "p",
        text: "Tidak. CMS dibuat supaya mengubah isi semudah mengisi formulir. Di Elevore, CMS-nya gratis untuk setiap website yang kami buat.",
      },
    ],
  },
];

const MONTHS = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember",
];

/** "2026-11-10" → "10 November 2026". Done by hand so server and client render identically. */
export function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${MONTHS[m - 1]} ${y}`;
}

export function getArticle(slug: string) {
  return ARTICLES.find((a) => a.slug === slug);
}

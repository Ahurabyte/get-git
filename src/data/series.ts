export interface seriesEntry {
  path: string;
  title: string;
  desc: string;
  icon: string;
  style: string;
  badge?: string;
}

export const series: seriesEntry[] = [
  {
    path: "/get-git/basics",
    title: "مبانی",
    desc: "چیزهایی که هر روز استفاده می‌کنی.",
    icon: "./assets/git.svg",
    style: "bg-candy-red",
  },
  {
    path: "/get-git/changes",
    title: "تغییرات",
    desc: "تغییرات را دنبال کن.",
    icon: "./assets/git.svg",
    style: "bg-candy-blue-sky",
  },
  {
    path: "/get-git/commit",
    title: "کامیت",
    desc: "چطور پیام کامیت خوب بنویسی.",
    icon: "./assets/git.svg",
    style: "bg-candy-yellow",
  },
  {
    path: "/get-git/branches",
    title: "برنچ‌ها",
    desc: "ساختن و مدیریت برنچ‌ها.",
    icon: "./assets/git.svg",
    style: "bg-candy-teal",
  },
  {
    path: "/get-git/merge",
    title: "مرج",
    desc: "دو برنچ را دوباره به هم برگردان.",
    icon: "./assets/git.svg",
    style: "bg-candy-green-light",
  },
  {
    path: "/get-git/github",
    title: "گیت‌هاب",
    desc: "همکاری و فضای ابری.",
    icon: "./assets/github.svg",
    style: "bg-candy-yellow-sharp",
  },
  {
    path: "/get-git/conflicts",
    title: "کانفلیکت‌ها",
    desc: "وقتی تداخل پیش می‌آید چه کار کنی.",
    icon: "./assets/git.svg",
    style: "bg-candy-pink",
  },
  {
    path: "/get-git/abort",
    title: "لغو",
    desc: "از یک دستور خراب برگرد عقب.",
    icon: "./assets/git.svg",
    style: "bg-candy-pink-strawberry",
  },
  {
    path: "/get-git/stash",
    title: "استش",
    desc: "کارت را موقت پارک کن و بعداً برگرد.",
    icon: "./assets/git.svg",
    style: "bg-candy-milky",
  },
  {
    path: "/get-git/undo",
    title: "برگرداندن",
    desc: "چیزی را خراب کردی؟ گیت احتمالاً هنوز داردش.",
    icon: "./assets/git.svg",
    style: "bg-candy-green-M",
  },
  {
    path: "/get-git/gitmoji",
    title: "گیت‌موجی",
    desc: "با یک ایموجی در کامیت بگو چه کار می‌کند.",
    icon: "./assets/git.svg",
    style: "bg-candy-yellow-warm",
    badge: "EXTRA",
  },
];
export function neighbours(path: string) {
  const clean = path.replace(/\/$/, "");
  const i = series.findIndex((s) => s.path.replace(/\/$/, "") === clean);
  if (i === -1) return {};
  return {
    prev: i > 0 ? series[i - 1].path : "/get-git/",
    next: i < series.length - 1 ? series[i + 1].path : "/get-git/",
  };
}

export function entryFor(path: string) {
  const clean = path.replace(/\/$/, "");
  return series.find((s) => s.path.replace(/\/$/, "") === clean);
}

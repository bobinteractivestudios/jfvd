import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-auto bg-[#5FC4BF] px-4 py-12 text-center text-[#333]">
      <p className="flex flex-wrap items-center justify-center gap-3 font-heading text-xl">
        <Link
          href="/aanmelden"
          className="rounded-full border-2 border-[#333] px-6 py-2 font-sans text-base font-bold uppercase tracking-wide transition-colors hover:bg-[#333] hover:text-[#5FC4BF]"
        >
          Meld je aan
        </Link>
        <span>en ontmoet duizenden andere jonge nationalisten.</span>
      </p>
    </footer>
  );
}

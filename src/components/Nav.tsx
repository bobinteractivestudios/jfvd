"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const themes = {
  light: { text: "text-[#333]", logo: "/jfvd-logo.svg" },
  dark: { text: "text-white", logo: "/jfvd-logo-white.svg" },
  aqua: { text: "text-[#333]", logo: "/jfvd-logo-white.svg" },
} as const;

export function Nav({ theme = "light" }: { theme?: keyof typeof themes }) {
  const { text, logo } = themes[theme];
  const [overOpen, setOverOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative flex items-center justify-center gap-8 py-8 px-4 font-sans ${text}`}
    >
      <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
        <Image src={logo} alt="jfvd" width={36} height={36} />
      </Link>
      <Link href="/events">EVENTS</Link>
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setOverOpen((open) => !open)}
          aria-expanded={overOpen}
          className="cursor-pointer"
        >
          OVER
        </button>
        <AnimatePresence>
          {overOpen && (
            <motion.span
              key="over-submenu"
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -8 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex items-center gap-2 text-[#888]"
            >
              <span>—</span>
              <Link href="/over/bestuur">bestuur</Link>
              <span>—</span>
              <Link href="/over/organisatie">organisatie</Link>
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <Link href="/magazine">MAGAZINE</Link>
      <Link href="/shop">SHOP</Link>
      <Link href="/contact">CONTACT</Link>
    </motion.nav>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const themes = {
  light: { text: "text-[#333]", logo: "/jfvd-logo.svg" },
  dark: { text: "text-white", logo: "/jfvd-logo-white.svg" },
  aqua: { text: "text-[#333]", logo: "/jfvd-logo-white.svg" },
} as const;

export function Nav({ theme = "light" }: { theme?: keyof typeof themes }) {
  const { text, logo } = themes[theme];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`relative flex items-center justify-center gap-8 py-8 px-4 font-['baskerville'] ${text}`}
    >
      <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
        <Image src={logo} alt="jfvd" width={36} height={36} />
      </Link>
      <Link href="/events">EVENTS</Link>
      <Link href="/over">OVER</Link>
      <Link href="/magazine">MAGAZINE</Link>
      <Link href="/shop">SHOP</Link>
      <Link href="/contact">CONTACT</Link>
    </motion.nav>
  );
}

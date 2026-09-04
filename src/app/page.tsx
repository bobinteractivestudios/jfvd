"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="relative flex items-center justify-center gap-8 py-8 px-4 font-['baskerville'] text-[#333]"
    >
      <Link href="/" className="absolute left-4 top-1/2 -translate-y-1/2">
        <Image src="/jfvd-logo.svg" alt="jfvd" width={36} height={36} />
      </Link>
      <Link href="/events">EVENTS</Link>
      <Link href="/over">OVER</Link>
      <Link href="/magazine">MAGAZINE</Link>
      <Link href="/shop">SHOP</Link>
      <Link href="/contact">CONTACT</Link>
    </motion.nav>
  );
}

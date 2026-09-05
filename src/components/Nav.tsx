"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, type Variants } from "framer-motion";

const themes = {
  light: { text: "text-[#333]", logo: "/jfvd-logo.svg" },
  dark: { text: "text-white", logo: "/jfvd-logo-white.svg" },
  aqua: { text: "text-[#333]", logo: "/jfvd-logo-white.svg" },
} as const;

const doorItem: Variants = {
  closed: { rotateY: -90, opacity: 0 },
  open: { rotateY: 0, opacity: 1 },
};

export function Nav({ theme = "light" }: { theme?: keyof typeof themes }) {
  const { text, logo } = themes[theme];
  const [overOpen, setOverOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => {
    setMobileOpen(false);
    setOverOpen(false);
  };

  return (
    <>
      {/* Desktop nav */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={`relative hidden md:flex items-center justify-center gap-8 py-8 px-4 font-sans ${text}`}
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
                <Link href="/over/bestuur">BESTUUR</Link>
                <span>—</span>
                <Link href="/over/organisatie">ORGANISATIE</Link>
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <Link href="/magazine">MAGAZINE</Link>
        <Link href="/shop">SHOP</Link>
        <Link href="/contact">CONTACT</Link>
      </motion.nav>

      {/* Mobile top bar */}
      <div
        className={`relative z-50 flex md:hidden items-center justify-between py-6 px-4 font-sans ${text}`}
      >
        <Link href="/" onClick={closeMobile}>
          <Image src={logo} alt="jfvd" width={36} height={36} />
        </Link>
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-label="Menu"
          className="flex flex-col gap-1.5 p-2"
        >
          <motion.span
            animate={{ rotate: mobileOpen ? 45 : 0, y: mobileOpen ? 6 : 0 }}
            className="block h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={{ opacity: mobileOpen ? 0 : 1 }}
            className="block h-0.5 w-6 bg-current"
          />
          <motion.span
            animate={{ rotate: mobileOpen ? -45 : 0, y: mobileOpen ? -6 : 0 }}
            className="block h-0.5 w-6 bg-current"
          />
        </button>
      </div>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-gray-100/90 backdrop-blur-md md:hidden"
          >
            <motion.ul
              variants={{ open: { transition: { staggerChildren: 0.08 } } }}
              initial="closed"
              animate="open"
              className="flex flex-col items-start gap-6 px-8 pt-28 font-sans text-lg text-[#333]"
            >
              <motion.li
                variants={doorItem}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformPerspective: 800, transformOrigin: "0% 50%" }}
              >
                <Link href="/events" onClick={closeMobile}>
                  EVENTS
                </Link>
              </motion.li>
              <motion.li
                variants={doorItem}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformPerspective: 800, transformOrigin: "0% 50%" }}
              >
                <button
                  type="button"
                  onClick={() => setOverOpen((open) => !open)}
                  aria-expanded={overOpen}
                >
                  OVER
                </button>
                <AnimatePresence>
                  {overOpen && (
                    <motion.div
                      key="mobile-over-submenu"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="flex flex-col gap-2 overflow-hidden pt-2 pl-4 text-base text-[#888]"
                    >
                      <Link href="/over/bestuur" onClick={closeMobile}>
                        — BESTUUR
                      </Link>
                      <Link href="/over/organisatie" onClick={closeMobile}>
                        — ORGANISATIE
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
              <motion.li
                variants={doorItem}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformPerspective: 800, transformOrigin: "0% 50%" }}
              >
                <Link href="/magazine" onClick={closeMobile}>
                  MAGAZINE
                </Link>
              </motion.li>
              <motion.li
                variants={doorItem}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformPerspective: 800, transformOrigin: "0% 50%" }}
              >
                <Link href="/shop" onClick={closeMobile}>
                  SHOP
                </Link>
              </motion.li>
              <motion.li
                variants={doorItem}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformPerspective: 800, transformOrigin: "0% 50%" }}
              >
                <Link href="/contact" onClick={closeMobile}>
                  CONTACT
                </Link>
              </motion.li>
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

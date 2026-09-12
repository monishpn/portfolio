"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingIntro() {
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("mpn-intro-seen") || reduceMotion) return;
    const frame = window.requestAnimationFrame(() => setVisible(true));
    const timer = window.setTimeout(() => {
      sessionStorage.setItem("mpn-intro-seen", "true");
      setVisible(false);
    }, 1350);
    return () => {
      window.cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [reduceMotion]);

  function skip() {
    sessionStorage.setItem("mpn-intro-seen", "true");
    setVisible(false);
  }

  return <AnimatePresence>{visible ? <motion.div className="intro-screen" initial={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .72, ease: [0.76, 0, 0.24, 1] }}>
    <button type="button" onClick={skip}>Skip intro</button><div className="intro-grid" aria-hidden="true" />
    <motion.div className="intro-mark" initial={{ scale: .5, rotate: -12, opacity: 0 }} animate={{ scale: 1, rotate: 0, opacity: 1 }} transition={{ duration: .30, ease: "easeOut" }}><motion.span initial={{ x: -34 }} animate={{ x: 0 }} transition={{ delay: .18 }}>M</motion.span><motion.i initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ delay: .3 }} /><motion.span initial={{ x: 34 }} animate={{ x: 0 }} transition={{ delay: .18 }}>PN</motion.span></motion.div>
    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .65 }}>Initializing portfolio / 2026</motion.p>
  </motion.div> : null}</AnimatePresence>;
}

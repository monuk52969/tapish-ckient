"use client";
import { motion, useTransform } from "framer-motion";
import ImageTrailHero from "@/app/components/ImageTrailHero";

export default function Section1({ scrollYProgress }) {
  // scroll based animations
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen"
    >
      <ImageTrailHero />
    </motion.div>
  );
}

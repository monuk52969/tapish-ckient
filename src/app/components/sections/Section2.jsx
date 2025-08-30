"use client";
import { motion, useTransform } from "framer-motion";
import Video from '@/app/video/page'

export default function Section2({ scrollYProgress }) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, 0]);

  return (
    <motion.div style={{ scale, rotate }} className="relative h-screen">
  <Video />
</motion.div>
  );
}

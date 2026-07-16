"use client";

import { useEffect, useRef } from "react";
import { withBasePath } from "@/lib/basePath";

const PLAYBACK_RATE = 0.6;

export default function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.playbackRate = PLAYBACK_RATE;
  }, []);

  return (
    <video
      ref={ref}
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 w-full h-full object-cover"
    >
      <source src={withBasePath("/videos/hero.mp4")} type="video/mp4" />
    </video>
  );
}

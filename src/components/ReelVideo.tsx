"use client";

import { useRef, useState } from "react";
import { withBasePath } from "@/lib/basePath";

export default function ReelVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <div className="relative w-full h-full">
      <video
        ref={ref}
        src={withBasePath(src)}
        controls
        preload="metadata"
        className="custom-video-controls w-full h-full object-cover"
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
      />
      {!playing && (
        <button
          type="button"
          aria-label="再生する"
          onClick={() => ref.current?.play()}
          className="absolute inset-0 z-10 flex items-center justify-center bg-ink/20"
        >
          <span className="flex items-center justify-center w-20 h-20 rounded-full bg-ivory/90 text-ink text-3xl pl-1">
            ▷
          </span>
        </button>
      )}
    </div>
  );
}

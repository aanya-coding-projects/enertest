"use client";

import { useRef, useEffect } from "react";

export default function AboutVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => video.classList.add("loaded");

    video.addEventListener("loadeddata", onLoaded);

    if (video.readyState >= 3) {
      video.classList.add("loaded");
    }

    return () => video.removeEventListener("loadeddata", onLoaded);
  }, []);

  return (
    <video
      ref={videoRef}
      className="hero-video"
      src="/Videos/Aboutt.mp4"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      controls={false}
    />
  );
}
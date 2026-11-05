"use client";

import React, { useRef, useState } from "react";
import { Sparkles, Play, Pause, VolumeX, Film } from "lucide-react";

interface BistroVideo {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  src: string;
  poster: string;
}

const bistroVideos: BistroVideo[] = [
  {
    id: "video-1",
    title: "Creazioni & Piatti dello Chef",
    subtitle: "Cucina Tipica Barese",
    description: "La preparazione accurata e la dedizione per le materie prime fresche nel bistrò di Via Putignani.",
    tag: "Cucina & Specialità",
    src: "/videos/video-bistro-1.mp4",
    poster: "/videos/video-bistro-1-poster.jpg",
  },
  {
    id: "video-2",
    title: "Bombette Pugliesi Artigianali",
    subtitle: "Fatte a Mano al Momento",
    description: "La regina della tradizione pugliese: involtini di carne fresca preparati a regola d'arte per la brace.",
    tag: "Bombette & Brace",
    src: "/videos/video-bistro-2.mp4",
    poster: "/videos/video-bistro-2-poster.jpg",
  },
];

export default function VideoSection() {
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>({
    "video-1": true,
    "video-2": true,
  });

  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});

  const togglePlay = (id: string) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play().catch(() => {});
      setPlayingStates((prev) => ({ ...prev, [id]: true }));
    } else {
      video.pause();
      setPlayingStates((prev) => ({ ...prev, [id]: false }));
    }
  };

  return (
    <section id="video" className="py-10 sm:py-16 bg-[#fbf8f2] text-[#26170d] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-3 shadow-xs">
            <Film className="w-3.5 h-3.5 text-[#8c1d28]" />
            <span>Video &amp; Atmosfera dal Vivo</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mb-2 sm:mb-3">
            Vivi l&apos;Esperienza <span className="text-[#8c1d28] italic">22 Frasi</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6d5644] font-light leading-relaxed max-w-lg mx-auto">
            Scorci dalla nostra cucina nel centro di Bari: la preparazione delle celebri bombette e i piatti autentici della tradizione barese.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#6d5644] bg-white px-3 py-1 rounded-full border border-[#dfcfb9] shadow-xs">
            <VolumeX className="w-3.5 h-3.5 text-[#8c1d28]" />
            <span>Video senza audio per una navigazione silenziosa e scorrevole</span>
          </div>
        </div>

        {/* Video Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-2xl mx-auto">
          {bistroVideos.map((video) => {
            const isPlaying = playingStates[video.id] ?? true;

            return (
              <div
                key={video.id}
                className="group relative rounded-2xl overflow-hidden bg-white border border-[#dfcfb9] hover:border-[#8c1d28] shadow-sm transition-all duration-300 flex flex-col"
              >
                {/* Vertical Video Container */}
                <div
                  className="relative aspect-[9/15] sm:aspect-[9/16] w-full bg-black overflow-hidden cursor-pointer select-none"
                  onClick={() => togglePlay(video.id)}
                >
                  <video
                    ref={(el) => {
                      videoRefs.current[video.id] = el;
                    }}
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded-full bg-white/90 backdrop-blur-md border border-[#dfcfb9] text-[10px] font-mono uppercase tracking-wider text-[#8c1d28] font-bold shadow-xs">
                      {video.tag}
                    </span>

                    <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-white border border-white/10" title="Senza audio">
                      <VolumeX className="w-3.5 h-3.5" />
                    </span>
                  </div>

                  {/* Play / Pause indicator button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-[#d89d42]/70 text-white flex items-center justify-center transition-all duration-300 shadow-xl ${
                        isPlaying ? "opacity-0 group-hover:opacity-85" : "opacity-95 scale-110"
                      }`}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 text-[#d89d42]" />
                      ) : (
                        <Play className="w-5 h-5 text-[#d89d42] fill-[#d89d42] ml-0.5" />
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-4 flex-1 flex flex-col justify-between bg-white">
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#8c1d28] font-bold block mb-1">
                      {video.subtitle}
                    </span>
                    <h3 className="text-base font-serif font-bold text-[#26170d] mb-1.5 leading-tight group-hover:text-[#8c1d28] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs text-[#6d5644] font-light leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#ebdcc8] flex items-center justify-between text-[11px] text-[#6d5644]">
                    <span className="flex items-center gap-1 font-serif">
                      <Sparkles className="w-3 h-3 text-[#d89d42]" />
                      <span>22 Frasi • Bari Centro</span>
                    </span>
                    <button
                      onClick={() => togglePlay(video.id)}
                      className="text-[#8c1d28] hover:text-[#5a1017] font-semibold cursor-pointer"
                    >
                      {isPlaying ? "Pausa" : "Riproduci"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

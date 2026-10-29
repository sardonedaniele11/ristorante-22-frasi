"use client";

import React, { useRef, useState } from "react";
import { Sparkles, Play, Pause, VolumeX, Film, Eye } from "lucide-react";

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
    title: "Atmosfera & Accoglienza",
    subtitle: "La vita nel bistrò",
    description: "La cura dei dettagli, l'illuminazione calda e l'autentica ospitalità barese in Via Putignani.",
    tag: "Ambiente & Relax",
    src: "/videos/video-bistro-1.mp4",
    poster: "/videos/video-bistro-1-poster.jpg",
  },
  {
    id: "video-2",
    title: "Il Nostro Cortile & Dehor",
    subtitle: "Tavoli all'aperto",
    description: "Il giardino riservato di 22 Frasi: un'oasi di pace nel cuore di Bari per pranzi e cene.",
    tag: "Spazio Esterno",
    src: "/videos/video-bistro-2.mp4",
    poster: "/videos/video-bistro-2-poster.jpg",
  },
  {
    id: "video-3",
    title: "Cucina & Condivisione",
    subtitle: "Sapori tipici pugliesi",
    description: "Dalla tradizione dei primi piatti caldi alle portate preparate con materie prime del territorio.",
    tag: "Cucina Barese",
    src: "/videos/video-bistro-3.mp4",
    poster: "/videos/video-bistro-3-poster.jpg",
  },
];

export default function VideoSection() {
  const [playingStates, setPlayingStates] = useState<Record<string, boolean>>({
    "video-1": true,
    "video-2": true,
    "video-3": true,
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
    <section id="video" className="py-12 sm:py-24 bg-[#07130e] text-neutral-100 relative overflow-hidden">
      {/* Background ambiance glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#007a68]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#8c1d28]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#164e43]/60 border border-[#2a6d58] text-[#d89d42] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-3 shadow-sm">
            <Film className="w-3.5 h-3.5 text-[#d89d42]" />
            <span>Video &amp; Atmosfera dal Vivo</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-2 sm:mb-3">
            Vivi l&apos;Esperienza <span className="text-[#d89d42] italic">22 Frasi</span>
          </h2>

          <p className="text-xs sm:text-base text-[#c2dfd3] font-light leading-relaxed max-w-lg mx-auto">
            Brevi scorci dal nostro bistrò nel centro di Bari: il calore della sala, il dehor esterno e l&apos;amore per la tavola.
          </p>

          <div className="mt-3 inline-flex items-center gap-1.5 text-[11px] text-[#a3c9b8] bg-[#0d2821]/80 px-3 py-1 rounded-full border border-[#1b4d3e]/70">
            <VolumeX className="w-3.5 h-3.5 text-[#d89d42]" />
            <span>Video senza audio per una navigazione leggera e silenziosa</span>
          </div>
        </div>

        {/* Video Reel Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 max-w-5xl mx-auto">
          {bistroVideos.map((video) => {
            const isPlaying = playingStates[video.id] ?? true;

            return (
              <div
                key={video.id}
                className="group relative rounded-2xl sm:rounded-3xl overflow-hidden bg-[#0a1f19] border border-[#1b4d3e] hover:border-[#d89d42] shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Vertical Video Container (approx 9:16) */}
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
                    <span className="px-2.5 py-1 rounded-full bg-[#071712]/85 backdrop-blur-md border border-[#2a6d58] text-[10px] font-mono uppercase tracking-wider text-[#d89d42] shadow">
                      {video.tag}
                    </span>

                    <span className="p-1.5 rounded-full bg-black/60 backdrop-blur-md text-[#a3c9b8] border border-white/10" title="Senza audio">
                      <VolumeX className="w-3.5 h-3.5 text-neutral-300" />
                    </span>
                  </div>

                  {/* Gradient bottom overlay for text legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f19] via-transparent to-black/20 pointer-events-none" />

                  {/* Play / Pause indicator button */}
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className={`w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-[#d89d42]/50 text-white flex items-center justify-center transition-all duration-300 shadow-xl ${
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

                  {/* Subtle tap helper for mobile */}
                  <div className="absolute bottom-3 right-3 text-[10px] text-white/70 bg-black/50 px-2 py-0.5 rounded-md pointer-events-none sm:hidden">
                    {isPlaying ? "Tocca per fermare" : "Tocca per avviare"}
                  </div>
                </div>

                {/* Card Info Details */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#0a1f19]">
                  <div>
                    <span className="text-[10px] font-serif uppercase tracking-widest text-[#d89d42] block mb-1">
                      {video.subtitle}
                    </span>
                    <h3 className="text-base sm:text-lg font-serif font-bold text-white mb-2 leading-tight group-hover:text-[#d89d42] transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-xs text-[#c2dfd3] font-light leading-relaxed">
                      {video.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[#1b4d3e]/70 flex items-center justify-between text-[11px] text-[#a3c9b8]">
                    <span className="flex items-center gap-1">
                      <Sparkles className="w-3 h-3 text-[#d89d42]" />
                      <span>Bistrò a Bari Centro</span>
                    </span>
                    <button
                      onClick={() => togglePlay(video.id)}
                      className="text-[#d89d42] hover:text-amber-200 font-semibold cursor-pointer"
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

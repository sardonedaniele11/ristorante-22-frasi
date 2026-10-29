"use client";

import { useState } from "react";
import Image from "next/image";
import { allGalleryPhotos, GalleryPhoto } from "@/data/restaurantData";
import { Utensils, MapPin, X, ChevronLeft, ChevronRight, Maximize2, Sparkles, Film, VolumeX } from "lucide-react";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"food" | "location" | "video">("food");
  const [activeCategory, setActiveCategory] = useState<string>("tutti");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

  const galleryVideos = [
    {
      id: "v-1",
      title: "Atmosfera & Accoglienza",
      category: "Ambiente",
      description: "La cura dei dettagli, l'illuminazione calda e l'autentica ospitalità barese.",
      src: "/videos/video-bistro-1.mp4",
      poster: "/videos/video-bistro-1-poster.jpg",
    },
    {
      id: "v-2",
      title: "Il Nostro Cortile & Dehor",
      category: "Spazio Esterno",
      description: "Il giardino riservato di 22 Frasi nel cuore di Bari per pranzi e cene.",
      src: "/videos/video-bistro-2.mp4",
      poster: "/videos/video-bistro-2-poster.jpg",
    },
    {
      id: "v-3",
      title: "Cucina & Condivisione",
      category: "Tradizione",
      description: "Dalla tradizione dei primi piatti caldi alle portate preparate con materie prime pugliesi.",
      src: "/videos/video-bistro-3.mp4",
      poster: "/videos/video-bistro-3-poster.jpg",
    },
  ];

  // Filter by tab (food or location)
  const tabPhotos = allGalleryPhotos.filter((p) => p.type === activeTab);

  // Get unique categories for current tab
  const categories = ["tutti", ...Array.from(new Set(tabPhotos.map((p) => p.category)))];

  // Filter by category
  const filteredPhotos = tabPhotos.filter((p) => {
    if (activeCategory === "tutti") return true;
    return p.category === activeCategory;
  });

  const currentIndex = selectedPhoto
    ? filteredPhotos.findIndex((p) => p.id === selectedPhoto.id)
    : -1;

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedPhoto(filteredPhotos[currentIndex - 1]);
    } else {
      setSelectedPhoto(filteredPhotos[filteredPhotos.length - 1]);
    }
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < filteredPhotos.length - 1) {
      setSelectedPhoto(filteredPhotos[currentIndex + 1]);
    } else {
      setSelectedPhoto(filteredPhotos[0]);
    }
  };

  return (
    <section id="galleria" className="py-10 sm:py-24 bg-[#0a1f19] text-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1b4d3e]/60 border border-[#2a6d58] text-[#d89d42] text-[10px] sm:text-xs uppercase tracking-widest font-semibold mb-2.5 sm:mb-4 shadow-sm">
            <Sparkles className="w-3 h-3" />
            <span>Foto Ufficiali di 22 Frasi</span>
          </div>

          <h2 className="text-2xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-2 sm:mb-4">
            I Nostri <span className="text-[#d89d42] italic">Piatti &amp; La Location</span>
          </h2>

          <p className="text-xs sm:text-lg text-[#c2dfd3] font-light leading-relaxed max-w-xl mx-auto">
            Scopri le creazioni autentiche della cucina barese e la bellezza del nostro locale e del giardino all&apos;aperto in Via Putignani.
          </p>
        </div>

        {/* Big Switcher: Cibo (Food) vs Location vs Video - Fully responsive on mobile */}
        <div className="flex items-center justify-center mb-5 sm:mb-8">
          <div className="w-full max-w-lg grid grid-cols-3 p-1 rounded-xl sm:rounded-2xl bg-[#071712] border border-[#2a6d58] shadow-xl">
            <button
              onClick={() => {
                setActiveTab("food");
                setActiveCategory("tutti");
              }}
              className={`inline-flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-1 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "food"
                  ? "bg-[#8c1d28] text-white shadow-lg shadow-[#8c1d28]/30"
                  : "text-[#a3c9b8] hover:text-white"
              }`}
            >
              <Utensils className="w-3.5 h-3.5 shrink-0" />
              <span>Piatti ({allGalleryPhotos.filter((p) => p.type === "food").length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("location");
                setActiveCategory("tutti");
              }}
              className={`inline-flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-1 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "location"
                  ? "bg-[#007a68] text-white shadow-lg shadow-[#007a68]/30"
                  : "text-[#a3c9b8] hover:text-white"
              }`}
            >
              <MapPin className="w-3.5 h-3.5 shrink-0" />
              <span>Location ({allGalleryPhotos.filter((p) => p.type === "location").length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("video");
                setActiveCategory("tutti");
              }}
              className={`inline-flex items-center justify-center gap-1 sm:gap-2 py-2 sm:py-3 px-1 sm:px-4 rounded-lg sm:rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "video"
                  ? "bg-[#d89d42] text-[#07130e] font-bold shadow-lg shadow-[#d89d42]/30"
                  : "text-[#a3c9b8] hover:text-white"
              }`}
            >
              <Film className="w-3.5 h-3.5 shrink-0" />
              <span>Video (3)</span>
            </button>
          </div>
        </div>

        {/* Sub-categories - Horizontally scrollable on mobile (for photo tabs) */}
        {activeTab !== "video" && (
          <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-10 overflow-x-auto no-scrollbar py-1 px-1 -mx-2 sm:mx-0 sm:justify-center whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#d89d42] text-[#07130e] font-bold shadow-md"
                    : "bg-[#0e271d] text-[#c2dfd3] border border-[#1b4d3e] hover:border-[#d89d42]/50 hover:text-white"
                }`}
              >
                {cat === "tutti" ? "Tutte le foto" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Video Grid when activeTab === "video" */}
        {activeTab === "video" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto mb-4">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="rounded-2xl overflow-hidden bg-[#0e271d] border border-[#1b4d3e] shadow-lg flex flex-col"
              >
                <div className="relative aspect-[9/14] w-full bg-black">
                  <video
                    src={video.src}
                    poster={video.poster}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-[#071712]/80 backdrop-blur-md border border-[#2a6d58] text-[9px] font-mono uppercase tracking-wider text-[#d89d42]">
                    {video.category}
                  </div>
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-white text-sm mb-1">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-[#c2dfd3] font-light leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#1b4d3e]/70 flex items-center justify-between text-[10px] text-[#a3c9b8]">
                    <span className="flex items-center gap-1">
                      <VolumeX className="w-3 h-3 text-[#d89d42]" /> Senza audio
                    </span>
                    <span className="text-[#d89d42] font-semibold">22 Frasi Bari</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Photo Grid - 2 columns on mobile */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-6">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-[#0e271d] border border-[#1b4d3e] hover:border-[#d89d42] shadow-md cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative h-32 sm:h-60 w-full overflow-hidden bg-black/20">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e271d] via-[#0e271d]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                  {/* Badge Category */}
                  <div className="absolute top-2 left-2 px-1.5 sm:px-2.5 py-0.5 sm:py-1 rounded-md sm:rounded-lg bg-[#071712]/85 backdrop-blur-md border border-[#2a6d58] text-[8px] sm:text-[10px] font-mono uppercase tracking-wider text-[#d89d42]">
                    {photo.category}
                  </div>

                  {/* Zoom icon on hover */}
                  <div className="absolute top-2 right-2 p-1.5 rounded-md bg-[#071712]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-2 sm:p-4">
                  <h3 className="font-serif font-bold text-white text-xs sm:text-base group-hover:text-[#d89d42] transition-colors line-clamp-1 mb-0.5 sm:mb-1">
                    {photo.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-neutral-300 font-light line-clamp-1 sm:line-clamp-2 leading-relaxed">
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-[#0d2821] border border-[#2a6d58] rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={handlePrev}
              className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Precedente"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
              aria-label="Successivo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image display */}
            <div className="relative h-[60vh] sm:h-[70vh] w-full bg-black flex items-center justify-center">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Info bar */}
            <div className="p-6 bg-[#071712] border-t border-[#1b4d3e] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#d89d42] block mb-1">
                  {selectedPhoto.type === "food" ? "Piatto della Casa" : "Ambiente & Location"} • {selectedPhoto.category}
                </span>
                <h3 className="text-lg sm:text-xl font-serif font-bold text-white mb-1">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 font-light max-w-xl">
                  {selectedPhoto.description}
                </p>
              </div>

              <div className="text-xs text-[#a3c9b8] font-mono whitespace-nowrap">
                {currentIndex + 1} di {filteredPhotos.length}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

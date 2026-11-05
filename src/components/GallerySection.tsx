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
      title: "Creazioni & Piatti dello Chef",
      category: "Cucina",
      description: "La preparazione accurata e la dedizione per le materie prime fresche nel bistrò di Via Putignani.",
      src: "/videos/video-bistro-1.mp4",
      poster: "/videos/video-bistro-1-poster.jpg",
    },
    {
      id: "v-2",
      title: "Bombette Pugliesi Artigianali",
      category: "Tradizione",
      description: "Involtini di carne fresca preparati a regola d'arte e pronti per la cottura sulla brace.",
      src: "/videos/video-bistro-2.mp4",
      poster: "/videos/video-bistro-2-poster.jpg",
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
    <section id="galleria" className="py-10 sm:py-16 bg-[#f4ecdf] text-[#26170d] relative overflow-hidden border-t border-[#dfcfb9]">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f2e7d5] border border-[#d6be9f] text-[#8c1d28] text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-2.5 shadow-xs">
            <Sparkles className="w-3 h-3 text-[#d89d42]" />
            <span>Foto &amp; Video Ufficiali 22 Frasi</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#26170d] tracking-tight mb-2">
            I Nostri <span className="text-[#8c1d28] italic">Piatti &amp; La Location</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#6d5644] font-light leading-relaxed max-w-xl mx-auto">
            Scopri le creazioni autentiche della cucina barese e la bellezza del nostro locale e del giardino all&apos;aperto in Via Putignani.
          </p>
        </div>

        {/* Big Switcher: Cibo (Food) vs Location vs Video */}
        <div className="flex items-center justify-center mb-5 sm:mb-8">
          <div className="w-full max-w-md grid grid-cols-3 p-1 rounded-xl bg-white border border-[#dfcfb9] shadow-xs">
            <button
              onClick={() => {
                setActiveTab("food");
                setActiveCategory("tutti");
              }}
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "food"
                  ? "bg-[#8c1d28] text-white shadow-xs"
                  : "text-[#6d5644] hover:text-[#26170d]"
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
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "location"
                  ? "bg-[#d89d42] text-[#26170d] shadow-xs font-bold"
                  : "text-[#6d5644] hover:text-[#26170d]"
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
              className={`inline-flex items-center justify-center gap-1 sm:gap-1.5 py-2 px-1 rounded-lg text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all duration-200 ${
                activeTab === "video"
                  ? "bg-[#26170d] text-white shadow-xs"
                  : "text-[#6d5644] hover:text-[#26170d]"
              }`}
            >
              <Film className="w-3.5 h-3.5 shrink-0" />
              <span>Video (2)</span>
            </button>
          </div>
        </div>

        {/* Sub-categories */}
        {activeTab !== "video" && (
          <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 overflow-x-auto no-scrollbar py-1 px-1 -mx-2 sm:mx-0 sm:justify-center whitespace-nowrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeCategory === cat
                    ? "bg-[#8c1d28] text-white font-bold shadow-xs"
                    : "bg-white text-[#6d5644] border border-[#dfcfb9] hover:border-[#8c1d28] hover:text-[#8c1d28]"
                }`}
              >
                {cat === "tutti" ? "Tutte le foto" : cat}
              </button>
            ))}
          </div>
        )}

        {/* Video Grid when activeTab === "video" */}
        {activeTab === "video" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl mx-auto mb-4">
            {galleryVideos.map((video) => (
              <div
                key={video.id}
                className="rounded-2xl overflow-hidden bg-white border border-[#dfcfb9] shadow-xs flex flex-col"
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
                  <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-[#dfcfb9] text-[9px] font-mono uppercase tracking-wider text-[#8c1d28] font-bold">
                    {video.category}
                  </div>
                </div>
                <div className="p-3.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif font-bold text-[#26170d] text-sm mb-1">
                      {video.title}
                    </h3>
                    <p className="text-[11px] text-[#6d5644] font-light leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-[#ebdcc8] flex items-center justify-between text-[10px] text-[#6d5644]">
                    <span className="flex items-center gap-1">
                      <VolumeX className="w-3 h-3 text-[#8c1d28]" /> Senza audio
                    </span>
                    <span className="text-[#8c1d28] font-semibold">22 Frasi Bari</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Photo Grid - 2 columns on mobile */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2.5 sm:gap-5">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.id}
                onClick={() => setSelectedPhoto(photo)}
                className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-[#dfcfb9] hover:border-[#8c1d28] shadow-xs cursor-pointer transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="relative h-32 sm:h-52 w-full overflow-hidden bg-black/5">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute top-2 left-2 px-1.5 sm:px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-[#dfcfb9] text-[8px] sm:text-[9px] font-mono uppercase tracking-wider text-[#8c1d28] font-bold">
                    {photo.category}
                  </div>
                  <div className="absolute top-2 right-2 p-1.5 rounded-md bg-white/90 text-[#26170d] opacity-0 group-hover:opacity-100 transition-opacity hidden sm:block">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                <div className="p-2 sm:p-3.5">
                  <h3 className="font-serif font-bold text-[#26170d] text-xs sm:text-sm group-hover:text-[#8c1d28] transition-colors line-clamp-1 mb-0.5">
                    {photo.title}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#6d5644] font-light line-clamp-1 sm:line-clamp-2 leading-tight">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-6"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-[#fbf8f2] border border-[#dfcfb9] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/80 text-[#26170d] hover:bg-white transition-colors"
              aria-label="Chiudi finestra"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-[#26170d] hover:bg-white transition-colors"
              aria-label="Precedente"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/80 text-[#26170d] hover:bg-white transition-colors"
              aria-label="Successivo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            <div className="relative h-[55vh] sm:h-[65vh] w-full bg-black flex items-center justify-center">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
              />
            </div>

            <div className="p-4 bg-white border-t border-[#dfcfb9]">
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#8c1d28] font-bold block mb-1">
                {selectedPhoto.category}
              </span>
              <h3 className="font-serif font-bold text-base text-[#26170d] mb-1">
                {selectedPhoto.title}
              </h3>
              <p className="text-xs text-[#6d5644] font-light">
                {selectedPhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

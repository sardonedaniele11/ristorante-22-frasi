"use client";

import { useState } from "react";
import Image from "next/image";
import { allGalleryPhotos, GalleryPhoto } from "@/data/restaurantData";
import { Utensils, MapPin, X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from "lucide-react";

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState<"food" | "location">("food");
  const [activeCategory, setActiveCategory] = useState<string>("tutti");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);

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
    <section id="galleria" className="py-20 sm:py-28 bg-[#0a1f19] text-neutral-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1b4d3e]/60 border border-[#2a6d58] text-[#d89d42] text-xs uppercase tracking-widest font-semibold mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Foto Ufficiali di 22 Frasi</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            I Nostri <span className="text-[#d89d42] italic">Piatti &amp; La Location</span>
          </h2>

          <p className="text-base sm:text-lg text-[#c2dfd3] font-light leading-relaxed">
            Scopri le creazioni autentiche della cucina barese e la bellezza del nostro locale e del giardino all&apos;aperto in Via Putignani.
          </p>
        </div>

        {/* Big Switcher: Cibo (Food) vs Location */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#071712] border border-[#2a6d58] shadow-xl">
            <button
              onClick={() => {
                setActiveTab("food");
                setActiveCategory("tutti");
              }}
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "food"
                  ? "bg-[#8c1d28] text-white shadow-lg shadow-[#8c1d28]/30 scale-100"
                  : "text-[#a3c9b8] hover:text-white"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>I Nostri Piatti ({allGalleryPhotos.filter((p) => p.type === "food").length})</span>
            </button>

            <button
              onClick={() => {
                setActiveTab("location");
                setActiveCategory("tutti");
              }}
              className={`inline-flex items-center gap-2.5 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "location"
                  ? "bg-[#007a68] text-white shadow-lg shadow-[#007a68]/30 scale-100"
                  : "text-[#a3c9b8] hover:text-white"
              }`}
            >
              <MapPin className="w-4 h-4" />
              <span>La Location &amp; Giardino ({allGalleryPhotos.filter((p) => p.type === "location").length})</span>
            </button>
          </div>
        </div>

        {/* Sub-categories */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? "bg-[#d89d42] text-[#07130e] font-bold shadow-md"
                  : "bg-[#0e271d] text-[#c2dfd3] border border-[#1b4d3e] hover:border-[#d89d42]/50 hover:text-white"
              }`}
            >
              {cat === "tutti" ? "Tutte le foto" : cat}
            </button>
          ))}
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative rounded-2xl overflow-hidden bg-[#0e271d] border border-[#1b4d3e] hover:border-[#d89d42] shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative h-60 w-full overflow-hidden bg-black/20">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e271d] via-[#0e271d]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Badge Category */}
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-[#071712]/85 backdrop-blur-md border border-[#2a6d58] text-[10px] font-mono uppercase tracking-wider text-[#d89d42]">
                  {photo.category}
                </div>

                {/* Zoom icon on hover */}
                <div className="absolute top-3 right-3 p-2 rounded-lg bg-[#071712]/80 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-3.5 h-3.5" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-serif font-bold text-white text-base group-hover:text-[#d89d42] transition-colors line-clamp-1 mb-1">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-300 font-light line-clamp-2 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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

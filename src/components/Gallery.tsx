"use client";

import { useState } from "react";
import Image from "next/image";
import { siteConfig, GalleryItem } from "@/config/site";
import { Sparkles, X, ChevronLeft, ChevronRight, ZoomIn, Camera } from "lucide-react";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("tutti");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const categories = [
    { key: "tutti", label: "Tutte le Foto" },
    { key: "piatti", label: "I Piatti" },
    { key: "sala", label: "La Sala" },
    { key: "cocktail", label: "Cocktail & Bar" },
    { key: "atmosfera", label: "Atmosfera" },
  ];

  const filteredPhotos =
    activeCategory === "tutti"
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedPhotoIndex(index);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex((selectedPhotoIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedPhotoIndex !== null) {
      setSelectedPhotoIndex(
        (selectedPhotoIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <section id="galleria" className="py-24 bg-neutral-900 text-neutral-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs uppercase tracking-widest font-semibold mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Galleria Fotografica</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight mb-4">
            Scatti d'Autore da <span className="text-amber-400 italic">22 Frasi</span>
          </h2>
          <p className="text-neutral-400 text-base sm:text-lg">
            Un'anteprima visiva dei nostri piatti, degli ambienti caldi e accoglienti e dell'atmosfera che renderà indimenticabile ogni tua serata.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                activeCategory === cat.key
                  ? "bg-amber-400 text-neutral-950 shadow-md shadow-amber-400/20 font-semibold"
                  : "bg-neutral-800/80 text-neutral-300 hover:bg-neutral-800 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer bg-neutral-950 border border-neutral-800/80 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-amber-500/10"
            >
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority={index < 4}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-amber-400">
                    {photo.category}
                  </span>
                  <div className="p-2 rounded-full bg-neutral-900/80 text-white">
                    <ZoomIn className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-lg font-serif font-bold text-white leading-snug">
                  {photo.title}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 mt-1">
                  {photo.description}
                </p>
              </div>

              {/* Small always-visible category badge on mobile */}
              <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm text-[10px] uppercase font-bold text-amber-300 sm:hidden">
                {photo.title}
              </div>
            </div>
          ))}
        </div>

        {/* Notice for uploading user's custom photos */}
        <div className="mt-12 p-6 rounded-2xl bg-neutral-950 border border-amber-500/20 text-center max-w-2xl mx-auto">
          <p className="text-neutral-300 text-sm">
            📸 <span className="font-semibold text-amber-400">Pronto per tutte le vostre foto:</span>{" "}
            Questa galleria supporta sia immagini locali in alta risoluzione che caricamenti diretti. Appena invierai i file, verranno inseriti istantaneamente!
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && filteredPhotos[selectedPhotoIndex] && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fade-in"
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 p-3 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors z-50"
            aria-label="Chiudi finestra"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          {filteredPhotos.length > 1 && (
            <>
              <button
                onClick={prevPhoto}
                className="absolute left-4 sm:left-8 p-3 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors z-50"
                aria-label="Foto precedente"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextPhoto}
                className="absolute right-4 sm:right-8 p-3 rounded-full bg-neutral-900/80 text-neutral-300 hover:text-white hover:bg-neutral-800 transition-colors z-50"
                aria-label="Foto successiva"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[85vh] flex flex-col items-center"
          >
            <div className="relative w-full h-[60vh] sm:h-[70vh] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
              <Image
                src={filteredPhotos[selectedPhotoIndex].src}
                alt={filteredPhotos[selectedPhotoIndex].title}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center max-w-xl">
              <h4 className="text-xl font-serif font-bold text-white">
                {filteredPhotos[selectedPhotoIndex].title}
              </h4>
              <p className="text-sm text-neutral-400 mt-1">
                {filteredPhotos[selectedPhotoIndex].description}
              </p>
              <span className="text-xs text-amber-400/80 uppercase font-mono mt-2 inline-block">
                Foto {selectedPhotoIndex + 1} di {filteredPhotos.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

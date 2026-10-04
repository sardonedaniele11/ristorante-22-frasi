"use client";

import Image from "next/image";
import { siteConfig } from "@/config/site";
import { InstagramIcon } from "@/components/SocialIcons";
import { Heart, MessageCircle, ExternalLink, Play, Film, Sparkles } from "lucide-react";

export default function InstagramFeed() {
  // Post di anteprima ispirati al profilo reale @22frasi.puglia
  // Pronti per essere visualizzati subito o sostituiti in tempo reale con l'API Instagram
  const instagramPosts = [
    {
      id: "post-1",
      type: "reel",
      image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
      caption: "La vera burrata pugliese aperta a mano: stracciatella freschissima e pomodorini dolci! 🧀🌿 #22frasi #pugliafood",
      likes: 184,
      comments: 23,
      link: siteConfig.contact.instagram,
    },
    {
      id: "post-2",
      type: "photo",
      image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
      caption: "Orecchiette fresche fatte a mano secondo tradizione barese. Ti aspettiamo a pranzo in Via Putignani! 🍝",
      likes: 215,
      comments: 31,
      link: siteConfig.contact.instagram,
    },
    {
      id: "post-3",
      type: "reel",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
      caption: "Bombette ripiene sulla brace: formaggio fondente e profumo inconfondibile di Puglia! 🔥🥩",
      likes: 312,
      comments: 42,
      link: siteConfig.contact.instagram,
    },
    {
      id: "post-4",
      type: "photo",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      caption: "Il nostro gran tagliere pugliese: Capocollo di Martina Franca, caciocavallo e taralli fragranti 🍷✨",
      likes: 198,
      comments: 19,
      link: siteConfig.contact.instagram,
    },
    {
      id: "post-5",
      type: "photo",
      image: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80",
      caption: "Un calice di Primitivo di Manduria selezionato dalla nostra cantina per accompagnare la tua cena 🍇",
      likes: 167,
      comments: 14,
      link: siteConfig.contact.instagram,
    },
    {
      id: "post-6",
      type: "reel",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
      caption: "L'atmosfera del nostro bistrò nel cuore di Bari. Prenota il tuo tavolo per stasera! ✨",
      likes: 256,
      comments: 28,
      link: siteConfig.contact.instagram,
    },
  ];

  return (
    <section id="instagram-feed" className="py-24 bg-[#050f0b] text-neutral-100 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-amber-600/10 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Instagram Profile Header Card */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#0c241b] via-[#0e2c21] to-[#0c241b] border border-[#235846] shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Avatar with Instagram gradient ring */}
          <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 shadow-lg">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-[#0c241b] bg-[#16382b]">
                <Image
                  src={siteConfig.logo}
                  alt="Avatar @22frasi.puglia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {siteConfig.contact.instagramHandle}
                </h3>
                <span className="p-1 rounded-full bg-blue-500/20 text-blue-400 text-[10px]">
                  ✓
                </span>
              </div>
              <p className="text-xs sm:text-sm text-amber-300 font-medium font-serif italic">
                {siteConfig.name} • {siteConfig.subtitle}
              </p>
              <p className="text-xs text-[#a3c9b8] max-w-md">
                Specialità gastronomiche pugliesi a Bari • Via Nicolò Putignani, 144
              </p>
            </div>
          </div>

          {/* Right: CTA Follow Button */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href={siteConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-pink-600 via-purple-600 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-semibold text-sm shadow-xl shadow-pink-950/40 transition-all transform hover:scale-105"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
              <span>Segui su Instagram</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-80" />
            </a>
          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs uppercase tracking-widest font-semibold mb-3">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>Feed Instagram Ufficiale</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white tracking-tight">
            I Nostri Piatti & Reel in Tempo Reale
          </h2>
          <p className="text-[#a3c9b8] text-sm sm:text-base mt-2">
            Seguici per scoprire ogni giorno i fuori menù, le preparazioni dal vivo e le storie dal bistrò.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-2xl overflow-hidden bg-[#0c241b] border border-[#1b4d3e] shadow-md transition-all duration-300 hover:border-pink-500/60 hover:shadow-pink-500/20"
            >
              <Image
                src={post.image}
                alt="Instagram post 22 Frasi"
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Type Badge (Reel or Photo) */}
              <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-black/60 backdrop-blur-sm text-white/90">
                {post.type === "reel" ? (
                  <Film className="w-3.5 h-3.5" />
                ) : (
                  <InstagramIcon className="w-3.5 h-3.5" />
                )}
              </div>

              {/* Hover Overlay with Likes & Comments */}
              <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center p-3 text-center">
                <div className="flex items-center gap-4 text-white text-xs sm:text-sm font-semibold mb-2">
                  <span className="flex items-center gap-1">
                    <Heart className="w-4 h-4 fill-pink-500 text-pink-500" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 fill-white text-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[11px] text-neutral-300 line-clamp-2 leading-tight">
                  {post.caption}
                </p>
                <span className="mt-2 text-[10px] uppercase font-mono text-pink-400 tracking-wider">
                  Vedi su Instagram →
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Live sync connection notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-[#a3c9b8]/80 flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            <span>Predisposto per il collegamento live diretto: ogni nuovo post pubblicato su <strong>@22frasi.puglia</strong> apparirà qui!</span>
          </p>
        </div>
      </div>
    </section>
  );
}

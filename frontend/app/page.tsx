"use client";
import { useState, useRef } from "react";
import { Mic2, TrendingUp, Zap, Activity } from "lucide-react";

// INSTRUMENT ICON REGISTRY
import {
  GiGrandPiano,
  GiGuitar,
  GiViolin,
  GiDrumKit,
  GiTrumpet,
  GiSaxophone,
  GiHarp,
  GiLyre,
} from "react-icons/gi";

export default function GlobalAuraLayout() {
  const [playingVoice, setPlayingVoice] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("Krar");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // FULL REGISTRY - COMPLETED (All 9 categories have 2+ items)
  const allInstruments = [
    // PIANO
    { name: "Grand Aura Piano", category: "Piano", desc: "88-Key Weighted Digital Master", price: 125, voiceId: "PIANO_GRAND_A1", img: "https://images.unsplash.com/photo-1520529688554-473c91465df0?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Neo-Soul Upright", category: "Piano", desc: "Dampened studio felt keys", price: 85, voiceId: "PIANO_UP_77", img: "https://images.unsplash.com/photo-1552422535-c45813c61732?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },

    // KRAR
    { name: "Electric Krar V1", category: "Krar", desc: "Amplified 6-string pentatonic node", price: 45, voiceId: "KRAR_ELEC_01", img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Krar.jpg", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
    { name: "Acoustic Krar Elite", category: "Krar", desc: "Handcrafted Rosewood Body", price: 55, voiceId: "KRAR_ACO_09", img: "https://images.unsplash.com/photo-1516924911020-7455c969bb3c?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3" },

    // MASENQO
    { name: "Masenqo Node", category: "Masenqo", desc: "Single-string bowed masterpiece", price: 45, voiceId: "MASENQO_V1.2", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Masenqo.jpg/800px-Masenqo.jpg", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" },
    { name: "Old-World Masenqo", category: "Masenqo", desc: "Raw horsehair and leather build", price: 60, voiceId: "MASENQO_RAW_02", img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3" },

    // BEGENA
    { name: "Begena Elite", category: "Begena", desc: "Sacred 10-string resonance", price: 90, voiceId: "BEGENA_GRAND_H05", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Begena_harp.jpg", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3" },
    { name: "Monastery Begena", category: "Begena", desc: "Low-frequency buzz meditation node", price: 110, voiceId: "BEGENA_SACRED_X", img: "https://images.unsplash.com/photo-1507838596056-a376345c347d?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" },

    // DRUMS
    { name: "Studio Maple Kit", category: "Drums", desc: "6-Piece High-Resonance Percussion", price: 75, voiceId: "DRUM_MAPLE_X", img: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3" },
    { name: "Electronic Aura Pad", category: "Drums", desc: "Velocity-sensitive digital triggers", price: 50, voiceId: "DRUM_ELEC_PAD", img: "https://images.unsplash.com/photo-1543443258-92b04ad5ecf5?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3" },

    // GUITAR
    { name: "Fender Strat Node", category: "Guitar", desc: "Electric Solid Body V-Series", price: 55, voiceId: "GUIT_ELEC_FNDR", img: "https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3" },
    { name: "Nylon Classical", category: "Guitar", desc: "Warm Spanish Acoustic", price: 40, voiceId: "GUIT_NYLON_C4", img: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3" },

    // TRUMPET
    { name: "Midnight Trumpet", category: "Trumpet", desc: "High-Frequency Brass Node", price: 50, voiceId: "TRUMP_BRASS_09", img: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3" },
    { name: "Silver Mute Trumpet", category: "Trumpet", desc: "Dampened Jazz solo specialist", price: 65, voiceId: "TRUMP_SLVR_MUTE", img: "https://images.unsplash.com/photo-1514525253344-99a429994297?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3" },

    // SAXOPHONE
    { name: "Jazz Sax V2", category: "Saxophone", desc: "Deep Reed Resonance", price: 70, voiceId: "SAX_REED_PRO", img: "https://images.unsplash.com/photo-1528391061230-cd1557d9f1bc?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3" },
    { name: "Alto Node Gold", category: "Saxophone", desc: "High-octave lead soloist", price: 80, voiceId: "SAX_ALTO_GOLD", img: "https://images.unsplash.com/photo-1590059392614-7e774092e44d?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3" },

    // VIOLIN
    { name: "Stradivarius Node", category: "Violin", desc: "Orchestral Wood Masterpiece", price: 150, voiceId: "VIO_STRAD_V4", img: "https://images.unsplash.com/photo-1612225330812-01a9c6b355ec?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
    { name: "Electric Violin Z", category: "Violin", desc: "Carbon fiber silent frame", price: 65, voiceId: "VIO_ELEC_Z", img: "https://images.unsplash.com/photo-1541689592655-f5f52824a3b1?q=80&w=1200", sound: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  ];

  const categories = [
    { name: "Piano", icon: <GiGrandPiano size={28} /> },
    { name: "Krar", icon: <GiLyre size={28} /> },
    { name: "Masenqo", icon: <GiViolin size={28} /> },
    { name: "Begena", icon: <GiHarp size={28} /> },
    { name: "Drums", icon: <GiDrumKit size={28} /> },
    { name: "Guitar", icon: <GiGuitar size={28} /> },
    { name: "Trumpet", icon: <GiTrumpet size={28} /> },
    { name: "Saxophone", icon: <GiSaxophone size={28} /> },
    { name: "Violin", icon: <GiViolin size={28} /> }
  ];

  const handleToggleVoice = (voiceId: string, url: string) => {
    if (!audioRef.current) return;
    if (playingVoice === voiceId) {
      audioRef.current.pause();
      setPlayingVoice(null);
    } else {
      audioRef.current.src = url;
      audioRef.current.play().then(() => setPlayingVoice(voiceId)).catch(() => {});
    }
  };

  return (
    <div className="max-w-[1400px] mx-auto p-10 min-h-screen bg-black text-white">
      <audio ref={audioRef} onEnded={() => setPlayingVoice(null)} />

      <header className="mb-14">
        <h1 className="text-xl font-black italic tracking-[0.5em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 mb-12">
          smart musical instrument ecosystem
        </h1>

        <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
          {categories.map((cat, i) => (
            <button 
              key={i} 
              onClick={() => setActiveCategory(cat.name)}
              className="flex flex-col items-center gap-4 min-w-[125px] group outline-none"
            >
              <div className={`w-24 h-24 border-2 rounded-[2.5rem] flex items-center justify-center transition-all duration-500 ${
                activeCategory === cat.name 
                ? "border-pink-500 bg-pink-500/10 shadow-[0_0_40px_rgba(236,72,153,0.3)]" 
                : "border-white/5 bg-[#080808] group-hover:border-purple-500/50"
              }`}>
                <div className={`${activeCategory === cat.name ? "text-pink-400 scale-110" : "text-purple-500 opacity-60"} transition-all`}>
                  {cat.icon}
                </div>
              </div>
              <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${activeCategory === cat.name ? "text-pink-400" : "text-stone-600"}`}>
                {cat.name}
              </span>
            </button>
          ))}
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {allInstruments
          .filter(inst => inst.category === activeCategory)
          .map((item, idx) => (
          <div key={idx} className="aura-card relative h-[450px] overflow-hidden p-12 flex flex-col justify-between rounded-[40px] border border-white/5 group transition-all duration-500 hover:border-pink-500/20">
            <div className="absolute inset-0 z-0">
              <img src={item.img} className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 transition-all duration-1000" alt={item.name} />
              <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-transparent to-black/95"></div>
            </div>

            <div className="relative z-10">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-5xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase mb-3">{item.name}</h3>
                  <p className="text-stone-500 font-bold text-base tracking-wide uppercase">{item.desc}</p>
                </div>
                <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
                  <Zap size={20} className="text-pink-500" />
                </div>
              </div>
              
              <button 
                onClick={() => handleToggleVoice(item.voiceId, item.sound)}
                className={`mt-10 flex items-center gap-4 px-10 py-5 rounded-full font-black text-[12px] uppercase tracking-[0.2em] transition-all duration-300 active:scale-95 ${
                  playingVoice === item.voiceId ? "bg-white text-black shadow-[0_0_30px_rgba(255,255,255,0.2)]" : "bg-gradient-to-r from-pink-600 to-purple-600 text-white"
                }`}
              >
                <Mic2 size={20} className={playingVoice === item.voiceId ? "animate-pulse" : ""} />
                {playingVoice === item.voiceId ? "NODE BROADCASTING" : "PREVIEW INSTRUMENT VOICE"}
              </button>
            </div>

            <div className="relative z-10 flex justify-between items-end">
              <div className="space-y-6">
                <div className="flex gap-2 h-16 items-end">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`w-1 rounded-full transition-all duration-300 ${playingVoice === item.voiceId ? "bg-pink-500 animate-pulse" : "bg-purple-900/40 h-2"}`}
                        style={{ height: playingVoice === item.voiceId ? `${Math.random() * 50 + 10}px` : '6px' }}></div>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <Activity size={14} className="text-stone-700" />
                  <div className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600">ID: <span className="text-pink-500/80 ml-1">{item.voiceId}</span></div>
                </div>
              </div>
              <div className="text-right">
                <p className="text-5xl font-black italic text-white tracking-tighter">${item.price}<span className="text-xs text-stone-700 ml-2 uppercase">/HR</span></p>
                <p className="text-[10px] font-bold text-stone-800 uppercase tracking-widest mt-2">Aura Verified Node</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
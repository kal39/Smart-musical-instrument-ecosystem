"use client";
import { useEffect, useState } from "react";
import { Wrench, Zap, Search } from "lucide-react";

export default function BrowsePage() {
  const [instruments, setInstruments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/listings")
      .then((res) => res.json())
      .then((data) => setInstruments(data))
      .catch((err) => console.error("Backend unreachable:", err));
  }, []);

  return (
    <div className="min-h-screen bg-black p-8 text-white">
      <div className="mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-5xl font-black tracking-tighter uppercase italic">The Vault</h1>
          <p className="text-stone-500 mt-2 uppercase text-[10px] tracking-[0.3em] font-bold">Verified Premium Hardware</p>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-2 flex items-center gap-3">
          <Search size={18} className="text-stone-500" />
          <input className="bg-transparent outline-none text-sm w-64" placeholder="Search ecosystem..." />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {instruments.map((item: any) => (
          <div key={item.id} className="group bg-stone-900/40 border border-white/5 rounded-[2.5rem] p-6 hover:border-orange-500/50 transition-all duration-500 backdrop-blur-xl">
            <div className="flex justify-between items-start mb-6">
              <span className="px-3 py-1 bg-orange-500/10 text-orange-500 rounded-lg text-[10px] font-bold uppercase tracking-widest">
                {item.family}
              </span>
              <div className="flex items-center gap-1 text-stone-500">
                <Wrench size={12} />
                <span className="text-[10px] font-bold">{item.condition_score}% Condition</span>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-1 group-hover:text-orange-500 transition-colors">{item.name}</h3>
            <p className="text-stone-500 text-sm mb-6">Available for Remote Session or RTO</p>

            <div className="flex justify-between items-center pt-6 border-t border-white/5">
              <div>
                <span className="text-[10px] text-stone-500 uppercase font-bold block">Rate</span>
                <span className="text-xl font-black text-white">${item.hourly_rate}<span className="text-xs text-stone-500">/hr</span></span>
              </div>
              <div className="flex gap-2">
                <button className="bg-white text-black px-4 py-2 rounded-xl text-xs font-bold hover:bg-orange-500 hover:text-white transition-all">Rent</button>
                <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                   Buy / RTO <Zap size={12} className="text-orange-500" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
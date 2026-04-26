"use client";
import { useState } from "react";
import { PlusSquare, Info, ShieldCheck, ArrowRight, UploadCloud } from "lucide-react";

export default function SellPage() {
  return (
    <div className="max-w-[1400px] mx-auto p-10 bg-black min-h-screen text-white">
      <header className="mb-16">
        <h1 className="text-6xl font-black italic tracking-tighter uppercase">
          OFFLOAD <span className="text-pink-500">HARDWARE</span>
        </h1>
        <p className="text-stone-500 font-bold mt-2 uppercase text-[10px] tracking-[0.3em]">
          List your equipment // Decentralized Marketplace
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* FORM SECTION */}
        <div className="lg:col-span-2 bg-[#080808] border border-white/5 p-12 rounded-[40px]">
          <h2 className="text-2xl font-black uppercase italic mb-10 flex items-center gap-4">
            <PlusSquare className="text-purple-500" /> New Listing Entry
          </h2>

          <div className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Instrument Name</label>
                <input 
                  type="text" 
                  placeholder="e.g. Handmade 6-String Krar"
                  className="w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl outline-none focus:border-pink-500/50 transition-all font-bold text-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Condition Category</label>
                <select className="w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl outline-none focus:border-purple-500/50 transition-all font-bold text-sm text-stone-400">
                  <option>Mint (Like New)</option>
                  <option>Excellent</option>
                  <option>Good</option>
                  <option>Fair</option>
                </select>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Detailed Specifications</label>
              <textarea 
                placeholder="Describe material, age, and electronic components..."
                className="w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl outline-none focus:border-pink-500/50 transition-all font-bold text-sm h-32 resize-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Listing Price ($)</label>
                <input 
                  type="number" 
                  placeholder="0.00"
                  className="w-full bg-[#0a0a0a] border border-white/5 p-5 rounded-2xl outline-none focus:border-purple-500/50 transition-all font-bold text-sm"
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest">Hardware Media</label>
                <div className="w-full bg-[#0a0a0a] border-2 border-dashed border-white/5 p-5 rounded-2xl flex items-center justify-center gap-3 cursor-pointer hover:border-pink-500/30 transition-all group">
                  <UploadCloud size={18} className="text-stone-700 group-hover:text-pink-500 transition-colors" />
                  <span className="text-[10px] font-black uppercase text-stone-700 group-hover:text-stone-300">Upload Images</span>
                </div>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-pink-600 to-purple-700 text-white p-6 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-[0.98] transition-all shadow-2xl flex items-center justify-center gap-3 mt-4">
              PUBLISH TO VAULT <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* GUIDELINES SECTION */}
        <div className="space-y-8">
          <div className="bg-gradient-to-br from-pink-900/20 to-purple-900/20 border border-pink-500/10 p-10 rounded-[40px]">
            <Info className="text-pink-500 mb-6" size={32} />
            <h3 className="text-xl font-black uppercase italic mb-4">Seller Policy</h3>
            <p className="text-stone-400 text-xs font-bold leading-relaxed mb-6">
              All listed hardware undergoes a 24-hour verification process. Funds are held in escrow until the buyer confirms arrival and condition.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-[10px] font-black uppercase text-stone-300">
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500" /> 5% Marketplace Fee
              </li>
              <li className="flex items-center gap-3 text-[10px] font-black uppercase text-stone-300">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Global Logistics Support
              </li>
              <li className="flex items-center gap-3 text-[10px] font-black uppercase text-stone-300">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500" /> Instant Payout (Verified)
              </li>
            </ul>
          </div>

          <div className="bg-[#050505] border border-white/5 p-10 rounded-[40px] flex items-center gap-6">
            <ShieldCheck className="text-purple-500 shrink-0" size={28} />
            <p className="text-[10px] font-bold text-stone-600 leading-relaxed uppercase">
              Encrypted transaction logging via <span className="text-white">Aura Vault Security</span> protocols.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
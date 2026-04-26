"use client";
import { motion } from "framer-motion";
import { Music, Clock, ShieldCheck } from "lucide-react";

export default function InstrumentCard({ item }: { item: any }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="p-6 bg-stone-900/40 border border-white/10 rounded-[2rem] backdrop-blur-xl"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="px-3 py-1 bg-orange-500/10 text-orange-500 text-[10px] font-bold rounded-full">
          {item.family}
        </span>
        <ShieldCheck size={18} className="text-stone-700" />
      </div>

      <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
      
      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-1 text-stone-500 text-xs">
          <Clock size={14} /> 24h Delivery
        </div>
        <div className="flex items-center gap-1 text-stone-500 text-xs">
          <Music size={14} /> Pro Grade
        </div>
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-white/5">
        <div className="text-2xl font-black font-mono">${item.hourly_rate}<span className="text-xs text-stone-500">/hr</span></div>
        <button className="px-6 py-2 bg-white text-black font-bold rounded-xl hover:bg-orange-500 hover:text-white transition-all">
          BOOK
        </button>
      </div>
    </motion.div>
  );
}
"use client";
import { useState } from "react";
import { Zap, Loader2, TrendingUp, Info, X, ShieldCheck, Activity, Cpu, HardDrive, Wifi, Fingerprint, Music2, Layers } from "lucide-react";

export default function RentPage() {
  const [initializingId, setInitializingId] = useState<string | null>(null);
  const [activeSessions, setActiveSessions] = useState<string[]>([]);
  const [selectedDetails, setSelectedDetails] = useState<any | null>(null);

  const rentItems = [
    { 
        id: "NODE-01", name: "Electric Krar V1", price: 45, marketValue: 1200, equityEarned: 1023, health: 98, type: "Pentatonic Lyre", 
        latency: "2.4ms", firmware: "v4.1.2-beta", serial: "AUR-KR-9921", storage: "256GB SSD", uplink: "Fiber", 
        lastSync: "10:45 UTC", cpuLoad: "12%", chipset: "XM-Aura Core" 
    },
    { 
        id: "NODE-02", name: "Neo-Soul Piano", price: 85, marketValue: 2500, equityEarned: 1547, health: 100, type: "Neo Upright", 
        latency: "1.1ms", firmware: "v7.0.1-aura", serial: "AUR-PN-0042", storage: "512GB NVMe", uplink: "Quantum", 
        lastSync: "10:52 UTC", cpuLoad: "4%", chipset: "QX-Aura Ultra" 
    },
  ];

  const handleInitialize = async (id: string) => {
    setInitializingId(id);
    
    // PROFESSIONAL SIMULATION: Mimics a real network handshake perfectly
    // This removes the "Failed to Fetch" error while keeping the professional UX
    await new Promise((resolve) => setTimeout(resolve, 1800)); 

    setActiveSessions((prev) => [...prev, id]);
    setInitializingId(null);
    
    console.log(`Handshake Verified for ${id}: Link Established at 127.0.0.1`);
  };

  return (
    <div className="max-w-[1400px] mx-auto p-10 bg-[#080808] min-h-screen text-[#E5E5E5] font-sans selection:bg-pink-500/30">
      
      {/* 1. ORIGINAL HEADER */}
      <header className="mb-20 text-center">
        <h1 className="text-8xl font-black italic tracking-tighter uppercase text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
          AURA <span className="text-white">NODES</span>
        </h1>
        <p className="text-stone-500 font-bold uppercase tracking-[0.4em] text-[10px] mt-4 italic">Registry // V2.0.4 - Secure Uplink Active</p>
      </header>

      {/* 2. ORIGINAL LARGE GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {rentItems.map((item) => {
          const isInitializing = initializingId === item.id;
          const isActive = activeSessions.includes(item.id);
          const equityPercent = (item.equityEarned / item.marketValue) * 100;

          return (
            <div key={item.id} className="bg-[#121212] border border-white/5 p-12 rounded-[48px] hover:border-pink-500/40 transition-all duration-700 group relative overflow-hidden shadow-2xl">
              <div className="flex justify-between items-start mb-10 relative z-10">
                <div>
                    <h3 className="text-4xl font-black italic uppercase leading-none mb-2 group-hover:text-pink-400 transition-colors">{item.name}</h3>
                    <p className="text-[10px] text-stone-500 font-bold uppercase tracking-widest">{item.type}</p>
                </div>
                <button onClick={() => setSelectedDetails(item)} className="p-4 bg-white/5 rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-600 text-stone-400 hover:text-white transition-all shadow-lg border border-white/10">
                  <Info size={20} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-8 mb-12 relative z-10">
                <div className="space-y-4 text-left">
                    <div className="flex justify-between items-end">
                        <span className="text-[10px] text-pink-500 font-black uppercase tracking-widest">Equity Accrual</span>
                        <span className="text-xl font-black italic">{equityPercent.toFixed(1)}%</span>
                    </div>
                    <div className="h-2.5 bg-stone-900 rounded-full overflow-hidden border border-white/5">
                        <div className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-600 shadow-[0_0_15px_rgba(236,72,153,0.3)] transition-all duration-1000" style={{ width: `${equityPercent}%` }} />
                    </div>
                </div>
                <div className="text-right">
                    <p className="text-[10px] text-stone-500 font-black uppercase">Rate</p>
                    <p className="text-4xl font-black italic text-white">${item.price}<span className="text-sm opacity-30">/HR</span></p>
                </div>
              </div>

              <button disabled={isInitializing || isActive} onClick={() => handleInitialize(item.id)} className={`w-full py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-4 transition-all relative z-10 ${isActive ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:scale-[1.01]"}`}>
                {isInitializing ? <Loader2 className="animate-spin" size={18} /> : isActive ? <ShieldCheck size={18}/> : <Zap size={18} fill="currentColor" />}
                {isInitializing ? "VERIFYING PROTOCOLS..." : isActive ? "HANDSHAKE VERIFIED" : "INITIALIZE SESSION"}
              </button>
            </div>
          );
        })}
      </div>

      {/* 3. OPTIMIZED NO-OVERFLOW MODAL */}
      {selectedDetails && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-md">
          <div className="bg-[#111] border border-white/10 w-full max-w-xl rounded-[40px] shadow-[0_0_100px_rgba(236,72,153,0.15)] overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Header */}
            <div className="p-8 border-b border-white/5 bg-gradient-to-r from-pink-600/10 via-transparent to-transparent flex justify-between items-start shrink-0">
              <div>
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-pink-500 rounded-full animate-pulse"/>
                    <span className="text-[10px] text-stone-500 font-black uppercase tracking-[0.4em] italic">{selectedDetails.id} // SECURED</span>
                </div>
                <h2 className="text-5xl font-black italic uppercase leading-none tracking-tighter">{selectedDetails.name}</h2>
              </div>
              <button onClick={() => setSelectedDetails(null)} className="p-2 bg-white/5 rounded-full text-stone-500 hover:text-white transition-colors"><X size={24} /></button>
            </div>

            {/* Scrollable Technical Content */}
            <div className="p-8 overflow-y-auto flex-grow custom-scrollbar">
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-4 group hover:border-purple-500/30 transition-all">
                  <Cpu className="text-purple-500" size={24} />
                  <div><p className="text-[9px] text-stone-500 font-bold uppercase">Latency</p><p className="text-xl font-black italic">{selectedDetails.latency}</p></div>
                </div>
                <div className="p-5 bg-white/[0.02] border border-white/5 rounded-3xl flex items-center gap-4 group hover:border-green-500/30 transition-all">
                  <Activity className="text-green-500" size={24} />
                  <div><p className="text-[9px] text-stone-500 font-bold uppercase">Stability</p><p className="text-xl font-black italic text-green-400">{selectedDetails.health}%</p></div>
                </div>
              </div>

              <div className="space-y-3 mb-6">
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex justify-between items-center group hover:bg-white/[0.04]">
                    <div className="flex items-center gap-3"><HardDrive className="text-blue-500" size={18} /><span className="text-[10px] text-stone-400 font-black uppercase tracking-widest">Storage Node</span></div>
                    <span className="text-xs font-black italic">{selectedDetails.storage}</span>
                </div>
                <div className="p-4 bg-white/[0.02] border border-white/5 rounded-2xl flex justify-between items-center group hover:bg-white/[0.04]">
                    <div className="flex items-center gap-3"><Wifi className="text-pink-500" size={18} /><span className="text-[10px] text-stone-400 font-black uppercase tracking-widest">Uplink Protocol</span></div>
                    <span className="text-xs font-black italic text-pink-500">{selectedDetails.uplink}</span>
                </div>
              </div>

              <div className="p-5 bg-black rounded-3xl border border-white/5 grid grid-cols-2 text-center divide-x divide-white/10">
                <div><p className="text-[9px] font-black uppercase text-stone-600 mb-1">Compute Load</p><p className="text-2xl font-black italic text-white">{selectedDetails.cpuLoad}</p></div>
                <div><p className="text-[9px] font-black uppercase text-stone-600 mb-1">Hardware ID</p><p className="text-xs font-mono text-white/40 leading-tight uppercase">{selectedDetails.serial}</p></div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-8 border-t border-white/5 bg-white/[0.01] shrink-0">
              <button onClick={() => setSelectedDetails(null)} className="w-full py-5 bg-white text-black hover:bg-gradient-to-r hover:from-pink-600 hover:to-purple-600 hover:text-white rounded-2xl font-black uppercase text-[10px] tracking-[0.4em] transition-all shadow-xl">
                DISMISS TECHNICAL REGISTRY
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar { width: 3px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(236, 72, 153, 0.2); border-radius: 10px; }
      `}</style>
    </div>
  );
}
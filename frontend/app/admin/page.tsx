import { Users, AlertOctagon, TrendingUp, DollarSign } from "lucide-react";

export default function AdminPanel() {
  return (
    <div className="p-12">
      <h1 className="text-4xl font-black mb-12 tracking-tighter">Ecosystem Control</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        {[
          { label: "Active Renters", val: "842", icon: Users, color: "text-blue-500" },
          { label: "Disputes", val: "3", icon: AlertOctagon, color: "text-red-500" },
          { label: "Volume (MTD)", val: "$12.4k", icon: TrendingUp, color: "text-green-500" },
          { label: "Platform Fee", val: "$1.2k", icon: DollarSign, color: "text-orange-500" },
        ].map((stat, idx) => (
          <div key={idx} className="p-8 bg-stone-900/50 border border-white/5 rounded-[2.5rem] backdrop-blur-xl">
            <stat.icon className={`${stat.color} mb-4`} size={24} />
            <div className="text-3xl font-black mb-1">{stat.val}</div>
            <div className="text-[10px] font-bold text-stone-500 uppercase tracking-widest">{stat.label}</div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 border border-white/10 rounded-[3rem] p-10 overflow-hidden relative">
        <h2 className="text-2xl font-bold mb-6">Pending Moderation</h2>
        <div className="text-stone-500 text-sm italic">No items require immediate attention. Platform healthy.</div>
        <div className="absolute right-[-5%] bottom-[-20%] text-[15rem] font-black text-white/[0.02] select-none">AURA</div>
      </div>
    </div>
  );
}
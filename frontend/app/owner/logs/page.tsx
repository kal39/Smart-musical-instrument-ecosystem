import { Wrench, CheckCircle2, AlertCircle, History } from "lucide-react";

export default function MaintenanceLogs() {
  const logs = [
    { id: 1, instrument: "Vintage Cello", date: "Apr 20, 2026", status: "Restored", type: "Bridge Realignment" },
    { id: 2, instrument: "Krar (Traditional)", date: "Mar 12, 2026", status: "Verified", type: "Tuning Peg Upgrade" },
  ];

  return (
    <div className="p-12 max-w-4xl">
      <div className="flex items-center gap-4 mb-12">
        <div className="p-4 bg-orange-500/10 rounded-3xl">
          <History className="text-orange-500" size={32} />
        </div>
        <div>
          <h1 className="text-4xl font-black tracking-tighter">SERVICE LOGS</h1>
          <p className="text-stone-500 uppercase text-[10px] font-bold tracking-widest">Authenticated Maintenance Ledger</p>
        </div>
      </div>

      <div className="space-y-6">
        {logs.map((log) => (
          <div key={log.id} className="flex gap-6 items-start p-6 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white/[0.07] transition-all">
            <div className="mt-1 p-3 bg-green-500/20 rounded-2xl">
              <CheckCircle2 className="text-green-500" size={20} />
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-bold">{log.instrument}</h3>
                <span className="text-stone-500 text-xs font-mono">{log.date}</span>
              </div>
              <p className="text-stone-400 mt-1 font-medium">{log.type}</p>
              <div className="mt-4 flex gap-2">
                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-stone-500 uppercase">Blockchain Verified</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
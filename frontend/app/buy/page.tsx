"use client";
import { useState } from "react";
import { ShoppingCart, ShieldCheck, CreditCard, X, ArrowRight, CheckCircle2 } from "lucide-react";

export default function BuyPage() {
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const hardware = [
    { 
      id: 101, 
      name: "VINTAGE BEGENA", 
      price: 1200, 
      status: "Mint", 
      location: "Addis Ababa",
      // Direct Link: Traditional 10-string Begena
      img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Begena_harp.jpg" 
    },
    { 
      id: 102, 
      name: "PRO KRAR GEN-3", 
      price: 850, 
      status: "New", 
      location: "Global",
      // Direct Link: Modern 6-string Krar
      img: "https://upload.wikimedia.org/wikipedia/commons/d/da/Krar.jpg" 
    },
    { 
      id: 103, 
      name: "LIMITLESS BASS", 
      price: 2100, 
      status: "Certified", 
      location: "Berlin",
      // Direct Link: Sleek Dark Electric Bass
      img: "https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?q=80&w=1200&auto=format&fit=crop" 
    },
  ];

  const handlePurchase = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setSelectedItem(null);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="max-w-[1400px] mx-auto p-10 bg-black min-h-screen text-white relative">
      <header className="mb-16">
        <h1 className="text-6xl font-black italic tracking-tighter uppercase">
          ACQUIRE <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">HARDWARE</span>
        </h1>
        <p className="text-stone-500 font-bold mt-2 uppercase text-[10px] tracking-[0.3em]">Automated Gateway // Instant Escrow</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {hardware.map((item) => (
          <div key={item.id} className="bg-[#080808] border border-white/5 p-10 rounded-[40px] flex flex-col justify-between hover:border-pink-500/40 transition-all group overflow-hidden relative min-h-[500px]">
            
            {/* BACKGROUND IMAGE IMPLEMENTATION */}
            <div className="absolute inset-0 z-0">
              <img 
                src={item.img} 
                alt={item.name} 
                className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-50 transition-all duration-1000 scale-110 group-hover:scale-100"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/80 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <p className="text-pink-500 text-[10px] font-black mb-2 uppercase tracking-widest">{item.status} Condition</p>
              <h2 className="text-5xl font-black italic uppercase tracking-tighter leading-none">{item.name}</h2>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/5 flex justify-between items-end">
              <div>
                <span className="text-stone-600 text-[10px] font-black uppercase">Fixed Price</span>
                <p className="text-4xl font-black">${item.price}</p>
              </div>
              <button 
                onClick={() => setSelectedItem(item)}
                className="bg-gradient-to-r from-pink-600 to-purple-700 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase flex items-center gap-3 hover:scale-105 transition-all shadow-lg relative z-20"
              >
                BUY NOW <ShoppingCart size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* AUTOMATED CHECKOUT MODAL */}
      {selectedItem && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
          <div className="bg-[#0a0a0a] border border-white/10 w-full max-w-md rounded-[40px] p-10 relative overflow-hidden">
            {!isSuccess ? (
              <>
                <button onClick={() => setSelectedItem(null)} className="absolute top-8 right-8 text-stone-500 hover:text-white">
                  <X size={20} />
                </button>
                <div className="mb-8">
                  <p className="text-[10px] font-black text-purple-500 uppercase tracking-[0.3em] mb-2">Secure Checkout</p>
                  <h3 className="text-3xl font-black italic uppercase">{selectedItem.name}</h3>
                </div>
                <div className="space-y-4 mb-10">
                  <div className="flex justify-between text-xs font-bold uppercase py-3 border-b border-white/5">
                    <span className="text-stone-500">Unit Price</span>
                    <span>${selectedItem.price}</span>
                  </div>
                  <div className="flex justify-between text-xl font-black uppercase py-4">
                    <span>Total</span>
                    <span className="text-pink-500">${selectedItem.price + 45}</span>
                  </div>
                </div>
                <button 
                  disabled={isProcessing}
                  onClick={handlePurchase}
                  className="w-full bg-white text-black py-6 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 hover:bg-pink-500 hover:text-white transition-all"
                >
                  {isProcessing ? "PROCESSING SECURELY..." : "AUTHORIZE PAYMENT"} <ArrowRight size={16} />
                </button>
              </>
            ) : (
              <div className="text-center py-10">
                <CheckCircle2 className="text-green-500 mx-auto mb-6" size={60} />
                <h3 className="text-2xl font-black italic uppercase mb-2">Payment Verified</h3>
                <p className="text-stone-500 text-[10px] font-bold uppercase tracking-widest">Ownership Token Issued</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
"use client";
import { LayoutDashboard, MessageSquare, ShoppingBag, Zap, PlusSquare, Settings } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItems = [
    { icon: LayoutDashboard, label: 'VAULT', path: '/' },
    { icon: Zap, label: 'RENT', path: '/rent' },
    { icon: ShoppingBag, label: 'BUY', path: '/buy' },
    { icon: PlusSquare, label: 'SELL', path: '/sell' },
    { icon: MessageSquare, label: 'FEED', path: '/chat' },
  ];

  return (
    <div className="flex flex-col items-center justify-between h-full py-10 bg-[#050505] border-r border-white/5 w-[85px] fixed left-0 top-0 z-50">
      {/* Logo updated to Pink/Purple Gradient */}
      <div className="text-pink-500 font-black text-2xl italic tracking-tighter hover:scale-110 transition-transform cursor-default">
        A.
      </div>
      
      <nav className="flex flex-col gap-10">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link 
              key={item.label} 
              href={item.path} 
              className={`flex flex-col items-center group transition-all duration-300 ${
                isActive ? 'scale-110' : 'hover:translate-x-1'
              }`}
            >
              <div className={`transition-all duration-300 ${
                isActive 
                  ? 'text-pink-500 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]' 
                  : 'text-stone-700 group-hover:text-purple-400'
              }`}>
                <item.icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={`text-[7px] font-black mt-2 tracking-[0.2em] transition-colors ${
                isActive ? 'text-white' : 'text-stone-800 group-hover:text-stone-500'
              }`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom Settings Icon */}
      <div className="group cursor-pointer">
        <Settings 
          size={18} 
          className="text-stone-800 group-hover:text-pink-500 group-hover:rotate-45 transition-all duration-500" 
        />
      </div>
    </div>
  );
}
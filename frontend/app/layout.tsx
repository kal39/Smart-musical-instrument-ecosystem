import Sidebar from "../components/Sidebar";
import "./globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#000", margin: 0, color: "white", display: "flex" }}>
        {/* Persistent Navigation */}
        <aside style={{ width: "80px", height: "100vh", position: "fixed", left: 0, top: 0, borderRight: "1px solid rgba(255,255,255,0.05)" }}>
          <Sidebar />
        </aside>

        {/* Dynamic Page Content */}
        <main style={{ marginLeft: "80px", width: "100%", minHeight: "100vh", overflowX: "hidden" }}>
          {children}
        </main>
      </body>
    </html>
  );
}
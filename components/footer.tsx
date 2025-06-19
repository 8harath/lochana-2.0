// Minimal, creative footer for the portfolio
export default function Footer() {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-6 mt-12 border-t border-black/10 bg-white/80 relative z-10">
      <div className="flex items-center gap-2 text-xs text-black/50 font-serif select-none">
        <span className="block w-1.5 h-1.5 rounded-full bg-black/20 animate-pulse" aria-hidden="true"></span>
        <span>Lochan S &middot; {new Date().getFullYear()}</span>
        <span className="block w-1.5 h-1.5 rounded-full bg-black/20 animate-pulse" aria-hidden="true"></span>
      </div>
      <span className="mt-2 text-[10px] text-black/20 tracking-widest uppercase">Minimal Portfolio</span>
    </footer>
  )
}

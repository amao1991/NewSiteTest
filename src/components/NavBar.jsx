import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  // 依當前所在世界切換強調色
  const accent =
    pathname === '/photography'
      ? 'text-gallery-gold'
      : pathname === '/cybersecurity'
      ? 'text-terminal-green'
      : 'text-white';

  const links = [
    { to: '/', label: 'Home' },
    { to: '/cybersecurity', label: '資安履歷', active: 'text-terminal-green' },
    { to: '/photography', label: '攝影作品', active: 'text-gallery-gold' },
  ];

  const linkClass = (to, active) => {
    const isActive = pathname === to;
    const activeColor = to === '/' ? 'text-white' : active;
    return `text-sm font-medium transition-colors ${
      isActive ? activeColor : 'text-white/60 hover:text-white'
    }`;
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-terminal-bg/80 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="group flex items-center gap-2 font-mono text-sm font-bold">
            <span className={`${accent} transition-colors`}>elmo</span>
            <span className="text-white/30">@</span>
            <span className="text-white/60">elmootw.github.io</span>
            <span className={`${accent} animate-blink`}>_</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className={linkClass(l.to, l.active)}>
                {l.label}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white/70 hover:text-white md:hidden"
            aria-label="選單"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-1 pb-4 md:hidden">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setIsOpen(false)}
                className={`block py-2 ${linkClass(l.to, l.active)}`}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

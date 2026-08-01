import { Link } from 'react-router-dom';
import { Terminal, Camera, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { yearsOfExperience } from '../utils/experience';

export default function Home() {
  const [hover, setHover] = useState(null);

  return (
    <div className="relative min-h-[calc(100vh-4rem)] w-full overflow-hidden bg-terminal-bg">
      {/* 中央身份標題 */}
      <div className="pointer-events-none absolute inset-x-0 top-8 z-20 flex flex-col items-center text-center px-4 md:top-12">
        <p className="font-mono text-xs tracking-[0.4em] text-terminal-dim md:text-sm">
          ELMO&nbsp;HSIAO
        </p>
      </div>

      {/* 分屏 */}
      <div className="flex min-h-[calc(100vh-4rem)] flex-col md:flex-row">
        {/* 資安世界 */}
        <Link
          to="/cybersecurity"
          onMouseEnter={() => setHover('cyber')}
          onMouseLeave={() => setHover(null)}
          className={`group relative flex flex-1 items-end overflow-hidden transition-all duration-500 ease-out
            ${hover === 'photo' ? 'md:flex-[0.85]' : ''}
            ${hover === 'cyber' ? 'md:flex-[1.15]' : ''}`}
        >
          <div className="absolute inset-0 grid-bg bg-terminal-bg" />
          <div className="absolute inset-0 scanlines opacity-60" />
          <div
            className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
            style={{ background: 'radial-gradient(circle at 30% 60%, rgba(63,243,165,0.18), transparent 60%)' }}
          />
          <img
            src="/images/profile-cybersecurity.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-luminosity transition-opacity duration-500 group-hover:opacity-25"
          />
          <div className="relative z-10 w-full p-8 pb-12 md:p-12 md:pb-16">
            <Terminal className="mb-4 text-terminal-green glow-green" size={34} />
            <p className="font-mono text-xs text-terminal-green/80">$ ./whoami --role</p>
            <h2 className="mt-2 font-mono text-2xl font-bold text-white md:text-3xl">
              資訊安全顧問
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-terminal-dim">
              {yearsOfExperience()}+ 年滲透測試與資安顧問經驗，專精應用安全、事件應變，現領導資安專業團隊。
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-terminal-green transition-transform group-hover:translate-x-1">
              進入終端機 <ArrowRight size={16} />
            </span>
          </div>
        </Link>

        {/* 分隔線 */}
        <div className="hidden w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:block" />

        {/* 攝影世界 */}
        <Link
          to="/photography"
          onMouseEnter={() => setHover('photo')}
          onMouseLeave={() => setHover(null)}
          className={`group relative flex flex-1 items-end overflow-hidden transition-all duration-500 ease-out
            ${hover === 'cyber' ? 'md:flex-[0.85]' : ''}
            ${hover === 'photo' ? 'md:flex-[1.15]' : ''}`}
        >
          <div className="absolute inset-0 bg-gallery-bg warm-vignette" />
          <img
            src="/images/profile-photography.jpg"
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-30 transition-all duration-700 group-hover:scale-105 group-hover:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gallery-bg via-gallery-bg/50 to-transparent" />
          <div className="relative z-10 w-full p-8 pb-12 md:p-12 md:pb-16">
            <Camera className="mb-4 text-gallery-gold" size={34} />
            <p className="font-mono text-xs tracking-[0.3em] text-gallery-gold/80">./through-the-lens</p>
            <h2 className="mt-2 font-mono text-2xl font-bold text-gallery-cream md:text-3xl">
              攝影師
            </h2>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-gallery-dim">
              以獨特視角捕捉人像、風景與活動現場的每個光影瞬間。
            </p>
            <span className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-gallery-gold transition-transform group-hover:translate-x-1">
              走進藝廊 <ArrowRight size={16} />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

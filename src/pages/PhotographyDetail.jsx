import { Image, ExternalLink, Youtube, Instagram, Aperture, Camera } from 'lucide-react';

export default function PhotographyDetail() {
  const experience = [
    { event: "HITCON CMT 2024", role: "攝影組" },
    { event: "HITCON CTF 2024", role: "攝影組" }
  ];

  const channels = [
    {
      href: "https://youtube.com/@elmoisfree?si=LVwtJRf4amkyAUUs",
      icon: Youtube,
      iconColor: "text-red-500",
      title: "YouTube 頻道",
      desc: "觀看我的影片創作",
    },
    {
      href: "https://www.instagram.com/elmootw/",
      icon: Instagram,
      iconColor: "text-pink-400",
      title: "Instagram",
      desc: "追蹤我的日常攝影",
    },
  ];

  return (
    <div className="relative min-h-screen bg-gallery-bg text-gallery-cream">
      {/* 背景暖色暈染 */}
      <div className="pointer-events-none fixed inset-0 warm-vignette" />
      <img
        src="/images/profile-photography.jpg"
        alt=""
        className="pointer-events-none fixed inset-0 h-full w-full object-cover opacity-[0.06]"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 py-16 md:py-24">
        {/* Hero */}
        <header className="mb-20 animate-fadeUp">
          <div className="mb-6 flex items-center gap-3 text-gallery-gold">
            <span className="h-px w-12 bg-gallery-gold/50" />
            <Aperture size={18} className="animate-floatSlow" />
            <span className="font-mono text-xs tracking-[0.3em]">./portfolio</span>
          </div>
          <h1 className="font-mono text-5xl font-semibold leading-tight text-gallery-cream md:text-7xl">
            捕捉光的
            <span className="text-gallery-gold"> 瞬間</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-gallery-dim md:text-lg">
            在資安工作之外，我用鏡頭記錄世界 —— 人像的情緒、風景的呼吸、活動現場稍縱即逝的光影。
          </p>
        </header>

        {/* 主要作品集 CTA */}
        <section className="mb-20">
          <a
            href="https://filedn.com/loSu3MwhU1Vpp461I9eR4vz/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-2xl border border-gallery-line"
          >
            <img
              src="/images/profile-photography.jpg"
              alt="作品集"
              className="h-72 w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gallery-bg via-gallery-bg/40 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
              <p className="font-mono text-xs tracking-[0.3em] text-gallery-gold">the full collection</p>
              <h2 className="mt-1 font-mono text-2xl font-semibold text-gallery-cream md:text-4xl">
                完整攝影作品集
              </h2>
              <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-gallery-gold/60 bg-gallery-bg/40 px-5 py-2.5 text-sm font-medium text-gallery-cream backdrop-blur-sm transition-all group-hover:border-gallery-gold group-hover:bg-gallery-gold group-hover:text-gallery-bg">
                進入作品集 <ExternalLink size={16} />
              </span>
            </div>
          </a>
        </section>

        {/* 社群頻道 */}
        <section className="mb-20">
          <div className="mb-8 flex items-center gap-3">
            <Image className="text-gallery-gold" size={20} />
            <h2 className="font-mono text-2xl font-semibold text-gallery-cream">影像頻道</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {channels.map((c) => (
              <a
                key={c.title}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-5 rounded-xl border border-gallery-line bg-gallery-panel/60 p-6 backdrop-blur-sm transition-all hover:border-gallery-gold/50 hover:bg-gallery-panel"
              >
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-gallery-bg/60">
                  <c.icon size={28} className={c.iconColor} />
                </div>
                <div className="flex-1">
                  <h3 className="font-mono text-xl font-semibold text-gallery-cream">{c.title}</h3>
                  <p className="text-sm text-gallery-dim">{c.desc}</p>
                </div>
                <ExternalLink size={18} className="text-gallery-dim transition-all group-hover:translate-x-1 group-hover:text-gallery-gold" />
              </a>
            ))}
          </div>
        </section>

        {/* 攝影經驗 */}
        <section>
          <div className="mb-8 flex items-center gap-3">
            <Camera className="text-gallery-gold" size={20} />
            <h2 className="font-mono text-2xl font-semibold text-gallery-cream">現場經驗</h2>
          </div>
          <div className="space-y-4">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className="flex items-center gap-5 rounded-xl border border-gallery-line bg-gallery-panel/40 p-6 transition-all hover:border-gallery-gold/40"
              >
                <span className="font-mono text-3xl text-gallery-gold/50">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-mono text-xl font-semibold text-gallery-cream">{exp.event}</h3>
                  <p className="text-sm text-gallery-dim">{exp.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-gallery-line pt-8 text-center font-mono text-xs text-gallery-dim">
          // captured with light &amp; patience
        </footer>
      </div>
    </div>
  );
}

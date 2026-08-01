import { Briefcase, Award, Mic, BookOpen, ChevronDown, ExternalLink, Terminal } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function CyberSecurityDetail() {
  const [expandedJob, setExpandedJob] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  // 計算時長（支持開始日期或完整日期範圍）
  const calculateDuration = (periodStr) => {
    const parts = periodStr.split(' - ');
    const startDateStr = parts[0];
    const endDateStr = parts[1];

    const [startYear, startMonth] = startDateStr.split('/').map(Number);

    let endYear, endMonth;
    if (endDateStr === '至今') {
      const now = new Date();
      endYear = now.getFullYear();
      endMonth = now.getMonth() + 1;
    } else {
      [endYear, endMonth] = endDateStr.split('/').map(Number);
    }

    let years = endYear - startYear;
    let months = endMonth - startMonth;

    if (months < 0) {
      years--;
      months += 12;
    }

    if (years > 0 && months > 0) {
      return `${years} 年 ${months} 個月`;
    } else if (years > 0) {
      return `${years} 年`;
    } else {
      return `${months} 個月`;
    }
  };

  const workExperience = [
    {
      company: "雲力橘子數位股份有限公司",
      position: "資安服務部 - 經理",
      period: "2024/04 - 至今",
      description: [
        "領導 8 人資安專業團隊，統籌管理年度預算及資源配置",
        "制定部門策略規劃與 OKR，建立標準化服務流程及審核機制",
        "監督資安專案執行，確保服務品質",
        "主導原始碼安全檢測服務，實施安全程式碼弱點誤判審核標準，擔任第三方資安專家角色判讀弱點情形",
        "維護並優化 Google Apps Script 自動化報告生成系統",
        "代表公司參與產業會議與論壇，提升品牌知名度與市場競爭力"
      ]
    },
    {
      company: "果核數位股份有限公司",
      position: "資訊安全部 - 副理",
      period: "2022/05 - 2024/03",
      description: [
        "負責資安服務專案規劃、資源分配與成本評估",
        "主導跨產業網站 API、應用程式及行動 APP 滲透測試，服務金融、遊戲、電商及支付領域客戶",
        "使用 Google Apps Script 開發自動化報告生成系統",
        "執行資安事件緊急應變與鑑識調查",
        "領導資安服務售前流程，協助客戶制定測試範圍與方法論",
        "提供專業漏洞分析與客製化修補方案建議",
        "擔任客戶與技術團隊間的溝通橋樑"
      ]
    },
    {
      company: "詮睿科技股份有限公司",
      position: "資安顧問服務處 - 資安顧問",
      period: "2019/02 - 2022/04",
      description: [
        "主導網站 API、應用程式及行動 APP 滲透測試專案，涵蓋金融保險、遊戲、電商、電子票券及支付產業",
        "提供資安事件快速應變與調查服務",
        "參與專案提案、需求確認及與客戶共同制定測試範圍與方法論",
        "分析滲透測試結果並提出最適合的漏洞修補方案",
        "進行資安服務售前會議",
        "與客戶承包商和開發團隊進行技術溝通",
        "規劃並執行實體與線上資安意識訓練課程"
      ]
    },
    {
      company: "果核數位股份有限公司",
      position: "資訊安全部 - 資安工程師",
      period: "2017/11 - 2019/02",
      description: [
        "執行網站 API、應用程式及行動 APP 滲透測試專案，涵蓋銀行、遊戲、電商、電子票券及支付行業",
        "使用 Django 框架開發自動化報告生成系統",
        "進行資安威脅研究並撰寫分析報告",
        "運用 Micro Focus Fortify 執行靜態應用安全測試，分析漏洞並提供客戶審核報告",
        "規劃執行釣魚演練與資安意識培訓專案"
      ]
    }
  ];

  const education = [
    { school: "國立臺灣科技大學", degree: "資訊管理所 - 碩士", period: "2015 - 2017" },
    { school: "國立新竹教育大學", degree: "應用科學系 - 學士", period: "2009 - 2013" }
  ];

  const certifications = [
    { name: "CPENT", image: "/images/certifications/CPENT.png", expiry: "2027/03/17" },
    { name: "LPT", image: "/images/certifications/LPT.png", expiry: "2027/03/17" },
    { name: "ISO 27001:2022 LA", image: "/images/certifications/ISO27001.png", expiry: "無期限" },
    { name: "CHFI", image: "/images/certifications/CHFI.png", expiry: "2027/10/01" },
    { name: "ECSA", image: "/images/certifications/ECSA.png", expiry: "2026/01/01" },
    { name: "CEH", image: "/images/certifications/CEH.png", expiry: "2027/06/30" }
  ];

  const speeches = [
    { title: "我的 CVE 不是你的 CVE", event: "DEVCORE - /dev/meet 資安小聚", date: "2026/04/22", link: null },
    { title: "How to Get Away with Hacking", event: "北科大資安社", date: "2025/05/21", link: null },
    { title: "數位轉型下的資安挑戰：企業需求與人才機會", event: "CYBERSEC 2025 臺灣資安大會", date: "2025/04/17", link: "https://cybersec.ithome.com.tw/2025/session-page/3507" },
    { title: "從滲透測試角度看身份驗證的重要性", event: "okta | Akamai | 果核 | 奧登 - 企業資安升級：從零信任架構到 API 防護", date: "2024-10-23", link: null },
    { title: "資安服務：從市場需求到人才招募", event: "第三十四屆全國資訊安全會議 CISC 2024", date: "2024-08-30", link: null },
    { title: "資安服務：從市場需求到人才招募", event: "2024 HITCON X Yourator 資安職涯論壇", date: "2024-08-17", link: null },
    { title: "簡單易行的攻擊方法：資安檢測人員的工作日常", event: "北科大資安學程", date: "2024-05-23", link: null },
    { title: "網站安全常見風險與風險管理", event: "果核數位 Hacker Talk 論壇", date: "2023-12-09", link: "https://www.ithome.com.tw/pr/160545" },
    { title: "以資安治理角度理解 OWASP Top 10 2021", event: "CYBERSEC 2022 臺灣資安大會", date: "2022-09-20", link: "https://cybersec.ithome.com.tw/2022/session-page/833" },
    { title: "密碼學沒有入門", event: "NISRA", date: "2018-11-20", link: null },
    { title: "密碼學深入淺出", event: "HITCON GIRLS 資安萌芽推廣", date: "2017-07-08", link: "https://hitcon.kktix.cc/events/hitcongirls2017summer" },
    { title: "惡意程式分析與密碼學：你不可不知的資訊安全", event: "HITCON GIRLS 成功大學講座", date: "2016-04-28", link: "https://www.slideshare.net/slideshow/hitcon-girls-61507736/61507736" }
  ];

  const sections = [
    { id: 'work-experience', label: 'work', icon: Briefcase },
    { id: 'speeches', label: 'talks', icon: Mic },
    { id: 'certifications', label: 'certs', icon: Award },
    { id: 'education', label: 'edu', icon: BookOpen }
  ];

  useEffect(() => {
    const handleScroll = () => {
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 220 && rect.bottom > 220) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const SectionTitle = ({ icon: Icon, path, count }) => (
    <div className="mb-8 flex items-center gap-3 border-b border-terminal-line pb-3">
      <Icon className="text-terminal-green" size={22} />
      <h2 className="font-mono text-lg font-bold text-terminal-cyan md:text-xl">
        <span className="text-terminal-dim">~/</span>
        {path}
      </h2>
      {count != null && (
        <span className="ml-auto font-mono text-xs text-terminal-dim">[{count}]</span>
      )}
    </div>
  );

  return (
    <div className="relative min-h-screen bg-terminal-bg text-white">
      {/* 背景質感 */}
      <div className="pointer-events-none fixed inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none fixed inset-0 scanlines opacity-50" />
      <div
        className="pointer-events-none fixed left-1/2 top-0 h-[420px] w-[820px] -translate-x-1/2 opacity-40"
        style={{ background: 'radial-gradient(ellipse, rgba(63,243,165,0.18), transparent 70%)' }}
      />

      {/* 側邊區段導覽 */}
      <nav className="fixed left-6 top-1/2 z-30 hidden -translate-y-1/2 flex-col gap-3 xl:flex">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className={`flex items-center gap-2 font-mono text-xs transition-colors ${
              activeSection === s.id ? 'text-terminal-green glow-green' : 'text-terminal-dim hover:text-terminal-cyan'
            }`}
          >
            <span className={`h-px transition-all ${activeSection === s.id ? 'w-6 bg-terminal-green' : 'w-3 bg-terminal-dim'}`} />
            {s.label}
          </a>
        ))}
      </nav>

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-14 md:py-20">
        {/* Hero */}
        <header className="mb-16 animate-fadeUp">
          <div className="inline-flex items-center gap-2 rounded-md border border-terminal-line bg-terminal-panel px-3 py-1 font-mono text-xs text-terminal-green">
            <Terminal size={13} /> secure shell established
          </div>
          <h1 className="mt-5 font-mono text-3xl font-bold text-white md:text-5xl">
            <span className="text-terminal-green glow-green">$</span> whoami
          </h1>
          <p className="mt-4 max-w-2xl font-mono text-sm leading-relaxed text-terminal-dim md:text-base">
            <span className="text-terminal-cyan">Elmo HSIAO</span> — 資訊安全顧問。8+ 年滲透測試與資安顧問經驗，
            專精應用安全、資安事件應變與原始碼檢測，現領導資安專業團隊。
          </p>
          <div className="mt-6 flex flex-wrap gap-2 font-mono text-xs">
            {['Penetration Testing', 'Incident Response', 'AppSec', 'SAST', 'Team Lead'].map((t) => (
              <span key={t} className="rounded border border-terminal-line bg-terminal-panel px-2.5 py-1 text-terminal-cyan">
                {t}
              </span>
            ))}
          </div>
        </header>

        {/* 工作經歷 */}
        <section className="mb-16 scroll-mt-24" id="work-experience">
          <SectionTitle icon={Briefcase} path="work-experience" count={workExperience.length} />
          <div className="space-y-4">
            {workExperience.map((job, idx) => (
              <div
                key={idx}
                className={`overflow-hidden rounded-lg border bg-terminal-panel transition-all ${
                  expandedJob === idx
                    ? 'border-terminal-green/50 shadow-[0_0_24px_rgba(63,243,165,0.12)]'
                    : 'border-terminal-line hover:border-terminal-cyan/40'
                }`}
              >
                <button
                  onClick={() => setExpandedJob(expandedJob === idx ? null : idx)}
                  className="flex w-full items-start justify-between gap-4 p-5 text-left md:p-6"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 font-mono text-xs text-terminal-green">
                      <span className="text-terminal-dim">{idx === 0 ? '◉' : '○'}</span>
                      {idx === 0 ? 'current' : `role_${workExperience.length - idx}`}
                    </div>
                    <h3 className="mt-1.5 text-base font-bold text-white md:text-lg">{job.position}</h3>
                    <p className="font-mono text-sm text-terminal-cyan">{job.company}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-mono text-xs text-white/80">{job.period}</p>
                      <p className="font-mono text-[11px] text-terminal-dim">{calculateDuration(job.period)}</p>
                    </div>
                    <ChevronDown
                      size={18}
                      className={`flex-shrink-0 text-terminal-green transition-transform ${expandedJob === idx ? 'rotate-180' : ''}`}
                    />
                  </div>
                </button>
                {expandedJob === idx && (
                  <div className="animate-fadeUp border-t border-terminal-line px-5 pb-6 pt-4 md:px-6">
                    <ul className="space-y-2.5">
                      {job.description.map((desc, di) => (
                        <li key={di} className="flex gap-3 text-sm leading-relaxed text-white/75">
                          <span className="mt-0.5 font-mono text-terminal-green">&gt;</span>
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 演講經驗 */}
        <section className="mb-16 scroll-mt-24" id="speeches">
          <SectionTitle icon={Mic} path="talks" count={speeches.length} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {speeches.map((speech, idx) => (
              <div
                key={idx}
                className="group flex flex-col rounded-lg border border-terminal-line bg-terminal-panel p-5 transition-all hover:border-terminal-green/50 hover:shadow-[0_0_20px_rgba(63,243,165,0.10)]"
              >
                <div className="mb-2 font-mono text-xs text-terminal-dim">{speech.date}</div>
                <h3 className="font-bold leading-snug text-white">{speech.title}</h3>
                <p className="mt-1.5 font-mono text-xs leading-relaxed text-terminal-cyan/80">{speech.event}</p>
                {speech.link && (
                  <a
                    href={speech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 font-mono text-xs text-terminal-green transition-transform group-hover:translate-x-1"
                  >
                    cat slides <ExternalLink size={12} />
                  </a>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 專業證照 */}
        <section className="mb-16 scroll-mt-24" id="certifications">
          <SectionTitle icon={Award} path="certifications" count={certifications.length} />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="group overflow-hidden rounded-lg border border-terminal-line bg-terminal-panel transition-all hover:border-terminal-cyan/50 hover:shadow-[0_0_20px_rgba(56,225,255,0.12)]"
              >
                <div className="relative h-40 overflow-hidden bg-black/30">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="h-full w-full object-contain p-3 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="border-t border-terminal-line p-4">
                  <p className="text-center font-mono text-sm font-bold text-terminal-cyan">{cert.name}</p>
                  <p className="mt-1 text-center font-mono text-[11px] text-terminal-dim">exp: {cert.expiry}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 學歷 */}
        <section className="scroll-mt-24" id="education">
          <SectionTitle icon={BookOpen} path="education" count={education.length} />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {education.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-terminal-line bg-terminal-panel p-6 transition-all hover:border-terminal-green/50"
              >
                <h3 className="text-lg font-bold text-white">{edu.school}</h3>
                <p className="mt-1 font-mono text-sm text-terminal-cyan">{edu.degree}</p>
                <p className="mt-2 font-mono text-xs text-terminal-dim">{edu.period}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mt-16 border-t border-terminal-line pt-6 font-mono text-xs text-terminal-dim">
          <span className="text-terminal-green">$</span> exit <span className="animate-blink">_</span>
        </footer>
      </div>
    </div>
  );
}

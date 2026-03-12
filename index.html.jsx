import { useState, useEffect, useRef } from "react";

const courses = [
  { id: 1, title: "Facebook Ads Mastery", cat: "Digital Marketing", instructor: "Rahul Sharma", lessons: 24, duration: "6h 30m", level: "Intermediate", rating: 4.9, reviews: 1204, color: "#1877F2", emoji: "📘", progress: 65, trending: true },
  { id: 2, title: "Beginner Lead Generation", cat: "Lead Generation", instructor: "Priya Verma", lessons: 18, duration: "4h 15m", level: "Beginner", rating: 4.8, reviews: 892, color: "#FF6B35", emoji: "🎯", progress: 30, trending: true },
  { id: 3, title: "AI Avatar Creation", cat: "AI & Automation", instructor: "Arjun Mehta", lessons: 15, duration: "3h 45m", level: "Beginner", rating: 4.9, reviews: 2341, color: "#7C3AED", emoji: "🤖", progress: 0, trending: true },
  { id: 4, title: "YouTube Automation", cat: "Online Business", instructor: "Sneha Patel", lessons: 32, duration: "9h 20m", level: "Advanced", rating: 4.7, reviews: 1567, color: "#FF0000", emoji: "▶️", progress: 12, trending: false },
  { id: 5, title: "Affiliate Marketing Pro", cat: "Online Business", instructor: "Vikram Das", lessons: 28, duration: "7h 10m", level: "Intermediate", rating: 4.8, reviews: 2103, color: "#10B981", emoji: "💰", progress: 80, trending: true },
  { id: 6, title: "Instagram Growth", cat: "Digital Marketing", instructor: "Ananya Singh", lessons: 20, duration: "5h 00m", level: "Beginner", rating: 4.6, reviews: 987, color: "#E1306C", emoji: "📸", progress: 0, trending: false },
  { id: 7, title: "AI Content Tools", cat: "AI & Automation", instructor: "Karan Joshi", lessons: 22, duration: "5h 30m", level: "Intermediate", rating: 4.9, reviews: 3102, color: "#F59E0B", emoji: "✨", progress: 45, trending: true },
  { id: 8, title: "Email Marketing", cat: "Digital Marketing", instructor: "Meera Nair", lessons: 16, duration: "4h 00m", level: "Beginner", rating: 4.7, reviews: 743, color: "#06B6D4", emoji: "📧", progress: 0, trending: false },
  { id: 9, title: "Advanced Lead Gen", cat: "Lead Generation", instructor: "Rohit Kumar", lessons: 35, duration: "10h 45m", level: "Advanced", rating: 4.9, reviews: 1890, color: "#EF4444", emoji: "🚀", progress: 0, trending: true },
  { id: 10, title: "Canva Design Mastery", cat: "Online Business", instructor: "Divya Roy", lessons: 19, duration: "4h 30m", level: "Beginner", rating: 4.8, reviews: 1456, color: "#8B5CF6", emoji: "🎨", progress: 90, trending: false },
];

const incomeStreams = [
  { id: 1, title: "Digital Products", icon: "📦", desc: "Create & sell ebooks, templates, courses", earning: "₹50K–2L/mo", color: "#F59E0B" },
  { id: 2, title: "Dropshipping", icon: "🛒", desc: "Sell products without inventory", earning: "₹30K–1.5L/mo", color: "#10B981" },
  { id: 3, title: "Website Builder", icon: "🌐", desc: "Build websites for local businesses", earning: "₹40K–1L/mo", color: "#3B82F6" },
  { id: 4, title: "Leadzinkart", icon: "🛍️", desc: "Full ecommerce store system", earning: "₹60K–3L/mo", color: "#EC4899" },
  { id: 5, title: "WhatsApp Bots", icon: "💬", desc: "Automate businesses with chatbots", earning: "₹25K–80K/mo", color: "#25D366" },
  { id: 6, title: "Freelancing", icon: "💼", desc: "Offer skills on global platforms", earning: "₹35K–1.2L/mo", color: "#8B5CF6" },
  { id: 7, title: "Travel Business", icon: "✈️", desc: "Build a travel agency with Tripzin", earning: "₹45K–2L/mo", color: "#F97316" },
];

const achievements = [
  { icon: "🏆", title: "First Login", desc: "Welcome!", earned: true },
  { icon: "🎯", title: "First Lesson", desc: "Started learning", earned: true },
  { icon: "🔥", title: "7-Day Streak", desc: "Consistent learner", earned: true },
  { icon: "⚡", title: "Speed Learner", desc: "5 lessons in a day", earned: false },
  { icon: "💎", title: "Diamond Coder", desc: "Complete 10 courses", earned: false },
  { icon: "🌟", title: "Top Affiliate", desc: "5 successful referrals", earned: false },
];

const leaderboard = [
  { rank: 1, name: "Aryan K.", xp: 12450, avatar: "AK", badge: "🥇" },
  { rank: 2, name: "Priya M.", xp: 11200, avatar: "PM", badge: "🥈" },
  { rank: 3, name: "Rohit D.", xp: 10800, avatar: "RD", badge: "🥉" },
  { rank: 4, name: "Sneha T.", xp: 9500, avatar: "ST", badge: "4️⃣" },
  { rank: 5, name: "You", xp: 7200, avatar: "YO", badge: "5️⃣", isUser: true },
];

const membershipTiers = [
  { name: "Classic", price: "₹999", period: "/mo", streams: 2, color: "#6B7280", features: ["Basic courses", "2 income streams", "Community access", "Mobile app"] },
  { name: "Ultimate", price: "₹2,499", period: "/mo", streams: 4, color: "#3B82F6", features: ["Advanced training", "4 income streams", "Live classes", "Priority support"], popular: false },
  { name: "Premium", price: "₹4,999", period: "/mo", streams: 5, color: "#8B5CF6", features: ["All courses", "5 income streams", "Mentorship calls", "Affiliate system"], popular: true },
  { name: "Supreme", price: "₹9,999", period: "/mo", streams: 7, color: "#F59E0B", features: ["Full ecosystem", "7 income streams", "1:1 mentorship", "VIP community", "Revenue sharing"] },
];

const navItems = [
  { id: "home", icon: "⊞", label: "Home" },
  { id: "courses", icon: "📚", label: "Learn" },
  { id: "business", icon: "💰", label: "Earn" },
  { id: "affiliate", icon: "🔗", label: "Refer" },
  { id: "profile", icon: "👤", label: "Profile" },
];

export default function LeadzinAcademy() {
  const [activeTab, setActiveTab] = useState("home");
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [darkMode, setDarkMode] = useState(true);
  const [streakDay, setStreakDay] = useState(7);
  const [xp, setXp] = useState(7200);
  const [affiliateLink] = useState("leadzin.in/ref/USR7842");
  const [copiedLink, setCopiedLink] = useState(false);
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showNotif, setShowNotif] = useState(true);
  const scrollRef = useRef(null);

  const bg = darkMode ? "#0A0A0F" : "#F8F8FC";
  const card = darkMode ? "#14141E" : "#FFFFFF";
  const card2 = darkMode ? "#1C1C2E" : "#F0F0F8";
  const text = darkMode ? "#FFFFFF" : "#0A0A0F";
  const sub = darkMode ? "#9898B8" : "#5555AA";
  const border = darkMode ? "#2A2A40" : "#E0E0F0";
  const accent = "#FF6B35";
  const purple = "#7C3AED";

  const categories = ["All", "Digital Marketing", "Lead Generation", "AI & Automation", "Online Business"];
  const filtered = activeCategory === "All" ? courses : courses.filter(c => c.cat === activeCategory);

  const copyLink = () => {
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div style={{ background: bg, minHeight: "100vh", maxWidth: 430, margin: "0 auto", fontFamily: "'Outfit', 'Segoe UI', sans-serif", color: text, position: "relative", overflow: "hidden" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        ::-webkit-scrollbar { display: none; }
        .scroll-x { overflow-x: auto; display: flex; gap: 12px; padding-bottom: 4px; scrollbar-width: none; }
        .course-card:hover { transform: scale(1.02); }
        .course-card { transition: transform 0.2s; cursor: pointer; }
        .tab-btn { transition: all 0.2s; }
        .tab-btn:hover { opacity: 0.8; }
        @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.6; } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .animate-up { animation: slideUp 0.4s ease; }
        .pulse { animation: pulse 2s infinite; }
        .glow { box-shadow: 0 0 20px rgba(255,107,53,0.4); }
        .glow-purple { box-shadow: 0 0 20px rgba(124,58,237,0.4); }
        .gradient-text { background: linear-gradient(135deg, #FF6B35, #FF3584, #7C3AED); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .gold-text { background: linear-gradient(135deg, #F59E0B, #FCD34D); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
      `}</style>

      {/* NOTIFICATION BANNER */}
      {showNotif && (
        <div style={{ background: "linear-gradient(90deg, #FF6B35, #FF3584)", padding: "10px 16px", display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 12, fontWeight: 600 }}>
          <span>🔥 LIVE CLASS Today 7PM — AI Marketing Workshop</span>
          <button onClick={() => setShowNotif(false)} style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", fontSize: 16 }}>×</button>
        </div>
      )}

      {/* HEADER */}
      <div style={{ padding: "16px 20px 8px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 32, height: 32, borderRadius: 10, background: "linear-gradient(135deg, #FF6B35, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>⚡</div>
            <span style={{ fontSize: 18, fontWeight: 900, letterSpacing: -0.5 }} className="gradient-text">Leadzin</span>
            <span style={{ fontSize: 18, fontWeight: 300, color: text }}>Academy</span>
          </div>
          <div style={{ fontSize: 11, color: sub, marginTop: 2 }}>Learn • Build • Earn</div>
        </div>
        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <div style={{ background: card2, borderRadius: 10, padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, border: `1px solid ${border}` }}>
            <span style={{ fontSize: 14 }}>🔥</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: accent }}>{streakDay}</span>
          </div>
          <div style={{ background: card2, borderRadius: 10, padding: "6px 12px", display: "flex", alignItems: "center", gap: 6, border: `1px solid ${border}` }}>
            <span style={{ fontSize: 14 }}>⚡</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>{xp.toLocaleString()}</span>
          </div>
          <button onClick={() => setDarkMode(!darkMode)} style={{ background: card2, border: `1px solid ${border}`, borderRadius: 10, padding: "6px 10px", cursor: "pointer", fontSize: 16 }}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={{ height: "calc(100vh - 130px)", overflowY: "auto", paddingBottom: 20 }} className="animate-up">

        {/* ========== HOME TAB ========== */}
        {activeTab === "home" && (
          <div>
            {/* Hero Banner */}
            <div style={{ margin: "12px 16px", borderRadius: 20, background: "linear-gradient(135deg, #0D0D1A 0%, #1A0D2E 50%, #0D1A1A 100%)", padding: "24px 20px", position: "relative", overflow: "hidden", border: `1px solid ${border}` }}>
              <div style={{ position: "absolute", top: -30, right: -30, width: 120, height: 120, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.3) 0%, transparent 70%)" }}></div>
              <div style={{ position: "absolute", bottom: -20, left: 40, width: 80, height: 80, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)" }}></div>
              <div style={{ fontSize: 11, color: accent, fontWeight: 700, letterSpacing: 2, marginBottom: 8 }}>YOUR JOURNEY</div>
              <div style={{ fontSize: 22, fontWeight: 800, lineHeight: 1.2, marginBottom: 4 }}>
                Welcome back,<br /><span className="gradient-text">Aryan! 👋</span>
              </div>
              <div style={{ fontSize: 13, color: sub, marginBottom: 16 }}>You're 65% through Facebook Ads. Keep going!</div>
              <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 10, height: 8, marginBottom: 8, overflow: "hidden" }}>
                <div style={{ width: "65%", height: "100%", background: "linear-gradient(90deg, #FF6B35, #FF3584)", borderRadius: 10 }}></div>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: 12, color: sub }}>14/24 lessons complete</span>
                <button onClick={() => { setSelectedCourse(courses[0]); setActiveTab("courses"); }} style={{ background: "linear-gradient(135deg, #FF6B35, #FF3584)", color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Continue ▶</button>
              </div>
            </div>

            {/* Stats Row */}
            <div style={{ display: "flex", gap: 10, margin: "0 16px 16px", overflowX: "auto" }} className="scroll-x">
              {[
                { label: "Courses Enrolled", val: "6", icon: "📚", c: "#3B82F6" },
                { label: "Hours Learned", val: "42h", icon: "⏱️", c: "#10B981" },
                { label: "Certificates", val: "2", icon: "🏅", c: "#F59E0B" },
                { label: "Referral Earn", val: "₹4,200", icon: "💸", c: "#FF6B35" },
              ].map((s, i) => (
                <div key={i} style={{ minWidth: 110, background: card, borderRadius: 14, padding: "14px 12px", border: `1px solid ${border}`, flexShrink: 0 }}>
                  <div style={{ fontSize: 20, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 18, fontWeight: 800, color: s.c }}>{s.val}</div>
                  <div style={{ fontSize: 10, color: sub, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Continue Watching */}
            <Section title="Continue Watching" sub="Pick up where you left off" accent={accent}>
              <div className="scroll-x">
                {courses.filter(c => c.progress > 0).map(c => (
                  <CourseCard key={c.id} course={c} onSelect={() => { setSelectedCourse(c); setActiveTab("courses"); }} card={card} card2={card2} text={text} sub={sub} border={border} accent={accent} showProgress />
                ))}
              </div>
            </Section>

            {/* Trending Courses */}
            <Section title="🔥 Trending Now" sub="Most popular this week" accent={accent}>
              <div className="scroll-x">
                {courses.filter(c => c.trending).map(c => (
                  <CourseCard key={c.id} course={c} onSelect={() => { setSelectedCourse(c); setActiveTab("courses"); }} card={card} card2={card2} text={text} sub={sub} border={border} accent={accent} />
                ))}
              </div>
            </Section>

            {/* Income Streams Teaser */}
            <Section title="💰 7 Income Streams" sub="Start earning today" accent={accent}>
              <div className="scroll-x">
                {incomeStreams.slice(0, 5).map(s => (
                  <div key={s.id} onClick={() => setActiveTab("business")} style={{ minWidth: 130, background: card, borderRadius: 16, padding: "16px 12px", border: `1px solid ${border}`, cursor: "pointer", flexShrink: 0 }}>
                    <div style={{ fontSize: 28, marginBottom: 8 }}>{s.icon}</div>
                    <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 4 }}>{s.title}</div>
                    <div style={{ fontSize: 11, color: s.color, fontWeight: 600 }}>{s.earning}</div>
                  </div>
                ))}
              </div>
            </Section>

            {/* Live Event Banner */}
            <div style={{ margin: "0 16px 16px", borderRadius: 16, background: "linear-gradient(135deg, #1A0040, #0A0020)", padding: "16px", border: "1px solid rgba(124,58,237,0.4)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, background: "linear-gradient(135deg, #FF3584, #7C3AED)", padding: "4px 12px", fontSize: 10, fontWeight: 700, borderBottomLeftRadius: 10 }} className="pulse">● LIVE</div>
              <div style={{ fontSize: 11, color: "#A78BFA", fontWeight: 600, marginBottom: 6 }}>TODAY 7:00 PM</div>
              <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 4 }}>AI Marketing Masterclass</div>
              <div style={{ fontSize: 12, color: sub, marginBottom: 12 }}>with Arjun Mehta • 243 registered</div>
              <button style={{ background: "linear-gradient(135deg, #7C3AED, #FF3584)", color: "#fff", border: "none", borderRadius: 10, padding: "10px 20px", fontSize: 13, fontWeight: 700, cursor: "pointer", width: "100%" }}>Register Now — FREE</button>
            </div>

            {/* Leaderboard Preview */}
            <Section title="🏆 Top Learners" sub="This month's leaders" accent={accent}>
              <div style={{ background: card, borderRadius: 16, border: `1px solid ${border}`, overflow: "hidden", margin: "0 16px" }}>
                {leaderboard.slice(0, 4).map((u, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: i < 3 ? `1px solid ${border}` : "none", background: u.isUser ? "rgba(255,107,53,0.08)" : "transparent" }}>
                    <div style={{ width: 28, fontSize: 16, textAlign: "center" }}>{u.badge}</div>
                    <div style={{ width: 36, height: 36, borderRadius: "50%", background: u.isUser ? "linear-gradient(135deg, #FF6B35, #FF3584)" : "linear-gradient(135deg, #7C3AED, #3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, margin: "0 12px" }}>{u.avatar}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{u.name}{u.isUser && <span style={{ color: accent, fontSize: 11, marginLeft: 6 }}>← You</span>}</div>
                    </div>
                    <div style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>⚡ {u.xp.toLocaleString()}</div>
                  </div>
                ))}
              </div>
            </Section>

          </div>
        )}

        {/* ========== COURSES TAB ========== */}
        {activeTab === "courses" && !selectedCourse && (
          <div className="animate-up">
            {/* Search */}
            <div style={{ margin: "12px 16px", position: "relative" }}>
              <input placeholder="Search courses, skills..." style={{ width: "100%", background: card2, border: `1px solid ${border}`, borderRadius: 14, padding: "13px 16px 13px 44px", color: text, fontSize: 14, outline: "none" }} />
              <span style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", fontSize: 18 }}>🔍</span>
            </div>

            {/* Category Filter */}
            <div className="scroll-x" style={{ padding: "0 16px 12px" }}>
              {categories.map(cat => (
                <button key={cat} onClick={() => setActiveCategory(cat)} className="tab-btn" style={{ flexShrink: 0, background: activeCategory === cat ? "linear-gradient(135deg, #FF6B35, #FF3584)" : card2, color: activeCategory === cat ? "#fff" : sub, border: `1px solid ${activeCategory === cat ? "transparent" : border}`, borderRadius: 20, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap" }}>
                  {cat}
                </button>
              ))}
            </div>

            {/* Course Grid */}
            <div style={{ padding: "0 16px" }}>
              <div style={{ fontSize: 13, color: sub, marginBottom: 12 }}>{filtered.length} courses available</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                {filtered.map(c => (
                  <div key={c.id} className="course-card" onClick={() => setSelectedCourse(c)} style={{ background: card, borderRadius: 16, overflow: "hidden", border: `1px solid ${border}` }}>
                    <div style={{ height: 90, background: `linear-gradient(135deg, ${c.color}33, ${c.color}11)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, position: "relative" }}>
                      {c.emoji}
                      {c.trending && <div style={{ position: "absolute", top: 8, right: 8, background: accent, borderRadius: 6, padding: "2px 6px", fontSize: 9, fontWeight: 700 }}>HOT</div>}
                      {c.progress > 0 && (
                        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3 }}>
                          <div style={{ width: `${c.progress}%`, height: "100%", background: "linear-gradient(90deg, #FF6B35, #FF3584)" }}></div>
                        </div>
                      )}
                    </div>
                    <div style={{ padding: "10px 10px 12px" }}>
                      <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 3, lineHeight: 1.3 }}>{c.title}</div>
                      <div style={{ fontSize: 10, color: sub, marginBottom: 6 }}>{c.instructor}</div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <span style={{ fontSize: 10, color: "#F59E0B", fontWeight: 600 }}>★ {c.rating}</span>
                        <span style={{ fontSize: 10, color: sub }}>{c.lessons} lessons</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ========== COURSE DETAIL ========== */}
        {activeTab === "courses" && selectedCourse && (
          <div className="animate-up">
            <div style={{ position: "relative" }}>
              {/* Video Player Area */}
              <div style={{ background: `linear-gradient(135deg, ${selectedCourse.color}40, #000)`, height: 220, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
                <div style={{ fontSize: 60 }}>{selectedCourse.emoji}</div>
                <button onClick={() => setVideoPlaying(!videoPlaying)} style={{ position: "absolute", bottom: 16, right: 16, background: "rgba(255,255,255,0.2)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "50%", width: 48, height: 48, fontSize: 18, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {videoPlaying ? "⏸" : "▶"}
                </button>
                <button onClick={() => setSelectedCourse(null)} style={{ position: "absolute", top: 12, left: 12, background: "rgba(0,0,0,0.5)", border: "none", borderRadius: "50%", width: 36, height: 36, fontSize: 16, cursor: "pointer", color: "#fff" }}>←</button>
                {/* Player Controls */}
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "8px 16px", background: "linear-gradient(transparent, rgba(0,0,0,0.8))", display: "flex", gap: 12, alignItems: "center" }}>
                  {["0.5x", "1x", "1.5x", "2x"].map(s => (
                    <span key={s} style={{ fontSize: 11, color: s === "1x" ? accent : "rgba(255,255,255,0.6)", fontWeight: s === "1x" ? 700 : 400, cursor: "pointer" }}>{s}</span>
                  ))}
                  <span style={{ fontSize: 18, marginLeft: "auto", cursor: "pointer" }}>📝</span>
                  <span style={{ fontSize: 18, cursor: "pointer" }}>🔖</span>
                  <span style={{ fontSize: 18, cursor: "pointer" }}>⬇</span>
                </div>
              </div>

              {/* Course Info */}
              <div style={{ padding: "16px 20px" }}>
                <div style={{ fontSize: 11, color: selectedCourse.color, fontWeight: 600, marginBottom: 4 }}>{selectedCourse.cat}</div>
                <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 4 }}>{selectedCourse.title}</div>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <span style={{ fontSize: 12, color: sub }}>by {selectedCourse.instructor}</span>
                  <span style={{ fontSize: 12, color: "#F59E0B", fontWeight: 600 }}>★ {selectedCourse.rating}</span>
                  <span style={{ fontSize: 12, color: sub }}>({selectedCourse.reviews.toLocaleString()})</span>
                </div>
                <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                  {[`${selectedCourse.lessons} lessons`, selectedCourse.duration, selectedCourse.level].map((t, i) => (
                    <span key={i} style={{ background: card2, borderRadius: 8, padding: "4px 10px", fontSize: 11, color: sub, border: `1px solid ${border}` }}>{t}</span>
                  ))}
                </div>

                {/* Progress */}
                {selectedCourse.progress > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                      <span style={{ fontSize: 12, fontWeight: 600 }}>Your Progress</span>
                      <span style={{ fontSize: 12, color: accent, fontWeight: 700 }}>{selectedCourse.progress}%</span>
                    </div>
                    <div style={{ background: card2, borderRadius: 8, height: 8, overflow: "hidden" }}>
                      <div style={{ width: `${selectedCourse.progress}%`, height: "100%", background: "linear-gradient(90deg, #FF6B35, #FF3584)", borderRadius: 8 }}></div>
                    </div>
                  </div>
                )}

                {/* Curriculum */}
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Course Curriculum</div>
                {[
                  { mod: "Module 1", title: "Introduction & Setup", lessons: 4, done: true },
                  { mod: "Module 2", title: "Core Concepts", lessons: 6, done: true },
                  { mod: "Module 3", title: "Advanced Strategies", lessons: 8, done: false },
                  { mod: "Module 4", title: "Live Case Studies", lessons: 6, done: false },
                ].map((m, i) => (
                  <div key={i} style={{ background: card2, borderRadius: 12, padding: "14px 16px", marginBottom: 8, border: `1px solid ${m.done ? "rgba(16,185,129,0.3)" : border}`, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div>
                      <div style={{ fontSize: 10, color: sub, marginBottom: 2 }}>{m.mod}</div>
                      <div style={{ fontSize: 13, fontWeight: 600 }}>{m.title}</div>
                      <div style={{ fontSize: 11, color: sub, marginTop: 2 }}>{m.lessons} lessons</div>
                    </div>
                    <div style={{ fontSize: 20 }}>{m.done ? "✅" : "🔒"}</div>
                  </div>
                ))}

                {/* Certificate */}
                <div style={{ background: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(245,158,11,0.05))", borderRadius: 14, padding: "16px", border: "1px solid rgba(245,158,11,0.3)", marginTop: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontSize: 28 }}>🏅</span>
                    <div>
                      <div style={{ fontSize: 13, fontWeight: 700 }} className="gold-text">Certificate Eligible</div>
                      <div style={{ fontSize: 11, color: sub }}>Complete all modules to earn your certificate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ========== BUSINESS / EARN TAB ========== */}
        {activeTab === "business" && (
          <div className="animate-up" style={{ padding: "12px 16px" }}>
            {/* Header */}
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 4 }}>Business <span className="gradient-text">Opportunities</span></div>
              <div style={{ fontSize: 13, color: sub }}>7 proven income streams to build your empire</div>
            </div>

            {/* Income Streams */}
            {incomeStreams.map((s, i) => (
              <div key={s.id} style={{ background: card, borderRadius: 18, padding: "18px", marginBottom: 12, border: `1px solid ${border}`, cursor: "pointer", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: 80, height: 80, borderRadius: "50%", background: `radial-gradient(circle, ${s.color}20, transparent 70%)`, transform: "translate(20px, -20px)" }}></div>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: `${s.color}20`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 26, flexShrink: 0 }}>{s.icon}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 800 }}>Stream {s.id}: {s.title}</div>
                        <div style={{ fontSize: 12, color: sub, marginTop: 2, marginBottom: 8 }}>{s.desc}</div>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ background: `${s.color}20`, borderRadius: 8, padding: "4px 10px" }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: s.color }}>{s.earning}</span>
                      </div>
                      <button style={{ background: s.color, color: "#fff", border: "none", borderRadius: 10, padding: "8px 14px", fontSize: 12, fontWeight: 700, cursor: "pointer" }}>Start Now →</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Membership Tiers */}
            <div style={{ fontSize: 18, fontWeight: 800, margin: "20px 0 14px" }}>Membership Plans</div>
            {membershipTiers.map((tier, i) => (
              <div key={i} style={{ background: tier.popular ? `linear-gradient(135deg, ${tier.color}22, ${tier.color}08)` : card, borderRadius: 18, padding: "18px", marginBottom: 12, border: `2px solid ${tier.popular ? tier.color : border}`, position: "relative" }}>
                {tier.popular && <div style={{ position: "absolute", top: -1, right: 16, background: tier.color, color: "#fff", fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: "0 0 8px 8px" }}>MOST POPULAR</div>}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                  <div>
                    <div style={{ fontSize: 16, fontWeight: 800 }}>{tier.name}</div>
                    <div style={{ fontSize: 11, color: sub }}>{tier.streams} income streams</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: tier.color }}>{tier.price}</div>
                    <div style={{ fontSize: 11, color: sub }}>{tier.period}</div>
                  </div>
                </div>
                {tier.features.map((f, j) => (
                  <div key={j} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    <span style={{ color: tier.color, fontSize: 14 }}>✓</span>
                    <span style={{ fontSize: 12, color: sub }}>{f}</span>
                  </div>
                ))}
                <button style={{ marginTop: 10, width: "100%", background: tier.popular ? tier.color : "transparent", color: tier.popular ? "#fff" : tier.color, border: `2px solid ${tier.color}`, borderRadius: 12, padding: "12px", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
                  Get {tier.name}
                </button>
              </div>
            ))}
          </div>
        )}

        {/* ========== AFFILIATE TAB ========== */}
        {activeTab === "affiliate" && (
          <div className="animate-up" style={{ padding: "12px 16px" }}>
            <div style={{ fontSize: 22, fontWeight: 900, marginBottom: 4 }}>Affiliate <span className="gradient-text">Dashboard</span></div>
            <div style={{ fontSize: 13, color: sub, marginBottom: 20 }}>Refer & earn up to 40% commission</div>

            {/* Earnings Overview */}
            <div style={{ background: "linear-gradient(135deg, #0D0D1A, #1A0D2E)", borderRadius: 20, padding: "20px", border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 12, color: sub, marginBottom: 4 }}>Total Earned</div>
              <div style={{ fontSize: 36, fontWeight: 900, marginBottom: 2 }} className="gradient-text">₹4,200</div>
              <div style={{ fontSize: 12, color: sub, marginBottom: 16 }}>Pending: <span style={{ color: "#F59E0B" }}>₹1,800</span></div>
              <button style={{ width: "100%", background: "linear-gradient(135deg, #FF6B35, #FF3584)", color: "#fff", border: "none", borderRadius: 12, padding: "12px", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Withdraw Earnings</button>
            </div>

            {/* Stats Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
              {[
                { label: "Total Referrals", val: "23", icon: "👥", c: "#3B82F6" },
                { label: "Conversions", val: "8", icon: "✅", c: "#10B981" },
                { label: "This Month", val: "₹1,800", icon: "📈", c: "#F59E0B" },
                { label: "Conversion Rate", val: "34%", icon: "🎯", c: accent },
              ].map((s, i) => (
                <div key={i} style={{ background: card, borderRadius: 14, padding: "16px", border: `1px solid ${border}` }}>
                  <div style={{ fontSize: 22, marginBottom: 6 }}>{s.icon}</div>
                  <div style={{ fontSize: 20, fontWeight: 800, color: s.c }}>{s.val}</div>
                  <div style={{ fontSize: 11, color: sub, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>

            {/* Referral Link */}
            <div style={{ background: card, borderRadius: 16, padding: "16px", border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 10 }}>Your Referral Link</div>
              <div style={{ background: card2, borderRadius: 10, padding: "12px 14px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10, border: `1px solid ${border}` }}>
                <span style={{ fontSize: 12, color: sub }}>{affiliateLink}</span>
                <button onClick={copyLink} style={{ background: copiedLink ? "#10B981" : accent, color: "#fff", border: "none", borderRadius: 8, padding: "6px 12px", fontSize: 11, fontWeight: 700, cursor: "pointer" }}>
                  {copiedLink ? "Copied!" : "Copy"}
                </button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {[
                  { label: "WhatsApp", icon: "💬", c: "#25D366" },
                  { label: "Instagram", icon: "📸", c: "#E1306C" },
                  { label: "Telegram", icon: "✈️", c: "#2AABEE" },
                  { label: "Copy Link", icon: "🔗", c: sub },
                ].map((btn, i) => (
                  <button key={i} style={{ background: card2, color: text, border: `1px solid ${border}`, borderRadius: 10, padding: "10px", fontSize: 12, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
                    <span>{btn.icon}</span> {btn.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Commission Tiers */}
            <div style={{ background: card, borderRadius: 16, padding: "16px", border: `1px solid ${border}`, marginBottom: 16 }}>
              <div style={{ fontSize: 13, fontWeight: 700, marginBottom: 12 }}>Commission Structure</div>
              {[
                { tier: "Classic", rate: "20%", color: "#6B7280" },
                { tier: "Ultimate", rate: "30%", color: "#3B82F6" },
                { tier: "Premium", rate: "35%", color: "#8B5CF6" },
                { tier: "Supreme", rate: "40%", color: "#F59E0B" },
              ].map((t, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: i < 3 ? `1px solid ${border}` : "none" }}>
                  <span style={{ fontSize: 13, color: sub }}>{t.tier} Plan</span>
                  <span style={{ fontSize: 13, fontWeight: 800, color: t.color }}>{t.rate}</span>
                </div>
              ))}
            </div>

            {/* Leaderboard */}
            <div style={{ background: card, borderRadius: 16, border: `1px solid ${border}`, overflow: "hidden" }}>
              <div style={{ padding: "14px 16px", borderBottom: `1px solid ${border}` }}>
                <div style={{ fontSize: 13, fontWeight: 700 }}>🏆 Top Affiliates</div>
              </div>
              {leaderboard.map((u, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", padding: "12px 16px", borderBottom: i < leaderboard.length - 1 ? `1px solid ${border}` : "none", background: u.isUser ? "rgba(255,107,53,0.06)" : "transparent" }}>
                  <div style={{ width: 24, fontSize: 14, textAlign: "center" }}>{u.badge}</div>
                  <div style={{ width: 34, height: 34, borderRadius: "50%", background: u.isUser ? "linear-gradient(135deg, #FF6B35, #FF3584)" : "linear-gradient(135deg, #7C3AED, #3B82F6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 700, margin: "0 10px" }}>{u.avatar}</div>
                  <div style={{ flex: 1, fontSize: 13, fontWeight: 600 }}>{u.name}{u.isUser && <span style={{ color: accent, fontSize: 10, marginLeft: 4 }}>You</span>}</div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#F59E0B" }}>⚡ {u.xp.toLocaleString()}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ========== PROFILE TAB ========== */}
        {activeTab === "profile" && (
          <div className="animate-up" style={{ padding: "12px 16px" }}>
            {/* Profile Header */}
            <div style={{ background: "linear-gradient(135deg, #0D0D1A, #1A0D2E)", borderRadius: 20, padding: "24px 20px", border: `1px solid ${border}`, marginBottom: 16, textAlign: "center" }}>
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "linear-gradient(135deg, #FF6B35, #FF3584, #7C3AED)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 32, fontWeight: 900, margin: "0 auto 12px" }}>A</div>
              <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 2 }}>Aryan Kapoor</div>
              <div style={{ fontSize: 13, color: sub, marginBottom: 12 }}>aryan@email.com</div>
              <div style={{ display: "inline-flex", background: "rgba(245,158,11,0.15)", borderRadius: 10, padding: "6px 14px", border: "1px solid rgba(245,158,11,0.3)" }}>
                <span style={{ fontSize: 12, fontWeight: 700 }} className="gold-text">⭐ SUPREME MEMBER</span>
              </div>
            </div>

            {/* XP & Level */}
            <div style={{ background: card, borderRadius: 16, padding: "16px", border: `1px solid ${border}`, marginBottom: 14 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
                <div>
                  <div style={{ fontSize: 12, color: sub }}>Current XP</div>
                  <div style={{ fontSize: 24, fontWeight: 900, color: "#F59E0B" }}>⚡ {xp.toLocaleString()}</div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <div style={{ fontSize: 12, color: sub }}>Level</div>
                  <div style={{ fontSize: 24, fontWeight: 900 }} className="gradient-text">14</div>
                </div>
              </div>
              <div style={{ background: card2, borderRadius: 8, height: 8, overflow: "hidden" }}>
                <div style={{ width: "72%", height: "100%", background: "linear-gradient(90deg, #F59E0B, #FF6B35)", borderRadius: 8 }}></div>
              </div>
              <div style={{ fontSize: 11, color: sub, marginTop: 6 }}>2,800 XP to Level 15</div>
            </div>

            {/* Achievements */}
            <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 12 }}>Achievements</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10, marginBottom: 20 }}>
              {achievements.map((a, i) => (
                <div key={i} style={{ background: card, borderRadius: 14, padding: "12px 8px", textAlign: "center", border: `1px solid ${a.earned ? "rgba(245,158,11,0.3)" : border}`, opacity: a.earned ? 1 : 0.4 }}>
                  <div style={{ fontSize: 24, marginBottom: 4, filter: a.earned ? "none" : "grayscale(1)" }}>{a.icon}</div>
                  <div style={{ fontSize: 10, fontWeight: 700, marginBottom: 2 }}>{a.title}</div>
                  <div style={{ fontSize: 9, color: sub }}>{a.desc}</div>
                </div>
              ))}
            </div>

            {/* Settings */}
            <div style={{ background: card, borderRadius: 16, border: `1px solid ${border}`, overflow: "hidden" }}>
              {[
                { label: "My Certificates", icon: "🏅" },
                { label: "Downloaded Courses", icon: "⬇️" },
                { label: "Payment History", icon: "💳" },
                { label: "Notifications", icon: "🔔" },
                { label: "Dark Mode", icon: darkMode ? "🌙" : "☀️", toggle: true },
                { label: "Help & Support", icon: "💬" },
                { label: "Sign Out", icon: "🚪", danger: true },
              ].map((item, i, arr) => (
                <div key={i} onClick={() => item.toggle && setDarkMode(!darkMode)} style={{ display: "flex", alignItems: "center", padding: "16px", borderBottom: i < arr.length - 1 ? `1px solid ${border}` : "none", cursor: "pointer", background: "transparent" }}>
                  <span style={{ fontSize: 18, marginRight: 14 }}>{item.icon}</span>
                  <span style={{ flex: 1, fontSize: 14, fontWeight: 500, color: item.danger ? "#EF4444" : text }}>{item.label}</span>
                  {item.toggle && (
                    <div style={{ width: 40, height: 22, borderRadius: 11, background: darkMode ? purple : card2, position: "relative", border: `1px solid ${border}` }}>
                      <div style={{ width: 18, height: 18, borderRadius: "50%", background: "#fff", position: "absolute", top: 1, left: darkMode ? 20 : 1, transition: "left 0.2s" }}></div>
                    </div>
                  )}
                  {!item.toggle && <span style={{ color: sub, fontSize: 16 }}>›</span>}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM NAV */}
      <div style={{ position: "fixed", bottom: 0, left: "50%", transform: "translateX(-50%)", width: "100%", maxWidth: 430, background: darkMode ? "rgba(10,10,15,0.95)" : "rgba(248,248,252,0.95)", backdropFilter: "blur(20px)", borderTop: `1px solid ${border}`, display: "flex", justifyContent: "space-around", padding: "10px 0 16px", zIndex: 100 }}>
        {navItems.map(item => (
          <button key={item.id} onClick={() => { setActiveTab(item.id); if (item.id !== "courses") setSelectedCourse(null); }} className="tab-btn" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, background: "none", border: "none", cursor: "pointer", padding: "4px 12px" }}>
            <div style={{ fontSize: 20, filter: activeTab === item.id ? "none" : "grayscale(0.5)", transform: activeTab === item.id ? "scale(1.15)" : "scale(1)", transition: "transform 0.2s" }}>{item.icon}</div>
            <span style={{ fontSize: 10, fontWeight: activeTab === item.id ? 700 : 400, color: activeTab === item.id ? accent : sub }}>{item.label}</span>
            {activeTab === item.id && <div style={{ width: 4, height: 4, borderRadius: "50%", background: accent, marginTop: -2 }}></div>}
          </button>
        ))}
      </div>
    </div>
  );
}

// Helper Components
function Section({ title, sub, accent, children }) {
  return (
    <div style={{ marginBottom: 20 }}>
      <div style={{ padding: "0 16px", marginBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ fontSize: 16, fontWeight: 800 }}>{title}</div>
          {sub && <div style={{ fontSize: 11, color: "#9898B8", marginTop: 2 }}>{sub}</div>}
        </div>
        <span style={{ fontSize: 12, color: accent, fontWeight: 600, cursor: "pointer" }}>See all ›</span>
      </div>
      <div style={{ paddingLeft: 16 }}>{children}</div>
    </div>
  );
}

function CourseCard({ course, onSelect, card, card2, text, sub, border, accent, showProgress }) {
  return (
    <div className="course-card" onClick={onSelect} style={{ minWidth: 160, background: card, borderRadius: 16, overflow: "hidden", border: `1px solid ${border}`, flexShrink: 0 }}>
      <div style={{ height: 90, background: `linear-gradient(135deg, ${course.color}44, ${course.color}11)`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 36, position: "relative" }}>
        {course.emoji}
        {course.trending && <div style={{ position: "absolute", top: 8, left: 8, background: accent, borderRadius: 6, padding: "2px 6px", fontSize: 9, fontWeight: 700, color: "#fff" }}>HOT</div>}
        {showProgress && course.progress > 0 && (
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3 }}>
            <div style={{ width: `${course.progress}%`, height: "100%", background: "linear-gradient(90deg, #FF6B35, #FF3584)" }}></div>
          </div>
        )}
      </div>
      <div style={{ padding: "10px 12px 12px" }}>
        <div style={{ fontSize: 12, fontWeight: 700, marginBottom: 2, lineHeight: 1.3 }}>{course.title}</div>
        <div style={{ fontSize: 10, color: sub, marginBottom: 6 }}>{course.instructor}</div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <span style={{ fontSize: 10, color: "#F59E0B", fontWeight: 600 }}>★ {course.rating}</span>
          <span style={{ fontSize: 10, color: sub }}>{course.duration}</span>
        </div>
        {showProgress && course.progress > 0 && (
          <div style={{ fontSize: 10, color: accent, marginTop: 4, fontWeight: 600 }}>{course.progress}% complete</div>
        )}
      </div>
    </div>
  );
}

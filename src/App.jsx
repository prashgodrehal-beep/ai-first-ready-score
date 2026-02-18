import React, { useState, useMemo, useEffect } from 'react';
import {
  BarChart3,
  Settings,
  Users,
  Zap,
  TrendingUp,
  Target,
  Clock,
  CheckCircle2,
  ArrowRight,
  Info,
  ShieldAlert,
  ShieldCheck,
  ShieldQuestion,
  GraduationCap,
  Briefcase,
  ExternalLink
} from 'lucide-react';

const App = () => {
  const [scores, setScores] = useState(new Array(6).fill(0));

  const categories = [
    {
      title: "Sales",
      icon: <Target className="w-5 h-5" />,
      manual: "Renewals tracked in Excel. Follow-ups depend on rep memory.",
      aiFirst: "AI flags renewal risk, upsell triggers, and deal probability weekly."
    },
    {
      title: "Marketing",
      icon: <Briefcase className="w-5 h-5" />,
      manual: "Standard proposals reused across industries.",
      aiFirst: "AI drafts industry-specific proposals using past win patterns."
    },
    {
      title: "Customer Service",
      icon: <Zap className="w-5 h-5" />,
      manual: "Tickets routed manually. Response depends on staff experience.",
      aiFirst: "AI guides staff in real-time and routes tickets intelligently."
    },
    {
      title: "HR & Training",
      icon: <GraduationCap className="w-5 h-5" />,
      manual: "Static PPT training and onboarding manuals.",
      aiFirst: "Interactive AI training simulations for product & support staff."
    },
    {
      title: "Operations",
      icon: <Settings className="w-5 h-5" />,
      manual: "Reports created monthly. Issues found after delays.",
      aiFirst: "AI flags anomalies and maintenance risks proactively."
    },
    {
      title: "Finance",
      icon: <BarChart3 className="w-5 h-5" />,
      manual: "Static revenue tracking. Forecasting based on historical trend.",
      aiFirst: "AI forecasts renewal cash flow gaps and revenue leakage risk."
    }
  ];

  const totalScore = useMemo(() => scores.reduce((a, b) => a + b, 0), [scores]);

  const getRiskLevel = () => {
    if (totalScore === 0) return null;
    if (totalScore <= 12) return {
      label: "High Competitive Risk",
      color: "bg-red-50 text-red-700 border-red-200",
      icon: <ShieldAlert className="w-6 h-6" />,
      desc: "Manual processes dominate revenue decisions. AI-enabled competitors will move faster."
    };
    if (totalScore <= 20) return {
      label: "Emerging Risk",
      color: "bg-amber-50 text-amber-700 border-amber-200",
      icon: <ShieldQuestion className="w-6 h-6" />,
      desc: "You use digital tools, but not predictive intelligence."
    };
    return {
      label: "AI-Enabled",
      color: "bg-emerald-50 text-emerald-700 border-emerald-200",
      icon: <ShieldCheck className="w-6 h-6" />,
      desc: "You operate with early AI leverage. Structured optimization can accelerate growth."
    };
  };

  const risk = getRiskLevel();

  const handleScore = (index, value) => {
    const newScores = [...scores];
    newScores[index] = value;
    setScores(newScores);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Container - Simulated A4 Width */}
      <div className="max-w-4xl mx-auto bg-white shadow-2xl min-h-screen border-x border-slate-200">

        {/* SECTION 1 — HEADER */}
        <header className="bg-[#0F1F2E] text-white p-10 md:p-16 text-center">
          <div className="inline-block px-3 py-1 mb-6 border border-slate-500 rounded text-xs font-bold tracking-widest uppercase text-slate-400">
            Industrial & Engineering CXO Resource
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight leading-tight">
            Is Your Industrial Business <span className="text-[#D97706]">AI-Ready?</span>
          </h1>
          <p className="text-xl text-slate-300 font-medium mb-2">
            A 10-Minute Self-Assessment for CXOs in Engineering & Manufacturing
          </p>
          <p className="text-slate-400 italic">
            AI-first industrial companies improve renewals, service speed, and sales visibility — within months.
          </p>
        </header>

        {/* SECTION 2 — THE COMPETITIVE REALITY */}
        <section className="p-10 border-b border-slate-100">
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-[#0F1F2E] mb-4">Why This Matters Now</h2>
              <ul className="space-y-4 text-slate-600">
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#D97706] shrink-0" />
                  <span><strong>AI-first companies</strong> redesign workflows around data intelligence.</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="w-5 h-5 text-slate-400 shrink-0" />
                  <span>Manual Excel-dependent systems <strong>react</strong>. AI-enabled systems <strong>anticipate</strong>.</span>
                </li>
              </ul>
            </div>
            <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                <div className="text-3xl font-extrabold text-[#0F1F2E] mb-1">+220%</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Renewal Growth</div>
              </div>
              <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
                <div className="text-3xl font-extrabold text-[#D97706] mb-1">7 → 3</div>
                <div className="text-xs font-bold text-slate-500 uppercase tracking-tighter">Day Service Speed</div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3 — AI-FIRST DIAGNOSTIC GRID */}
        <section className="p-10">
          <div className="flex justify-between items-end mb-8">
            <h2 className="text-2xl font-bold text-[#0F1F2E]">Score Your Business</h2>
            <div className="text-sm font-bold text-slate-400 uppercase tracking-widest">
              1 (Manual) &rarr; 5 (AI-Assisted)
            </div>
          </div>

          <div className="space-y-6">
            {categories.map((cat, idx) => (
              <div key={idx} className="group border border-slate-100 rounded-xl overflow-hidden hover:border-[#D97706]/30 transition-colors">
                <div className="flex flex-col md:flex-row">
                  <div className="bg-slate-50 p-5 md:w-1/4 border-r border-slate-100 flex md:flex-col items-center md:items-start gap-3">
                    <div className="p-2 bg-white rounded shadow-sm text-[#0F1F2E]">
                      {cat.icon}
                    </div>
                    <span className="font-bold text-[#0F1F2E]">{cat.title}</span>
                  </div>

                  <div className="flex-1 p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Level 1: Manual</div>
                      <p className="text-sm text-slate-500">{cat.manual}</p>
                    </div>
                    <div>
                      <div className="text-[10px] font-bold text-[#D97706] uppercase mb-1">Level 5: AI-First</div>
                      <p className="text-sm text-slate-700 font-medium">{cat.aiFirst}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50/50 p-5 md:w-1/5 flex items-center justify-center border-l border-slate-100">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <button
                          key={num}
                          onClick={() => handleScore(idx, num)}
                          className={`w-8 h-8 rounded text-xs font-bold transition-all ${scores[idx] === num
                              ? 'bg-[#0F1F2E] text-white shadow-lg scale-110'
                              : 'bg-white border border-slate-200 text-slate-400 hover:border-[#D97706]'
                            }`}
                        >
                          {num}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 — YOUR RISK LEVEL */}
        <section className="p-10 bg-slate-50 border-y border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="text-center md:text-left">
              <div className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">Your Total Score</div>
              <div className="text-6xl font-black text-[#0F1F2E]">{totalScore}<span className="text-2xl text-slate-300">/30</span></div>
            </div>

            <div className="flex-1 w-full">
              {!risk ? (
                <div className="p-8 border-2 border-dashed border-slate-300 rounded-xl flex items-center justify-center text-slate-400 gap-3">
                  <Info className="w-5 h-5" />
                  <span className="font-medium italic">Complete the assessment above to see your risk profile.</span>
                </div>
              ) : (
                <div className={`p-6 rounded-xl border-2 transition-all duration-500 ${risk.color}`}>
                  <div className="flex items-center gap-4 mb-3">
                    {risk.icon}
                    <h3 className="text-2xl font-black uppercase tracking-tight">{risk.label}</h3>
                  </div>
                  <p className="font-medium text-lg leading-snug">{risk.desc}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* SECTION 5 — EVIDENCE FROM INDUSTRIAL PEERS */}
        <section className="p-10">
          <h2 className="text-2xl font-bold text-[#0F1F2E] mb-8 text-center uppercase tracking-tight">Evidence From Industrial Peers</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-[#0F1F2E] text-white text-[10px] font-bold">CASE A</div>
              <h4 className="font-bold text-[#0F1F2E] mb-2 pr-12">Mid-Sized Engineering Firm</h4>
              <p className="text-sm text-slate-500 mb-4 italic">300+ staff, moved from Excel to custom AI tool.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm font-bold text-slate-700">
                  <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>+220% increase in renewal growth</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Visible improvement within months</span>
                </div>
              </div>
            </div>

            <div className="p-6 border border-slate-100 rounded-xl bg-white shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 bg-[#D97706] text-white text-[10px] font-bold">CASE B</div>
              <h4 className="font-bold text-[#0F1F2E] mb-2 pr-12">Machine Tool Manufacturer</h4>
              <p className="text-sm text-slate-500 mb-4 italic">Serving OEMs, replaced manual staff training.</p>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm font-bold text-slate-700">
                  <TrendingUp className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Resolution: 7 days &rarr; 3 days</span>
                </div>
                <div className="flex items-start gap-2 text-sm text-slate-600">
                  <Clock className="w-4 h-4 text-[#D97706] shrink-0 mt-0.5" />
                  <span>Improved repeat engagement & response</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — WHAT AN AI-FIRST AUDIT DELIVERS */}
        <section className="bg-[#0F1F2E] text-white p-10 md:p-14">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">What an AI-First Audit Delivers</h2>
            <p className="text-slate-400">Low risk, high impact diagnostic for the enterprise.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[#D97706] font-bold uppercase tracking-widest text-xs mb-4">We Examine</h4>
              <ul className="space-y-3">
                {["Sales workflow bottlenecks", "Renewal and upsell leakage", "Service resolution delays", "Training inefficiencies", "Data assets structure"].map((item, i) => (
                  <li key={i} className="flex gap-3 text-sm border-b border-slate-700 pb-2 italic text-slate-300">
                    <span className="text-[#D97706] shrink-0">✔</span> {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <h4 className="text-white font-bold mb-4 flex items-center gap-2">
                <Target className="w-4 h-4 text-[#D97706]" /> You Receive
              </h4>
              <ul className="space-y-4 mb-6">
                <li className="text-sm font-medium">• Ranked AI opportunities by ROI & effort</li>
                <li className="text-sm font-medium">• 90-day pilot roadmap</li>
                <li className="text-sm font-medium">• Clear cost vs impact visibility</li>
              </ul>
              <div className="text-xs text-slate-400 border-t border-slate-700 pt-4">
                <strong>Duration:</strong> 2–3 weeks <br />
                No IT overhaul required to begin.
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section className="p-10 md:p-16 text-center">
          <h2 className="text-3xl font-bold text-[#0F1F2E] mb-4">Explore Your AI ROI Potential</h2>
          <p className="text-slate-600 mb-8 max-w-lg mx-auto">
            Schedule a structured AI-First Discovery Session. We calculate opportunity before you invest.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <a
              href="https://calendly.com/support-lyq/ai-strategy-audit"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-[#D97706] hover:bg-[#B45309] text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all transform active:scale-95 flex items-center justify-center gap-3"
            >
              Schedule Discovery Session
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="https://www.growthaspire.com/ai-bootcamp-business"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-white border-2 border-[#0F1F2E] text-[#0F1F2E] hover:bg-slate-50 px-8 py-4 rounded-full font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-3"
            >
              Know About Program
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>

          <p className="mt-12 text-xs font-bold text-slate-400 uppercase tracking-widest">
            AI-First Readiness Scorecard™ &copy; 2024
          </p>
        </section>
      </div>

      {/* Floating Action Bar (Mobile only or persistent) */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-slate-200 md:hidden flex justify-between items-center z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.1)]">
        <div>
          <span className="text-[10px] font-bold text-slate-400 block uppercase">SCORE</span>
          <span className="text-xl font-black text-[#0F1F2E]">{totalScore}/30</span>
        </div>
        <a
          href="https://calendly.com/support-lyq/ai-strategy-audit"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0F1F2E] text-white px-5 py-2.5 rounded-lg font-bold text-sm"
        >
          Book Discovery
        </a>
      </div>
    </div>
  );
};

export default App;

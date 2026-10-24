import React, { useState, useEffect, useCallback, useRef } from 'react'
import { Link } from 'react-router-dom'

/**
 * HeroCarousel Component (SIH26263 - APAARSetu)
 * Redesigned with an Animated Text Rotator (Phrase Cycler / Animated Headline):
 * - Keeps the visual anchor stable rather than sliding the whole layout around.
 * - Smoothly swaps out the high-impact action phrases with slide-up & fade animations.
 * - Interactive pillar selector tabs allow direct switching between the 3 core pillars.
 * - Auto-cycles through key problem statements and solutions.
 */
export default function HeroCarousel({ darkMode, setIsAuthenticated }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  const timerRef = useRef(null)

  // Rotating phrases tailored specifically to APAARSetu's national mandate
  const rotatingItems = [
    {
      id: 'pillar-duplicate',
      pillar: 'Pillar I • Real-Time Enforcement',
      headlinePrefix: 'National AICTE Control Room that',
      rotatorText: 'Eliminates Cross-College Seat Hoarding',
      rotatorColor: 'from-rose-500 via-red-500 to-amber-500',
      pillStyle: darkMode
        ? { background: 'rgba(76,5,25,0.7)', color: '#fca5a5', border: '1px solid #9f1239' }
        : { background: '#fff1f2', color: '#be123c', border: '1px solid #fecdd3' },
      subtext:
        'Uses the 12-digit APAAR ID to query a global database index in O(1) time. Automatically intercepts students attempting concurrent active admissions across multiple universities.',
      badge: 'Zero Ghost Enrolments',
      statNumber: 'O(1) Check',
      statLabel: 'Cross-Institute Unique Index',
      primaryBtn: { text: 'Launch Live Dashboard', to: '/dashboard', icon: 'bi-grid-1x2-fill' },
      secondaryBtn: { text: 'See Duplicate Radar', to: '#interactive-demo', icon: 'bi-radar' },
      visualType: 'duplicate'
    },
    {
      id: 'pillar-quota',
      pillar: 'Pillar II • Intake Compliance',
      headlinePrefix: 'National AICTE Control Room that',
      rotatorText: 'Enforces Statutory Quota & NRI Caps',
      rotatorColor: 'from-amber-500 via-orange-500 to-rose-500',
      pillStyle: darkMode
        ? { background: 'rgba(69,26,3,0.7)', color: '#fcd34d', border: '1px solid #92400e' }
        : { background: '#fffbeb', color: '#b45309', border: '1px solid #fde68a' },
      subtext:
        'Mathematically enforces approved intake limits: Regular (100%), NRI (max 5%), and FN/OCI (max 15%). Blocks batch over-admissions instantly before database commit.',
      badge: 'Intake Ceiling Guard',
      statNumber: '100% Strict',
      statLabel: 'Deterministic Math (No AI Guessing)',
      primaryBtn: { text: 'Test Batch Validation', to: '/dashboard', icon: 'bi-shield-check' },
      secondaryBtn: { text: 'View Intake Norms', to: '#features', icon: 'bi-file-earmark-check' },
      visualType: 'quota'
    },
    {
      id: 'pillar-qr',
      pillar: 'Pillar III • Fraud-Proof Credentials',
      headlinePrefix: 'National AICTE Control Room that',
      rotatorText: 'Verifies Degrees Instantly via QR Code',
      rotatorColor: 'from-emerald-500 via-teal-500 to-cyan-500',
      pillStyle: darkMode
        ? { background: 'rgba(2,44,34,0.7)', color: '#6ee7b7', border: '1px solid #065f46' }
        : { background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0' },
      subtext:
        'Generates W3C-standard Verifiable Credentials with Ed25519 cryptographic signatures. Employers and foreign universities verify genuine academic records in under 2 seconds.',
      badge: 'Tamper-Evident QR',
      statNumber: '< 2.0 Sec',
      statLabel: 'Public Verification Speed',
      primaryBtn: { text: 'Scan & Verify Demo', to: '/dashboard', icon: 'bi-qr-code-scan' },
      secondaryBtn: { text: 'Security Blueprint', to: '#security', icon: 'bi-lock-fill' },
      visualType: 'qr'
    },
    {
      id: 'pillar-national-id',
      pillar: 'Pillar IV • NEP 2020 Mandate',
      headlinePrefix: 'National AICTE Control Room that',
      rotatorText: 'Unifies One Nation, One Student ID',
      rotatorColor: 'from-blue-600 via-indigo-600 to-teal-500',
      pillStyle: darkMode
        ? { background: 'rgba(23,37,84,0.7)', color: '#93c5fd', border: '1px solid #1e40af' }
        : { background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' },
      subtext:
        'Consolidates fragmented college spreadsheets into a single, trusted national registry. Seamlessly maps student credits across DigiLocker & the Academic Bank of Credits (ABC).',
      badge: 'Lifelong Student ID',
      statNumber: '12.8M+',
      statLabel: 'APAAR IDs Anchored',
      primaryBtn: { text: 'Explore Platform', to: '/dashboard', icon: 'bi-speedometer2' },
      secondaryBtn: { text: 'How It Works', to: '#how-it-works', icon: 'bi-diagram-3' },
      visualType: 'id'
    }
  ]

  const triggerChange = useCallback((newIdx) => {
    setAnimating(true)
    setTimeout(() => {
      setCurrentIdx(newIdx)
      setAnimating(false)
    }, 180)
  }, [])

  const nextItem = useCallback(() => {
    triggerChange((currentIdx + 1) % rotatingItems.length)
  }, [currentIdx, rotatingItems.length, triggerChange])

  // Continuous automatic phrase cycling timer (runs seamlessly without interruption)
  useEffect(() => {
    timerRef.current = setInterval(() => {
      nextItem()
    }, 3800)
    return () => clearInterval(timerRef.current)
  }, [nextItem])

  const active = rotatingItems[currentIdx]

  return (
    <section className="relative overflow-hidden pt-8 pb-14 lg:pt-12 lg:pb-20 transition-colors">
      {/* Dynamic Ambient Background Glow */}
      <div className="absolute top-12 left-1/4 w-[420px] h-[420px] bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl -z-10 pointer-events-none transition-all"></div>
      <div className="absolute bottom-10 right-1/4 w-[420px] h-[420px] bg-teal-500/10 dark:bg-teal-500/15 rounded-full blur-3xl -z-10 pointer-events-none transition-all"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tagline / AICTE Banner */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold tracking-wide uppercase bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping"></span>
            SIH26263 • APAAR ID Student Data Management Platform
          </span>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            AICTE Academic Cell & Regulation Bureau
          </span>
        </div>

        {/* ======================================================== */}
        {/* STATIC HERO FRAME WITH ROTATING HEADLINE                 */}
        {/* ======================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Side: Animated Text Rotator (7 cols) */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-5">
            
            {/* Active Pillar Pill */}
            <div className="inline-flex items-center gap-2">
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold transition-all duration-300"
                style={active.pillStyle}
              >
                <i className="bi bi-patch-check-fill"></i>
                <span>{active.pillar}</span>
              </span>
              <span
                className="text-xs font-semibold hidden sm:inline"
                style={{ color: darkMode ? '#94a3b8' : '#64748b' }}
              >
                • {active.badge}
              </span>
            </div>

            {/* Main Animated Headline with Phrase Cycler */}
            <div className="min-h-[140px] sm:min-h-[160px] flex flex-col justify-center">
              <span
                className="block text-xl sm:text-2xl font-bold mb-2"
                style={{ color: darkMode ? '#cbd5e1' : '#334155' }}
              >
                {active.headlinePrefix}
              </span>

              {/* The Rotating Phrase Box */}
              <div className="relative overflow-hidden py-1">
                <h1
                  key={active.id}
                  className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.18] transition-all duration-300 ${
                    animating ? 'opacity-0 translate-y-3' : 'animate-text-enter opacity-100 translate-y-0'
                  }`}
                >
                  <span
                    className={`bg-gradient-to-r ${active.rotatorColor} bg-clip-text text-transparent inline-block`}
                  >
                    {active.rotatorText}
                  </span>
                </h1>
              </div>
            </div>

            {/* Dynamic Description */}
            <p
              key={`desc-${active.id}`}
              className={`text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed transition-opacity duration-300 ${
                animating ? 'opacity-30' : 'opacity-100'
              }`}
              style={{ color: darkMode ? '#cbd5e1' : '#475569' }}
            >
              {active.subtext}
            </p>

            {/* Key Micro Stats (Stay grounded in place) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1">
              <div
                className="px-4 py-2 rounded-xl border"
                style={{
                  background: darkMode ? 'rgba(30,41,59,0.8)' : 'rgba(241,245,249,0.9)',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <span
                  className="block text-xl font-extrabold font-mono"
                  style={{ color: darkMode ? '#60a5fa' : '#2563eb' }}
                >
                  {active.statNumber}
                </span>
                <span className="text-xs font-medium" style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>
                  {active.statLabel}
                </span>
              </div>
              <div
                className="px-4 py-2 rounded-xl border"
                style={{
                  background: darkMode ? 'rgba(30,41,59,0.8)' : 'rgba(241,245,249,0.9)',
                  borderColor: darkMode ? '#334155' : '#e2e8f0'
                }}
              >
                <span
                  className="block text-xl font-extrabold font-mono"
                  style={{ color: darkMode ? '#34d399' : '#059669' }}
                >
                  Zero AI Glitch
                </span>
                <span className="text-xs font-medium" style={{ color: darkMode ? '#94a3b8' : '#64748b' }}>
                  100% Deterministic Engine
                </span>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-3">
              <Link
                to={active.primaryBtn.to}
                onClick={() => {
                  if (setIsAuthenticated) setIsAuthenticated(true)
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5"
              >
                <i className={`bi ${active.primaryBtn.icon}`}></i>
                <span>{active.primaryBtn.text}</span>
              </Link>

              <a
                href={active.secondaryBtn.to}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm text-slate-700 dark:text-slate-200 bg-white/90 dark:bg-slate-800/90 hover:bg-slate-100 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5"
              >
                <i className={`bi ${active.secondaryBtn.icon}`}></i>
                <span>{active.secondaryBtn.text}</span>
              </a>
            </div>
          </div>

          {/* Right Side: Static Anchor Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="w-full max-w-md relative">
              
              {/* Dynamic Mockup Card reflecting active pillar */}
              {active.visualType === 'duplicate' && (
                <div className="rounded-2xl border p-6 shadow-2xl backdrop-blur-md bg-gradient-to-b from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-950/95 border-rose-200/80 dark:border-rose-900/60 transition-all duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold shadow-md shadow-rose-500/20">
                        <i className="bi bi-shield-x text-lg"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-wider">
                          AICTE Radar
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          Seat Hoarding Catch
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950/90 dark:text-rose-300 border border-rose-300 dark:border-rose-800">
                      <i className="bi bi-exclamation-octagon-fill"></i> Intercepted
                    </span>
                  </div>

                  <div className="py-4 space-y-3">
                    <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800/60 text-xs">
                      <div className="font-bold text-rose-900 dark:text-rose-200 mb-1 flex items-center gap-1.5">
                        <i className="bi bi-person-x-fill text-rose-600"></i>
                        Dual Active Admission Attempt
                      </div>
                      <p className="text-rose-700 dark:text-rose-300 leading-tight mb-2">
                        APAAR ID <strong className="font-mono">902144581102</strong> already holds an active seat at <strong>NIST Berhampur</strong> for AY 2026-27.
                      </p>
                      <div className="pt-2 border-t border-rose-200/70 dark:border-rose-800/50 flex justify-between font-mono text-[11px]">
                        <span className="text-rose-800 dark:text-rose-300">Target: VSSUT Burla</span>
                        <span className="font-bold text-rose-600 dark:text-rose-400">BLOCKED</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-xs space-y-1.5">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">National Concurrency Engine</span>
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">100% Match</span>
                      </div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400">
                        Discrepancy routed to AICTE Central Review Queue.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {active.visualType === 'quota' && (
                <div className="rounded-2xl border p-6 shadow-2xl backdrop-blur-md bg-gradient-to-b from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-950/95 border-amber-200/80 dark:border-amber-900/60 transition-all duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-amber-600 flex items-center justify-center text-white font-bold shadow-md shadow-amber-500/20">
                        <i className="bi bi-pie-chart-fill text-lg"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                          Intake Guard
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          Statutory Quota Limit
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800 dark:bg-amber-950/90 dark:text-amber-300 border border-amber-300 dark:border-amber-800">
                      Cap Enforced
                    </span>
                  </div>

                  <div className="py-4 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-700/60 text-xs space-y-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-slate-700 dark:text-slate-300">Sanctioned Intake Capacity</span>
                        <span className="font-bold text-blue-600 dark:text-blue-400">118 / 120 (98%)</span>
                      </div>
                      <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
                        <div className="bg-blue-600 h-full rounded-full w-[98%]"></div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800/60 text-xs space-y-2">
                      <div className="flex justify-between font-semibold">
                        <span className="text-amber-900 dark:text-amber-200">NRI Quota (Max 5% of Intake)</span>
                        <span className="font-bold text-amber-600 dark:text-amber-400">6 / 6 Cap Breached</span>
                      </div>
                      <div className="w-full bg-amber-200 dark:bg-amber-900/60 h-2 rounded-full overflow-hidden">
                        <div className="bg-amber-500 h-full rounded-full w-full"></div>
                      </div>
                      <div className="text-[11px] text-amber-800 dark:text-amber-300">
                        Attempted 7th NRI admission automatically blocked by Rule APH-2026.
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {active.visualType === 'qr' && (
                <div className="rounded-2xl border p-6 shadow-2xl backdrop-blur-md bg-gradient-to-b from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-950/95 border-emerald-200/80 dark:border-emerald-900/60 transition-all duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white font-bold shadow-md shadow-emerald-500/20">
                        <i className="bi bi-qr-code-scan text-lg"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider">
                          Verifiable Degree
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          AICTE Public Verification
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/90 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                      <i className="bi bi-check2-circle"></i> Authenticated
                    </span>
                  </div>

                  <div className="py-4 flex items-center gap-4">
                    <div className="w-24 h-24 p-2 rounded-xl bg-white border border-slate-300 dark:border-slate-700 shadow-inner flex flex-col items-center justify-center flex-shrink-0">
                      <i className="bi bi-qr-code text-4xl text-emerald-600"></i>
                      <span className="text-[9px] font-bold text-slate-700 mt-0.5">SCAN ME</span>
                    </div>

                    <div className="space-y-1.5 text-xs">
                      <div className="font-bold text-slate-900 dark:text-slate-100">
                        B.Tech Computer Science & Engg
                      </div>
                      <div className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">
                        APAAR: 9021-4458-1102
                      </div>
                      <div className="font-mono text-slate-500 dark:text-slate-400 text-[11px]">
                        Roll: NIST/2026/084
                      </div>
                      <div className="inline-block text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                        Ed25519 Cryptographic Proof
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {active.visualType === 'id' && (
                <div className="rounded-2xl border p-6 shadow-2xl backdrop-blur-md bg-gradient-to-b from-white/95 to-slate-50/95 dark:from-slate-900/95 dark:to-slate-950/95 border-blue-200/80 dark:border-blue-900/60 transition-all duration-300">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                    <div className="flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20">
                        <i className="bi bi-person-badge text-lg"></i>
                      </div>
                      <div>
                        <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                          National ID
                        </div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          One Nation One Student
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950/90 dark:text-blue-300 border border-blue-300 dark:border-blue-800">
                      NEP 2020
                    </span>
                  </div>

                  <div className="py-4 space-y-3">
                    <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700/60">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Verified APAAR ID</div>
                      <div className="font-mono text-lg font-bold tracking-widest text-slate-900 dark:text-slate-100">
                        9021 • 4458 • 1102
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/40">
                        <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Academic Year</span>
                        <span className="font-semibold text-slate-800 dark:text-slate-200">2026-27</span>
                      </div>
                      <div className="p-2 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/40">
                        <span className="text-slate-500 dark:text-slate-400 block text-[11px]">Credits Ledger</span>
                        <span className="font-semibold text-blue-600 dark:text-blue-400">40 ABC Credits</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* ======================================================== */}
        {/* TEXT ROTATOR CONTROLS & PILLAR SELECTOR TABS             */}
        {/* ======================================================== */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200/80 dark:border-slate-800">
          
          {/* Interactive Pillar Selector Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {rotatingItems.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => triggerChange(idx)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  currentIdx === idx
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 dark:bg-slate-800/90 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <span className="opacity-75">0{idx + 1}</span>
                <span>
                  {idx === 0
                    ? 'Duplicate Intercept'
                    : idx === 1
                    ? 'Quota Ceiling'
                    : idx === 2
                    ? 'QR Verification'
                    : 'One National ID'}
                </span>
              </button>
            ))}
          </div>

          {/* Continuous Live Rotation Indicator */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
              <span>Continuous Engine Running</span>
            </span>
          </div>

        </div>

      </div>
    </section>
  )
}

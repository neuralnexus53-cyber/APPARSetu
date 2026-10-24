import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import HeroCarousel from '../components/HeroCarousel'
import ReusableCard from '../components/ReusableCard'

/**
 * LandingPage Component (SIH26263 - APAARSetu)
 * Combines Hero Carousel, Live Anomaly Simulator, Feature Cards,
 * How It Works Workflow, Security & DPDP details, and Quick Action CTA.
 */
export default function LandingPage({ darkMode, setIsAuthenticated, setUserRole }) {
  // Simulator State for interactive demo
  const [activeTab, setActiveTab] = useState('duplicate')
  const [simulatedResult, setSimulatedResult] = useState(null)
  const [isSimulating, setIsSimulating] = useState(false)

  // Simulation runner
  const runSimulation = (type) => {
    setIsSimulating(true)
    setSimulatedResult(null)

    setTimeout(() => {
      setIsSimulating(false)
      if (type === 'duplicate') {
        setSimulatedResult({
          status: 'BLOCKED',
          rule: 'IDX_CONCURRENT_ENROLLMENT',
          title: 'Cross-College Double Admission Intercepted',
          severity: 'Critical Alert',
          apaar: '9021-4458-1102',
          student: 'Pradyumna Kumar Jena',
          detail:
            'Student is already actively registered at NIST Berhampur (B.Tech CSE, AY 2026-27). Second active enrollment attempt at VSSUT Burla was automatically intercepted.',
          actionTaken: 'Seat locked at primary institution. Flagged to AICTE Central Anomaly Queue.'
        })
      } else if (type === 'quota') {
        setSimulatedResult({
          status: 'BLOCKED',
          rule: 'RULE_NRI_QUOTA_OVERFLOW',
          title: 'Approved Quota Ceiling Exceeded',
          severity: 'Regulatory Breach',
          apaar: '9021-4458-8831',
          student: 'Aarav Mehta',
          detail:
            'College Sanctioned Intake is 120 seats. NRI cap is 5% (max 6 seats). Attempted to enroll 7th NRI applicant. System blocked overflow candidate automatically.',
          actionTaken: 'Intake ceiling preserved. Institution operator notified to regularize admission.'
        })
      } else if (type === 'fuzzy') {
        setSimulatedResult({
          status: 'RESOLVED',
          rule: 'RAPIDFUZZ_TOKEN_RECONCILER',
          title: 'Phonetic & Clerical Name Mismatch Reconciled',
          severity: 'Review Advisory',
          apaar: '9021-4458-1104',
          student: 'Priyanka Priyadarshini (Entered: Priyadarshini Priyanka)',
          detail:
            'College record swapped First & Last names. RapidFuzz Token-Sort Ratio matched official registry name with 94.6% confidence.',
          actionTaken: 'Auto-resolved without manual rejection. Advisory audit log saved.'
        })
      } else if (type === 'qr') {
        setSimulatedResult({
          status: 'VERIFIED',
          rule: 'W3C_ED25519_CREDENTIAL',
          title: 'Tamper-Proof Degree Credential Authenticated',
          severity: 'Verified Genuine',
          apaar: '9021-4458-1102',
          student: 'Pradyumna Kumar Jena • B.Tech CSE (CGPA: 8.92)',
          detail:
            'Scanned QR payload matched AICTE cryptographic registry public key. Ed25519 signature valid. No paper marksheet required.',
          actionTaken: 'Instant employer green checkmark returned in 0.42 seconds.'
        })
      }
    }, 450)
  }

  // Pre-trigger first simulation on load
  React.useEffect(() => {
    runSimulation('duplicate')
  }, [])

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* ======================================================== */}
      {/* 1. HERO CAROUSEL                                          */}
      {/* ======================================================== */}
      <HeroCarousel darkMode={darkMode} setIsAuthenticated={setIsAuthenticated} />

      {/* ======================================================== */}
      {/* 2. NATIONAL CONTROL ROOM STATS BAR                       */}
      {/* ======================================================== */}
      <section
        className="py-8 border-y transition-all"
        style={{
          backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
          borderColor: darkMode ? '#1E293B' : '#E2E8F0'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <ReusableCard
              variant="stat"
              darkMode={darkMode}
              statValue="10,480+"
              statTrend="+12.4% YoY"
              title="AICTE Technical Institutions"
              subtitle="Pan-India Reach"
              description="Engineering, management, polytechnic, and technical colleges connected."
              badge="National Scope"
              badgeColor="blue"
            />
            <ReusableCard
              variant="stat"
              darkMode={darkMode}
              statValue="12.8M+"
              statTrend="100% Saturation"
              title="APAAR IDs Unified"
              subtitle="One Nation, One ID"
              description="Lifelong academic identity linked to DigiLocker and Academic Bank of Credits."
              badge="NEP 2020"
              badgeColor="teal"
            />
            <ReusableCard
              variant="stat"
              darkMode={darkMode}
              statValue="0"
              statTrend="Zero Tolerance"
              title="Duplicate Seats Allowed"
              subtitle="Dual-Admission Shield"
              description="Cross-institution concurrency index stops students blocking multiple seats."
              badge="Guaranteed"
              badgeColor="green"
            />
            <ReusableCard
              variant="stat"
              darkMode={darkMode}
              statValue="< 2.0s"
              statTrend="Instant Proof"
              title="Degree QR Verification"
              subtitle="Employer Trust"
              description="Cryptographic Ed25519 signature checks verify student degrees on the spot."
              badge="Real-Time"
              badgeColor="purple"
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 3. INTERACTIVE SIMULATOR (RADAR DEMO)                     */}
      {/* ======================================================== */}
      <section id="interactive-demo" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-rose-50 text-rose-700 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-200 dark:border-rose-800">
              <i className="bi bi-radar text-rose-600 animate-spin"></i>
              Live Test Simulator
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3 text-slate-900 dark:text-white brand-title">
              See the APAARSetu Defense Engine in Action
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Click below to test how the platform catches seat-hoarding, quota violations, and fake credentials in real time.
            </p>
          </div>

          <div
            className="max-w-4xl mx-auto rounded-3xl border p-4 sm:p-6 lg:p-8 shadow-xl backdrop-blur-sm transition-all"
            style={{
              backgroundColor: darkMode ? 'rgba(15,23,42,0.92)' : 'rgba(255,255,255,0.95)',
              borderColor: darkMode ? '#334155' : '#E2E8F0'
            }}
          >
            {/* Simulator Tabs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
              <button
                onClick={() => {
                  setActiveTab('duplicate')
                  runSimulation('duplicate')
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'duplicate'
                    ? 'bg-rose-600 text-white shadow-md shadow-rose-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <i className="bi bi-shield-x"></i>
                <span>Double Admission</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('quota')
                  runSimulation('quota')
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'quota'
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <i className="bi bi-pie-chart-fill"></i>
                <span>Quota Breach</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('fuzzy')
                  runSimulation('fuzzy')
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'fuzzy'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <i className="bi bi-spellcheck"></i>
                <span>Fuzzy Name Match</span>
              </button>

              <button
                onClick={() => {
                  setActiveTab('qr')
                  runSimulation('qr')
                }}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'qr'
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                }`}
              >
                <i className="bi bi-qr-code"></i>
                <span>QR Verification</span>
              </button>
            </div>

            {/* Simulation Canvas Display */}
            <div
              className="rounded-2xl border p-5 sm:p-6 min-h-[220px] flex items-center justify-center transition-all"
              style={{
                backgroundColor: darkMode ? '#0B1120' : '#F8FAFC',
                borderColor: darkMode ? '#334155' : '#E2E8F0'
              }}
            >
              {isSimulating ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                  <p className="text-xs font-semibold" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
                    Executing Deterministic Rules & National Index Query...
                  </p>
                </div>
              ) : simulatedResult ? (
                <div className="w-full space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b" style={{ borderColor: darkMode ? '#334155' : '#E2E8F0' }}>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-3 h-3 rounded-full ${
                          simulatedResult.status === 'BLOCKED'
                            ? 'bg-rose-500 animate-ping'
                            : simulatedResult.status === 'VERIFIED'
                            ? 'bg-emerald-500'
                            : 'bg-blue-500'
                        }`}
                      ></span>
                      <span className="font-bold text-sm" style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>
                        {simulatedResult.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className="text-xs font-mono px-2 py-0.5 rounded"
                        style={{
                          backgroundColor: darkMode ? '#1E293B' : '#E2E8F0',
                          color: darkMode ? '#CBD5E1' : '#334155'
                        }}
                      >
                        {simulatedResult.rule}
                      </span>
                      <span
                        className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                        style={
                          simulatedResult.status === 'BLOCKED'
                            ? { backgroundColor: darkMode ? '#4C0519' : '#FFE4E6', color: darkMode ? '#FCA5A5' : '#9F1239' }
                            : simulatedResult.status === 'VERIFIED'
                            ? { backgroundColor: darkMode ? '#022C22' : '#DCFCE7', color: darkMode ? '#6EE7B7' : '#166534' }
                            : { backgroundColor: darkMode ? '#172554' : '#DBEAFE', color: darkMode ? '#93C5FD' : '#1E40AF' }
                        }
                      >
                        {simulatedResult.severity}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <div
                      className="p-3 rounded-xl border"
                      style={{
                        backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                        borderColor: darkMode ? '#334155' : '#E2E8F0'
                      }}
                    >
                      <span className="block font-medium" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>Subject Identity</span>
                      <strong className="block mt-0.5" style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>
                        {simulatedResult.student}
                      </strong>
                      <span className="font-mono mt-1 block" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
                        APAAR: {simulatedResult.apaar}
                      </span>
                    </div>

                    <div
                      className="p-3 rounded-xl border"
                      style={{
                        backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                        borderColor: darkMode ? '#334155' : '#E2E8F0'
                      }}
                    >
                      <span className="block font-medium" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>Automatic System Disposition</span>
                      <strong className="block mt-0.5" style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>
                        {simulatedResult.actionTaken}
                      </strong>
                    </div>
                  </div>

                  <p
                    className="text-xs leading-relaxed p-3 rounded-xl border"
                    style={{
                      backgroundColor: darkMode ? 'rgba(30,41,59,0.5)' : 'rgba(255,255,255,0.7)',
                      borderColor: darkMode ? '#334155' : '#E2E8F0',
                      color: darkMode ? '#CBD5E1' : '#475569'
                    }}
                  >
                    <strong style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>Detection Detail: </strong>
                    {simulatedResult.detail}
                  </p>
                </div>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between text-xs gap-2" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
              <span className="flex items-center gap-1.5">
                <i className="bi bi-shield-check text-emerald-500"></i>
                Zero AI Hallucination • 100% Deterministic SQL / Redis Bloom Filter Indexing
              </span>
              <Link
                to="/login"
                className="font-bold hover:underline inline-flex items-center gap-1"
                style={{ color: darkMode ? '#60A5FA' : '#2563EB' }}
              >
                <span>Sign in to Test Live Anomaly Queue</span>
                <i className="bi bi-arrow-right"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 4. CORE FEATURES (REUSABLE CARDS GRID)                    */}
      {/* ======================================================== */}
      <section
        id="features"
        className="py-16 lg:py-20 transition-all"
        style={{
          backgroundColor: darkMode ? '#0B1120' : '#F8FAFC'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-50 text-blue-700 dark:bg-blue-950/80 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              Architectural Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3 text-slate-900 dark:text-white brand-title">
              Engineered for Complete AICTE Enrolment Integrity
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Every feature directly satisfies SIH26263 problem requirements with verifiable mathematical rigor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ReusableCard
              darkMode={darkMode}
              icon={<i className="bi bi-diagram-2-fill"></i>}
              badge="Requirement 3"
              badgeColor="rose"
              title="Cross-College Concurrency Shield"
              subtitle="Anti-Seat Hoarding"
              description="Queries a global database unique index on (apaar_id, academic_year) in O(1) time. Stops students from blocking admission seats across two different colleges at once."
              tags={['Unique Index', 'Zero Seat Hoarding', 'State-Wise Radar']}
            />

            <ReusableCard
              darkMode={darkMode}
              icon={<i className="bi bi-speedometer"></i>}
              badge="Requirement 2 & 3"
              badgeColor="amber"
              title="Automated Intake & Quota Guard"
              subtitle="Strict Statutory Caps"
              description="Calculates and limits admissions mathematically: Approved Intake (100%), NRI Quota (max 5%), and Foreign National / OCI supernumerary seats (max 15%)."
              tags={['Intake Enforcement', 'NRI 5% Cap', 'Supernumerary Math']}
            />

            <ReusableCard
              darkMode={darkMode}
              icon={<i className="bi bi-qr-code-scan"></i>}
              badge="Requirement 5, 6 & 10"
              badgeColor="green"
              title="Dual-ID Verifiable Degree QR"
              subtitle="Tamper-Evident Proof"
              description="Generates certificates displaying both National APAAR ID and Institutional Student Roll No, sealed with an Ed25519 digital signature verifiable in 2 seconds."
              tags={['Ed25519 Signatures', 'Dual ID', 'Instant Scan']}
            />

            <ReusableCard
              darkMode={darkMode}
              icon={<i className="bi bi-file-earmark-spreadsheet-fill"></i>}
              badge="Requirement 1 & 7"
              badgeColor="blue"
              title="High-Speed Batch CSV/Excel Ingestion"
              subtitle="Scalable Data Pipeline"
              description="Enables registrars to bulk-upload thousands of student records at close of admission. Runs Verhoeff Mod-10 format validation in milliseconds without manual files."
              tags={['Bulk CSV Parser', 'Verhoeff Mod-10', 'API Setu / ERP']}
            />

            <ReusableCard
              darkMode={darkMode}
              icon={<i className="bi bi-input-cursor-text"></i>}
              badge="Requirement 3 (Fuzzy Engine)"
              badgeColor="teal"
              title="RapidFuzz Demographic Reconciler"
              subtitle="Zero False-Rejections"
              description="Indian paperwork often transposes first and last names. Our phonetic matching engine calculates token similarity, auto-resolving benign clerical typos."
              tags={['RapidFuzz', 'Double Metaphone', 'Clerical Correction']}
            />

            <ReusableCard
              darkMode={darkMode}
              icon={<i className="bi bi-shield-lock-fill"></i>}
              badge="Requirement 8 (DPDP Act)"
              badgeColor="purple"
              title="DPDP Privacy & Consent Architecture"
              subtitle="Full Legal Compliance"
              description="Adheres to India's DPDP Act 2023 with verifiable parental consent artifacts for minors, keyed HMAC lookup tokens, and append-only audit logs for all data access."
              tags={['DPDP 2023', 'Parental Consent', 'HMAC Tokens']}
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 5. HOW IT WORKS (4-STEP WORKFLOW)                        */}
      {/* ======================================================== */}
      <section id="how-it-works" className="py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 dark:bg-emerald-950/80 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
              End-to-End Pipeline
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3 text-slate-900 dark:text-white brand-title">
              How APAARSetu Works From Admission to Degree
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              A transparent 4-stage data journey designed to eliminate paperwork, fraud, and delay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ReusableCard
              variant="step"
              stepNumber="01"
              darkMode={darkMode}
              badge="Admission Close"
              badgeColor="blue"
              title="College Batch Upload"
              subtitle="Phase 1 • Ingestion"
              description="Registrar logs into Institution Portal and uploads the admitted cohort spreadsheet (Name, DOB, APAAR ID, Category, Program)."
              tags={['Drag & Drop CSV', 'Instant Feedback']}
            />

            <ReusableCard
              variant="step"
              stepNumber="02"
              darkMode={darkMode}
              badge="Deterministic Engine"
              badgeColor="amber"
              title="Automated Rule Checks"
              subtitle="Phase 2 • Validation"
              description="FastAPI engine verifies 12-digit format, validates intake limits (120 cap, 5% NRI), and checks cross-institution database for concurrent duplicates."
              tags={['Zero Hallucination', 'Sub-second Check']}
            />

            <ReusableCard
              variant="step"
              stepNumber="03"
              darkMode={darkMode}
              badge="AICTE Central Vault"
              badgeColor="teal"
              title="Repository & Anomaly Log"
              subtitle="Phase 3 • Oversight"
              description="Valid rows commit to secure PostgreSQL registry. Flagged anomalies appear live on the AICTE Regulator Watchtower for authorized review."
              tags={['Audit Trail', 'Discrepancy Queue']}
            />

            <ReusableCard
              variant="step"
              stepNumber="04"
              darkMode={darkMode}
              badge="Post-Graduation"
              badgeColor="green"
              title="Instant QR Degree Check"
              subtitle="Phase 4 • Credential"
              description="Institutions issue degree certificates containing dual IDs (APAAR + Roll ID) and a QR code. Employers verify authenticity with their phones in 2 seconds."
              tags={['QR Verification', 'Fraud-Proof']}
            />
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 6. SECURITY & DPDP COMPLIANCE SECTION                     */}
      {/* ======================================================== */}
      <section
        id="security"
        className="py-16 lg:py-20 border-t transition-all"
        style={{
          backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
          borderColor: darkMode ? '#1E293B' : '#E2E8F0'
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-purple-50 text-purple-700 dark:bg-purple-950/80 dark:text-purple-300 border border-purple-200 dark:border-purple-800">
              National Privacy Standard
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mt-3 text-slate-900 dark:text-white brand-title">
              Bank-Grade Security & DPDP Act 2023 Compliance
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Protecting student identity through cryptographic zero-knowledge lookups and immutable audit logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div
              className="rounded-2xl border p-6 space-y-3 transition-all shadow-sm"
              style={{
                backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                borderColor: darkMode ? '#334155' : '#E2E8F0',
                color: darkMode ? '#F8FAFC' : '#0F172A'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  backgroundColor: darkMode ? 'rgba(88,28,135,0.4)' : '#FAF5FF',
                  color: darkMode ? '#C084FC' : '#7E22CE',
                  border: darkMode ? '1px solid #6B21A8' : '1px solid #E9D5FF'
                }}
              >
                <i className="bi bi-key-fill"></i>
              </div>
              <h3 className="font-bold text-lg" style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>
                Keyed HMAC Lookup Tokens
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: darkMode ? '#CBD5E1' : '#475569' }}>
                Raw 12-digit student identifiers are never written to unencrypted application logs. Cross-college matching is performed using privacy-preserving cryptographic hashes.
              </p>
              <div
                className="text-xs font-mono pt-2 border-t"
                style={{
                  color: darkMode ? '#C084FC' : '#7E22CE',
                  borderColor: darkMode ? '#334155' : '#F1F5F9'
                }}
              >
                HMAC-SHA256 Tokenization
              </div>
            </div>

            <div
              className="rounded-2xl border p-6 space-y-3 transition-all shadow-sm"
              style={{
                backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                borderColor: darkMode ? '#334155' : '#E2E8F0',
                color: darkMode ? '#F8FAFC' : '#0F172A'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  backgroundColor: darkMode ? 'rgba(30,58,138,0.4)' : '#EFF6FF',
                  color: darkMode ? '#93C5FD' : '#1D4ED8',
                  border: darkMode ? '1px solid #1E40AF' : '1px solid #BFDBFE'
                }}
              >
                <i className="bi bi-file-earmark-lock-fill"></i>
              </div>
              <h3 className="font-bold text-lg" style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>
                Verifiable Parental Consent
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: darkMode ? '#CBD5E1' : '#475569' }}>
                Mandatory under DPDP Act for minor students. Includes purpose-bound permissions, time-limited access windows, and guaranteed parental revocation mechanisms.
              </p>
              <div
                className="text-xs font-mono pt-2 border-t"
                style={{
                  color: darkMode ? '#93C5FD' : '#1D4ED8',
                  borderColor: darkMode ? '#334155' : '#F1F5F9'
                }}
              >
                JSON-LD Signed Consent Artifact
              </div>
            </div>

            <div
              className="rounded-2xl border p-6 space-y-3 transition-all shadow-sm"
              style={{
                backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                borderColor: darkMode ? '#334155' : '#E2E8F0',
                color: darkMode ? '#F8FAFC' : '#0F172A'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center text-xl"
                style={{
                  backgroundColor: darkMode ? 'rgba(6,78,59,0.4)' : '#ECFDF5',
                  color: darkMode ? '#6EE7B7' : '#065F46',
                  border: darkMode ? '1px solid #059669' : '1px solid #A7F3D0'
                }}
              >
                <i className="bi bi-journal-check"></i>
              </div>
              <h3 className="font-bold text-lg" style={{ color: darkMode ? '#F8FAFC' : '#0F172A' }}>
                Tamper-Evident Audit Trails
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: darkMode ? '#CBD5E1' : '#475569' }}>
                Every administrative review, intake adjustment, or credential scan is logged with officer ID, timestamp, and immutable SHA-256 evidence hashes.
              </p>
              <div
                className="text-xs font-mono pt-2 border-t"
                style={{
                  color: darkMode ? '#6EE7B7' : '#065F46',
                  borderColor: darkMode ? '#334155' : '#F1F5F9'
                }}
              >
                Append-Only Ledger (No Silent Deletion)
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* 7. CALL TO ACTION / INSTITUTION ACCESS BANNER             */}
      {/* ======================================================== */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-700 to-teal-700 p-8 sm:p-12 lg:p-16 text-white text-center shadow-2xl overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full border-4 border-white/10 pointer-events-none"></div>
            <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full border-4 border-white/10 pointer-events-none"></div>

            <div className="relative z-10 max-w-2xl mx-auto space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/30">
                <i className="bi bi-rocket-takeoff-fill"></i>
                SIH26263 Ready Prototype
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight brand-title">
                Experience APAARSetu Today
              </h2>

              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                Log in to test live batch enrollment validation, quota monitors, and instant QR verification. 
                <strong className="block mt-1 text-white">
                  Demo credentials for all 4 roles are provided on the Login page for 1-click evaluation.
                </strong>
              </p>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-blue-900 bg-white hover:bg-blue-50 shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <i className="bi bi-box-arrow-in-right text-base text-blue-700"></i>
                  <span>Sign In with Demo Account</span>
                </Link>

                <Link
                  to="/register"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-white/15 hover:bg-white/25 border border-white/30 backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <i className="bi bi-building-add"></i>
                  <span>Register College</span>
                </Link>
              </div>

              <div className="pt-4 text-xs text-blue-200/90 font-medium">
                Team neuroneurz • National Prototype for Smart India Hackathon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

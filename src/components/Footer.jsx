import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Footer Component (SIH26263 - APAARSetu)
 * Tailored specifically to the AICTE Student Data Management & Enrolment Verification Platform.
 * Deeply informed by official AICTE / SIH26263 specifications:
 * - AICTE Regulation Bureau (RB) & Academic Cell
 * - NEP 2020 "One Nation, One Student ID"
 * - Statutory Quota Caps (Regular, NRI 5%, FN/OCI 15%, TFW 5%)
 * - DPDP Act 2023 Consent & Privacy Rails
 * - Team neuroneurz attribution
 */
function Footer({ darkMode, isAuthenticated }) {
  const footerBg = darkMode ? '#0B1120' : '#F8FAFC'
  const footerBorder = darkMode ? '#334155' : '#E2E8F0'
  const textHeading = darkMode ? '#F8FAFC' : '#0F172A'
  const textBody = darkMode ? '#CBD5E1' : '#334155'
  const textMuted = darkMode ? '#94A3B8' : '#64748B'

  // -------------------------------------------------------------
  // 1. AUTHENTICATED DASHBOARD MINIMAL FOOTER
  // -------------------------------------------------------------
  if (isAuthenticated) {
    return (
      <footer
        data-bs-theme={darkMode ? 'dark' : 'light'}
        className="border-top py-2.5 px-3 px-lg-4 mt-auto transition-all shadow-sm"
        style={{
          backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
          borderColor: footerBorder,
          color: textBody
        }}
      >
        <div className="container-fluid">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small gap-2">
            {/* Left Brand info */}
            <div className="d-flex align-items-center gap-2">
              <strong style={{ color: darkMode ? '#60A5FA' : '#12345A' }}>APAARSetu</strong>
              <span style={{ color: textMuted }}>•</span>
              <span className="fw-medium" style={{ color: textBody }}>
                AICTE National Student Enrolment Control Room (SIH26263)
              </span>
            </div>

            {/* Center Status Indicators */}
            <div className="d-flex align-items-center gap-2">
              <span
                className="badge rounded-pill px-3 py-1 fw-semibold d-inline-flex align-items-center gap-1.5"
                style={{
                  backgroundColor: darkMode ? '#064E3B' : '#DCFCE7',
                  color: darkMode ? '#6EE7B7' : '#15803D',
                  border: `1px solid ${darkMode ? '#059669' : '#86EFAC'}`
                }}
              >
                <span
                  className="spinner-grow spinner-grow-sm"
                  style={{
                    width: '7px',
                    height: '7px',
                    color: darkMode ? '#6EE7B7' : '#15803D'
                  }}
                ></span>
                Deterministic Rule Engine Active
              </span>
              <span
                className="badge rounded-pill px-2.5 py-1 text-xs"
                style={{
                  backgroundColor: darkMode ? '#1E293B' : '#F1F5F9',
                  color: textMuted,
                  border: `1px solid ${darkMode ? '#334155' : '#E2E8F0'}`
                }}
              >
                DPDP 2023 Compliant
              </span>
            </div>

            {/* Right Attribution */}
            <div style={{ color: textMuted }} className="text-xs">
              AICTE Academic Cell • Built by{' '}
              <strong style={{ color: darkMode ? '#60A5FA' : '#2563EB' }}>
                Team neuroneurz
              </strong>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  // -------------------------------------------------------------
  // 2. PUBLIC LANDING PAGE COMPREHENSIVE FOOTER (4 COLUMNS + BAR)
  // -------------------------------------------------------------
  return (
    <footer
      data-bs-theme={darkMode ? 'dark' : 'light'}
      className="border-top mt-auto transition-all"
      style={{
        backgroundColor: footerBg,
        borderColor: footerBorder,
        color: textBody
      }}
    >
      <div className="container py-5">
        <div className="row g-4 lg:g-5">

          {/* Column 1: Platform Identity & Statutory Context */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2.5 mb-3">
              <div
                className="d-flex align-items-center justify-content-center rounded-3 bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-sm"
                style={{ width: '42px', height: '42px', minWidth: '42px' }}
              >
                <i className="bi bi-shield-lock-fill fs-5"></i>
              </div>
              <div>
                <h5 className="mb-0 fw-bold lh-1 brand-title" style={{ color: textHeading }}>
                  APAAR<span className="text-primary" style={{ color: darkMode ? '#38BDF8' : '#2563EB' }}>Setu</span>
                </h5>
                <small className="fw-semibold text-xs" style={{ color: darkMode ? '#60A5FA' : '#2563EB' }}>
                  SIH26263 • AICTE National Control Room
                </small>
              </div>
            </div>

            <p className="small mb-3 leading-relaxed" style={{ color: textBody }}>
              Centralized decision-support & verification platform enabling AICTE and technical institutions to validate student-level enrolments, enforce statutory approved intake quotas, eliminate cross-college seat hoarding, and issue tamper-proof QR degree records.
            </p>

            {/* Policy Alignment Badges from PDF */}
            <div className="d-flex flex-wrap gap-2 mb-3">
              <span
                className="badge rounded-pill px-2.5 py-1 text-xs fw-semibold"
                style={{
                  backgroundColor: darkMode ? '#1E3A8A' : '#EFF6FF',
                  color: darkMode ? '#93C5FD' : '#1D4ED8',
                  border: `1px solid ${darkMode ? '#2563EB' : '#BFDBFE'}`
                }}
              >
                NEP 2020 Mandate
              </span>
              <span
                className="badge rounded-pill px-2.5 py-1 text-xs fw-semibold"
                style={{
                  backgroundColor: darkMode ? '#134E4A' : '#F0FDFA',
                  color: darkMode ? '#5EEAD4' : '#0F766E',
                  border: `1px solid ${darkMode ? '#0F766E' : '#99F6E4'}`
                }}
              >
                DigiLocker & ABC Ready
              </span>
              <span
                className="badge rounded-pill px-2.5 py-1 text-xs fw-semibold"
                style={{
                  backgroundColor: darkMode ? '#312E81' : '#EEF2FF',
                  color: darkMode ? '#A5B4FC' : '#4338CA',
                  border: `1px solid ${darkMode ? '#4F46E5' : '#C7D2FE'}`
                }}
              >
                NDEAR Compliant
              </span>
              <span
                className="badge rounded-pill px-2.5 py-1 text-xs fw-semibold"
                style={{
                  backgroundColor: darkMode ? '#451A03' : '#FEF3C7',
                  color: darkMode ? '#FCD34D' : '#B45309',
                  border: `1px solid ${darkMode ? '#D97706' : '#FDE68A'}`
                }}
              >
                DPDP Act 2023 Shield
              </span>
            </div>

            <div className="small font-mono text-[11px]" style={{ color: textMuted }}>
              Engine: Mod-10 Verhoeff • RapidFuzz • O(1) Unique Index
            </div>
          </div>

          {/* Column 2: Navigation & Verification Modules */}
          <div className="col-lg-2 col-md-6 col-6">
            <h6
              className="fw-bold mb-3 text-uppercase"
              style={{ color: textHeading, fontSize: '0.8rem', letterSpacing: '0.05em' }}
            >
              Platform Navigation
            </h6>
            <ul className="list-unstyled small mb-0 d-flex flex-column gap-2">
              <li><a href="#" className="sih-footer-link">Home (Top)</a></li>
              <li><a href="#interactive-demo" className="sih-footer-link">Live Radar Demo</a></li>
              <li><a href="#features" className="sih-footer-link">Intake Quota Guard</a></li>
              <li><a href="#how-it-works" className="sih-footer-link">Validation Pipeline</a></li>
              <li><a href="#security" className="sih-footer-link">DPDP Privacy & Consent</a></li>
              <li>
                <Link to="/dashboard" className="sih-footer-link text-primary font-bold">
                  <i className="bi bi-speedometer2"></i>
                  <span>Direct Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/login" className="sih-footer-link">
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>College Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: AICTE Role Portals & National Registries (from PDF Architecture) */}
          <div className="col-lg-3 col-md-6 col-6">
            <h6
              className="fw-bold mb-3 text-uppercase"
              style={{ color: textHeading, fontSize: '0.8rem', letterSpacing: '0.05em' }}
            >
              Role Portals & Registries
            </h6>
            <ul className="list-unstyled small mb-0 d-flex flex-column gap-2">
              <li>
                <Link to="/dashboard" className="sih-footer-link">
                  <i className="bi bi-building text-primary"></i>
                  <span>Institution Registrar Portal</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="sih-footer-link">
                  <i className="bi bi-shield-check text-emerald-500"></i>
                  <span>AICTE Apex Regulator Desk</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="sih-footer-link">
                  <i className="bi bi-exclamation-triangle text-amber-500"></i>
                  <span>Discrepancy Review Queue</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="sih-footer-link">
                  <i className="bi bi-qr-code text-teal-500"></i>
                  <span>Public QR Verifier Gateway</span>
                </Link>
              </li>
              <li>
                <a
                  href="https://www.abc.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="sih-footer-link text-slate-500 hover:text-blue-500"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>Academic Bank of Credits (ABC)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.digilocker.gov.in"
                  target="_blank"
                  rel="noreferrer"
                  className="sih-footer-link text-slate-500 hover:text-blue-500"
                >
                  <i className="bi bi-box-arrow-up-right"></i>
                  <span>DigiLocker API Setu</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Regulatory Standards & 24x7 Support (from PDF) */}
          <div className="col-lg-3 col-md-6">
            <h6
              className="fw-bold mb-3 text-uppercase"
              style={{ color: textHeading, fontSize: '0.8rem', letterSpacing: '0.05em' }}
            >
              Compliance & Helpdesk
            </h6>
            <ul className="list-unstyled small mb-3 d-flex flex-column gap-2">
              <li className="d-flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                <i className="bi bi-book text-blue-500"></i>
                <span>AICTE Approval Process Handbook (APH)</span>
              </li>
              <li className="d-flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                <i className="bi bi-pie-chart text-amber-500"></i>
                <span>NRI ≤ 5% | FN/OCI ≤ 15% | TFW ≤ 5% (Statutory Caps)</span>
              </li>
              <li className="d-flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                <i className="bi bi-file-earmark-lock text-emerald-500"></i>
                <span>W3C Verifiable Credentials (Ed25519)</span>
              </li>
              <li className="d-flex items-center gap-1.5 text-xs" style={{ color: textMuted }}>
                <i className="bi bi-journal-text text-purple-500"></i>
                <span>Immutable SHA-256 Audit Trail</span>
              </li>
            </ul>

            {/* Official AICTE Helpdesk Card */}
            <div
              className="p-3 rounded-3 border"
              style={{
                backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                borderColor: footerBorder
              }}
            >
              <div className="d-flex align-items-center gap-2 mb-1">
                <i className="bi bi-headset text-primary fs-6"></i>
                <span className="small fw-bold" style={{ color: textHeading }}>AICTE Academic Helpdesk</span>
              </div>
              <p className="small mb-1 font-semibold" style={{ color: textBody }}>
                Toll Free: 1800-111-2026 / 011-29581000
              </p>
              <p className="text-[11px] mb-1" style={{ color: textMuted }}>
                Hours: Mon – Sat: 09:00 AM – 06:00 PM IST
              </p>
              <p className="text-[11px] mb-0 font-mono" style={{ color: darkMode ? '#93C5FD' : '#2563EB' }}>
                apaar-support@aicte-india.org
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar: National Hackathon Attribution */}
      <div
        className="py-3 border-top"
        style={{
          borderColor: footerBorder,
          backgroundColor: darkMode ? '#090E1A' : '#F1F5F9',
          color: textMuted
        }}
      >
        <div className="container">
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small gap-2 text-center text-md-start">
            <div className="fw-semibold text-xs">
              <span style={{ color: darkMode ? '#60A5FA' : '#1D4ED8' }}>AICTE Control Room</span> • 
              <span style={{ color: darkMode ? '#34D399' : '#059669' }}> Zero Seat Hoarding</span> • 
              <span style={{ color: darkMode ? '#38BDF8' : '#0284C7' }}> Instant QR Verification</span> •
              <span style={{ color: darkMode ? '#FCD34D' : '#D97706' }}> 100% Deterministic Engine</span>
            </div>
            <div className="text-xs">
              SIH26263 • AICTE Development Track • Crafted with pride by{' '}
              <strong style={{ color: darkMode ? '#60A5FA' : '#12345A' }}>Team neuroneurz</strong>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

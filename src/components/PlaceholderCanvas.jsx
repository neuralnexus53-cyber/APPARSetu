import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/**
 * PlaceholderCanvas Component (Landing Page / Work Area)
 * Features direct access buttons to:
 * - Login Page (/login)
 * - Register Page (/register)
 * - Dashboard (/dashboard)
 */
function PlaceholderCanvas({
  darkMode,
  isAuthenticated,
  setIsAuthenticated
}) {
  const navigate = useNavigate()
  const cardBg = darkMode ? '#1E293B' : '#FFFFFF'
  const cardBorder = darkMode ? '#334155' : '#E2E8F0'
  const textHeading = darkMode ? '#F8FAFC' : '#0F172A'
  const textBody = darkMode ? '#CBD5E1' : '#334155'
  const textMuted = darkMode ? '#94A3B8' : '#64748B'

  return (
    <main className="flex-grow-1 py-5 d-flex align-items-center">
      <div className="container">
        {/* Main Status & Test Card */}
        <div
          className="p-4 p-md-5 rounded-4 border text-center transition-all shadow-sm"
          style={{ backgroundColor: cardBg, borderColor: cardBorder }}
        >
          {/* Cap Icon */}
          <div
            className="d-inline-flex align-items-center justify-content-center p-3 rounded-circle bg-primary bg-opacity-10 text-primary mb-3"
            style={{ width: '70px', height: '70px', fontSize: '2rem' }}
          >
            🎓
          </div>

          {/* Status Badges */}
          <div className="d-flex justify-content-center flex-wrap gap-2 mb-3">
            <span
              className="badge rounded-pill px-3 py-2 fw-semibold"
              style={{
                backgroundColor: darkMode ? '#064E3B' : '#DCFCE7',
                color: darkMode ? '#6EE7B7' : '#15803D',
                border: `1px solid ${darkMode ? '#059669' : '#86EFAC'}`
              }}
            >
              <i className="bi bi-check-circle-fill me-1"></i> Login & Register Pages Ready
            </span>
            <span
              className="badge rounded-pill px-3 py-2 fw-semibold"
              style={{
                backgroundColor: darkMode ? '#1E3A8A' : '#EFF6FF',
                color: darkMode ? '#93C5FD' : '#1D4ED8',
                border: `1px solid ${darkMode ? '#2563EB' : '#BFDBFE'}`
              }}
            >
              <i className={`bi ${darkMode ? 'bi-moon-stars-fill' : 'bi-sun-fill'} me-1`}></i>
              {darkMode ? 'Dark Mode' : 'Light Mode'} Active
            </span>
          </div>

          <h1 className="fw-bold fs-2 mb-2 brand-title" style={{ color: textHeading }}>
            SIH26263 • APAAR ID Platform
          </h1>
          <p className="small fw-medium mb-4" style={{ color: textMuted }}>
            APAAR ID-Based Student Data Management and Verification Platform for AICTE-Approved Institutions
          </p>

          {/* Direct Access Quick-Switch Panel */}
          <div
            className="p-3 p-md-4 rounded-3 border d-inline-block text-start mb-4"
            style={{
              backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
              borderColor: cardBorder,
              maxWidth: '680px',
              width: '100%'
            }}
          >
            <h6 className="fw-bold mb-2 d-flex align-items-center gap-2" style={{ color: textHeading }}>
              <i className="bi bi-door-open-fill text-primary"></i>
              <span>Direct Page Navigation & Switching</span>
            </h6>
            <p className="small mb-3" style={{ color: textBody }}>
              Quickly test the newly created <strong>Login</strong> and <strong>Register</strong> pages, or jump directly into the <strong>Dashboard</strong>:
            </p>

            <div className="d-flex flex-wrap gap-2 align-items-center">
              {/* Go to Login */}
              <Link
                to="/login"
                className="btn btn-primary btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2 text-white shadow-sm"
              >
                <i className="bi bi-box-arrow-in-right"></i>
                <span>Open Login Page</span>
              </Link>

              {/* Go to Register */}
              <Link
                to="/register"
                className="btn btn-outline-primary btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2"
                style={{
                  backgroundColor: darkMode ? '#1E293B' : '#FFFFFF'
                }}
              >
                <i className="bi bi-building-add"></i>
                <span>Open Register Page</span>
              </Link>

              {/* Direct Access to Dashboard */}
              <button
                type="button"
                className="btn btn-success btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2 text-white shadow-sm"
                onClick={() => {
                  if (setIsAuthenticated) setIsAuthenticated(true)
                  navigate('/dashboard')
                }}
              >
                <i className="bi bi-speedometer2"></i>
                <span>Direct Access to Dashboard</span>
              </button>
            </div>
          </div>

          {/* Blank workspace note */}
          <div className="small" style={{ color: textMuted }}>
            <i className="bi bi-info-circle me-1"></i>
            Landing page placeholder. Ready for features, 3-step guide, and wireframe components.
          </div>

        </div>
      </div>
    </main>
  )
}

export default PlaceholderCanvas

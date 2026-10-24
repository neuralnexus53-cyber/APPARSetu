import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

/**
 * DashboardPlaceholder Component
 * Initial placeholder for the Authenticated Dashboard view (UI Wireframe C)
 * Shows current role, key metrics, and direct switching controls.
 */
export default function DashboardPlaceholder({
  darkMode,
  userRole,
  setUserRole,
  setIsAuthenticated
}) {
  const navigate = useNavigate()
  const cardBg = darkMode ? '#1E293B' : '#FFFFFF'
  const cardBorder = darkMode ? '#334155' : '#E2E8F0'
  const textHeading = darkMode ? '#F8FAFC' : '#0F172A'
  const textBody = darkMode ? '#CBD5E1' : '#334155'
  const textMuted = darkMode ? '#94A3B8' : '#64748B'

  const metrics = [
    { label: 'Total Enrolls', val: '1,240', sub: '1,350 Approved', color: 'text-primary' },
    { label: 'Valid Records', val: '1,150', sub: '92.7% verified', color: 'text-success' },
    { label: 'Findings / Errors', val: '90', sub: 'Action required', color: 'text-danger' },
    { label: 'Intake Capacity', val: '92.7%', sub: 'Seat utilization', color: 'text-warning' }
  ]

  return (
    <main className="flex-grow-1 py-5">
      <div className="container">
        {/* Welcome Banner */}
        <div
          className="p-4 p-md-5 rounded-4 border mb-4 shadow-sm"
          style={{ backgroundColor: cardBg, borderColor: cardBorder }}
        >
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4">
            <div>
              <div className="d-flex align-items-center gap-2 mb-1">
                <span className="badge bg-primary text-white rounded-pill px-3 py-1 fw-bold">
                  {userRole} Workspace
                </span>
                <span className="text-muted small">• ABC Institute of Technology (AY 2026-27)</span>
              </div>
              <h2 className="fw-bold mb-1 brand-title" style={{ color: textHeading }}>
                Institution Dashboard
              </h2>
              <p className="small mb-0" style={{ color: textMuted }}>
                Real-time student enrollment validation and discrepancy tracking for AICTE approval
              </p>
            </div>

            {/* Direct Switch Back to Public Landing */}
            <div className="d-flex align-items-center gap-2">
              <Link
                to="/"
                className="btn btn-sm rounded-pill px-3 py-2 fw-semibold border d-flex align-items-center gap-1"
                style={{
                  backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
                  color: textHeading,
                  borderColor: cardBorder
                }}
                onClick={() => {
                  if (setIsAuthenticated) setIsAuthenticated(false)
                }}
              >
                <i className="bi bi-arrow-left"></i>
                <span>Switch to Public Landing</span>
              </Link>

              <button
                type="button"
                className="btn btn-outline-danger btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-1"
                onClick={() => {
                  if (setIsAuthenticated) setIsAuthenticated(false)
                  navigate('/login')
                }}
              >
                <i className="bi bi-box-arrow-right"></i>
                <span>Logout</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics from Wireframe C */}
          <div className="row g-3 mb-4">
            {metrics.map((m) => (
              <div key={m.label} className="col-md-3 col-6">
                <div
                  className="p-3 rounded-3 border"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
                    borderColor: cardBorder
                  }}
                >
                  <small className="d-block mb-1" style={{ color: textMuted }}>{m.label}</small>
                  <div className={`fs-3 fw-bold ${m.color}`}>{m.val}</div>
                  <small className="text-muted" style={{ fontSize: '0.75rem' }}>{m.sub}</small>
                </div>
              </div>
            ))}
          </div>

          <div
            className="p-3 rounded-3 border text-start"
            style={{
              backgroundColor: darkMode ? '#0B1120' : '#EFF6FF',
              borderColor: darkMode ? '#1E3A8A' : '#BFDBFE'
            }}
          >
            <div className="d-flex align-items-center gap-2">
              <i className="bi bi-check2-circle text-primary fs-5"></i>
              <div>
                <strong className="small" style={{ color: textHeading }}>Dashboard View Active!</strong>
                <p className="mb-0 small" style={{ color: textBody }}>
                  You logged in successfully as <strong>{userRole}</strong>. Notice how the Navbar and Footer automatically adapted to the Dashboard minimal style!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

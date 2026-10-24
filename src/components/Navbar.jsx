import React, { useState, useEffect, useRef } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'

/**
 * Navbar Component (SIH26263)
 * - Exclusively houses the Dark / Light Mode Switcher
 * - High-contrast text colors in both Light & Dark modes
 * - Dropdowns are anchored to `right: 0, left: auto` to prevent horizontal viewport overflow
 * - Click-outside listener automatically closes dropdowns
 */
function Navbar({
  darkMode,
  setDarkMode,
  isAuthenticated,
  setIsAuthenticated,
  userRole = 'Institution Operator',
  setUserRole,
  institutionName = 'ABC Institute of Technology'
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false)

  const navRef = useRef(null)
  const navigate = useNavigate()
  const location = useLocation()

  // Close dropdowns when clicking anywhere outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setProfileDropdownOpen(false)
        setRoleDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const roles = [
    { id: 'Institution Operator', icon: 'bi-building' },
    { id: 'AICTE Reviewer', icon: 'bi-shield-check' },
    { id: 'Administrator', icon: 'bi-gear-fill' },
    { id: 'Auditor', icon: 'bi-clipboard-data' }
  ]

  // Dynamic Theme Colors
  const navBg = darkMode ? '#0F172A' : '#FFFFFF'
  const navBorder = darkMode ? '#334155' : '#E2E8F0'
  const textPrimary = darkMode ? '#F8FAFC' : '#0F172A'
  const textMuted = darkMode ? '#94A3B8' : '#475569'

  // Is currently in dashboard view
  const isDashboard = isAuthenticated || location.pathname === '/dashboard'

  return (
    <nav
      ref={navRef}
      data-bs-theme={darkMode ? 'dark' : 'light'}
      className="navbar navbar-expand-lg border-bottom fixed-top py-2 transition-all shadow-sm"
      style={{
        backgroundColor: navBg,
        borderColor: navBorder,
        width: '100%',
        maxWidth: '100vw',
        zIndex: 1050,
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="container-fluid px-2 px-sm-3 px-lg-4 d-flex align-items-center justify-content-between flex-nowrap">

        {/* ======================================================== */}
        {/* BRAND / LOGO                                             */}
        {/* ======================================================== */}
        {!isDashboard ? (
          /* Public Brand: APAARSetu */
          <Link to="/" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none me-2 me-lg-3 flex-shrink-0">
            <div
              className="d-flex align-items-center justify-content-center rounded-3 bg-gradient-to-tr from-blue-700 to-indigo-600 text-white shadow-sm"
              style={{ width: '42px', height: '42px', minWidth: '42px' }}
            >
              <i className="bi bi-shield-lock-fill fs-5"></i>
            </div>
            <div>
              <div className="d-flex align-items-center gap-2 lh-1 mb-1">
                <span className="fw-bold fs-4 brand-title tracking-tight" style={{ color: textPrimary, letterSpacing: '-0.03em' }}>
                  APAAR<span className="text-primary" style={{ color: darkMode ? '#38BDF8' : '#2563EB' }}>Setu</span>
                </span>
                <span
                  className="badge rounded-pill px-2 py-0.5 fw-bold d-none d-sm-inline-block"
                  style={{
                    backgroundColor: darkMode ? '#1E3A8A' : '#EFF6FF',
                    color: darkMode ? '#93C5FD' : '#1D4ED8',
                    border: `1px solid ${darkMode ? '#2563EB' : '#BFDBFE'}`,
                    fontSize: '0.7rem'
                  }}
                >
                  SIH26263 • AICTE
                </span>
              </div>
              <small style={{ color: textMuted, fontSize: '0.74rem', fontWeight: 500 }} className="d-block">
                by team <strong style={{ color: darkMode ? '#60A5FA' : '#2563EB' }}>neuroneurz</strong>
              </small>
            </div>
          </Link>
        ) : (
          /* Authenticated Dashboard Brand (Clean, compact, no overflow on laptops) */
          <Link to="/dashboard" className="navbar-brand d-flex align-items-center gap-2 text-decoration-none me-2 me-lg-3 flex-shrink-0">
            <div
              className="d-flex align-items-center justify-content-center rounded-3 bg-primary text-white shadow-sm"
              style={{ width: '38px', height: '38px', minWidth: '38px' }}
            >
              <i className="bi bi-mortarboard-fill fs-5"></i>
            </div>
            <div style={{ maxWidth: '240px' }}>
              <span className="fw-bold fs-5 lh-1 d-block" style={{ color: textPrimary }}>
                SIH26263
              </span>
              <small
                className="d-block text-truncate fw-semibold"
                style={{ color: textMuted, fontSize: '0.72rem', maxWidth: '170px' }}
                title={institutionName}
              >
                {institutionName}
              </small>
            </div>
          </Link>
        )}

        {/* Mobile Toggle Button (Visible ONLY on screens < 992px) */}
        <button
          className="navbar-toggler border-0 shadow-none d-lg-none p-1"
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation"
          style={{ color: textPrimary }}
        >
          <i className={`bi ${mobileMenuOpen ? 'bi-x-lg' : 'bi-list'} fs-2`}></i>
        </button>

        {/* ======================================================== */}
        {/* NAVBAR MAIN CONTENT                                      */}
        {/* ======================================================== */}
        <div
          id="mainNavbar"
          className={`d-lg-flex flex-grow-1 align-items-center justify-content-between ${
            mobileMenuOpen ? 'd-flex flex-column flex-lg-row w-100 mt-3 mt-lg-0' : 'd-none d-lg-flex'
          }`}
          style={{ visibility: 'visible' }}
        >

          {!isDashboard ? (
            /* ---------------------------------------------------- */
            /* 1. PUBLIC LANDING PAGE CONTENT                       */
            /* ---------------------------------------------------- */
            <>
              {/* Public Links: Home, Features, How it Works, Security */}
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-center gap-1 gap-lg-2">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`sih-nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <i className="bi bi-house-door-fill text-primary"></i>
                    <span>Home</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="sih-nav-link" href="#features" onClick={() => setMobileMenuOpen(false)}>
                    <i className="bi bi-grid-fill" style={{ color: '#0EA5E9' }}></i>
                    <span>Features</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="sih-nav-link" href="#how-it-works" onClick={() => setMobileMenuOpen(false)}>
                    <i className="bi bi-diagram-3-fill" style={{ color: '#F59E0B' }}></i>
                    <span>How it Works</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="sih-nav-link" href="#security" onClick={() => setMobileMenuOpen(false)}>
                    <i className="bi bi-shield-check" style={{ color: '#10B981' }}></i>
                    <span>Security</span>
                  </a>
                </li>
              </ul>

              {/* Public Actions: Mode Changer + Register + Login */}
              <div className="d-flex flex-wrap align-items-center justify-content-center gap-2 mt-2 mt-lg-0">
                {/* Mode Changer Button (Sole Location) */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="btn btn-sm rounded-pill px-3 py-2 d-flex align-items-center gap-2 fw-semibold"
                  style={{
                    backgroundColor: darkMode ? '#1E293B' : '#F8FAFC',
                    color: darkMode ? '#F8FAFC' : '#0F172A',
                    border: `1px solid ${darkMode ? '#475569' : '#CBD5E1'}`
                  }}
                  title="Toggle Light / Dark Mode"
                  type="button"
                >
                  {darkMode ? (
                    <>
                      <i className="bi bi-sun-fill text-warning fs-6"></i>
                      <span>Light</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-moon-stars-fill text-primary fs-6"></i>
                      <span>Dark</span>
                    </>
                  )}
                </button>

                {/* Register Button */}
                <Link
                  to="/register"
                  className="btn btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-1.5"
                  style={{
                    backgroundColor: darkMode ? '#1E293B' : '#F1F5F9',
                    color: darkMode ? '#E2E8F0' : '#1E293B',
                    border: `1px solid ${darkMode ? '#475569' : '#CBD5E1'}`
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className="bi bi-person-plus text-primary"></i>
                  <span>Register</span>
                </Link>

                {/* Login Button */}
                <Link
                  to="/login"
                  className="btn btn-primary btn-sm rounded-pill px-3 py-2 fw-semibold d-flex align-items-center gap-2 shadow-sm text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <i className="bi bi-box-arrow-in-right"></i>
                  <span>Login</span>
                </Link>
              </div>
            </>
          ) : (
            /* ---------------------------------------------------- */
            /* 2. AUTHENTICATED DASHBOARD CONTENT (NO OVERFLOW)     */
            /* ---------------------------------------------------- */
            <>
              {/* Center status tag (Visible only on very wide screens, hidden on laptop to save space) */}
              <div className="mx-auto my-1 my-lg-0 text-center d-none d-xxl-block">
                <span
                  className="badge rounded-pill px-2.5 py-1.5 fw-medium"
                  style={{
                    backgroundColor: darkMode ? '#1E293B' : '#F1F5F9',
                    color: darkMode ? '#93C5FD' : '#1D4ED8',
                    border: `1px solid ${darkMode ? '#334155' : '#E2E8F0'}`,
                    fontSize: '0.75rem'
                  }}
                >
                  <i className="bi bi-patch-check-fill text-success me-1"></i>
                  AICTE Verified Portal • AY 2026-27
                </span>
              </div>

              {/* Right Tools: Flex-nowrap, neatly aligned, dropdowns anchored to right: 0 */}
              <div className="d-flex align-items-center justify-content-end gap-1.5 gap-md-2 ms-auto flex-nowrap">

                {/* Direct Landing Link */}
                <Link
                  to="/"
                  className="btn btn-sm rounded-pill px-2.5 py-1.5 fw-semibold d-flex align-items-center gap-1 border flex-shrink-0"
                  style={{
                    backgroundColor: darkMode ? '#1E293B' : '#F8FAFC',
                    color: textPrimary,
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    fontSize: '0.8rem'
                  }}
                  title="Return to Public Landing Page"
                >
                  <i className="bi bi-globe text-primary"></i>
                  <span className="d-none d-xl-inline">Landing</span>
                </Link>

                {/* Notification Bell */}
                <div className="position-relative flex-shrink-0">
                  <button
                    className="btn btn-sm rounded-circle p-1 position-relative d-flex align-items-center justify-content-center"
                    style={{
                      width: '34px',
                      height: '34px',
                      backgroundColor: darkMode ? '#1E293B' : '#F8FAFC',
                      color: textPrimary,
                      border: `1px solid ${darkMode ? '#475569' : '#CBD5E1'}`
                    }}
                    title="Discrepancy Queue & Alerts"
                    type="button"
                  >
                    <i className="bi bi-bell-fill" style={{ fontSize: '0.85rem' }}></i>
                    <span
                      className="badge rounded-pill bg-danger border"
                      style={{
                        position: 'absolute',
                        top: '-3px',
                        right: '-3px',
                        fontSize: '0.6rem',
                        padding: '0.2em 0.45em',
                        borderColor: navBg
                      }}
                    >
                      5
                    </span>
                  </button>
                </div>

                {/* Role Badge Dropdown */}
                <div className="dropdown position-relative flex-shrink-0">
                  <button
                    className="btn btn-sm rounded-pill px-2.5 py-1.5 fw-semibold d-flex align-items-center gap-1.5 border bg-primary text-white shadow-sm"
                    style={{ fontSize: '0.8rem' }}
                    type="button"
                    onClick={() => {
                      setRoleDropdownOpen(!roleDropdownOpen)
                      setProfileDropdownOpen(false)
                    }}
                  >
                    <i className="bi bi-person-badge"></i>
                    <span className="text-truncate" style={{ maxWidth: '140px' }}>{userRole}</span>
                    <i className="bi bi-chevron-down" style={{ fontSize: '0.65rem' }}></i>
                  </button>

                  {roleDropdownOpen && (
                    <ul
                      className="dropdown-menu show shadow-lg p-2 mt-2"
                      style={{
                        backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                        borderColor: darkMode ? '#334155' : '#E2E8F0',
                        minWidth: '220px',
                        right: 0,
                        left: 'auto',
                        top: '100%',
                        zIndex: 1050
                      }}
                    >
                      <li className="dropdown-header small text-uppercase fw-bold" style={{ color: textMuted }}>
                        Switch Workspace Role
                      </li>
                      {roles.map(r => (
                        <li key={r.id}>
                          <button
                            className={`dropdown-item rounded-2 py-2 d-flex align-items-center gap-2 ${
                              userRole === r.id ? 'active fw-bold' : ''
                            }`}
                            style={{
                              color: userRole === r.id ? '#FFFFFF' : textPrimary
                            }}
                            onClick={() => {
                              if (setUserRole) setUserRole(r.id)
                              setRoleDropdownOpen(false)
                            }}
                          >
                            <i className={`bi ${r.icon} text-primary`}></i>
                            <span>{r.id}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Mode Changer Button (Sole Location) */}
                <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="btn btn-sm rounded-pill px-2.5 py-1.5 d-flex align-items-center gap-1.5 fw-semibold flex-shrink-0"
                  style={{
                    backgroundColor: darkMode ? '#1E293B' : '#F8FAFC',
                    color: darkMode ? '#F8FAFC' : '#0F172A',
                    border: `1px solid ${darkMode ? '#475569' : '#CBD5E1'}`,
                    fontSize: '0.8rem'
                  }}
                  title="Toggle Light / Dark Mode"
                  type="button"
                >
                  {darkMode ? (
                    <>
                      <i className="bi bi-sun-fill text-warning"></i>
                      <span className="d-none d-xl-inline">Light</span>
                    </>
                  ) : (
                    <>
                      <i className="bi bi-moon-stars-fill text-primary"></i>
                      <span className="d-none d-xl-inline">Dark</span>
                    </>
                  )}
                </button>

                {/* User Profile Menu with Settings and Logout (Opens strictly inward) */}
                <div className="dropdown position-relative flex-shrink-0">
                  <button
                    className="btn btn-sm rounded-pill px-2 py-1 d-flex align-items-center gap-1.5"
                    style={{
                      backgroundColor: darkMode ? '#1E293B' : '#F8FAFC',
                      color: textPrimary,
                      border: `1px solid ${darkMode ? '#475569' : '#CBD5E1'}`
                    }}
                    type="button"
                    onClick={() => {
                      setProfileDropdownOpen(!profileDropdownOpen)
                      setRoleDropdownOpen(false)
                    }}
                    title="User Profile & Settings"
                  >
                    <div
                      className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold"
                      style={{ width: '26px', height: '26px', fontSize: '0.72rem' }}
                    >
                      OP
                    </div>
                    <i className="bi bi-chevron-down text-muted" style={{ fontSize: '0.65rem' }}></i>
                  </button>

                  {profileDropdownOpen && (
                    <ul
                      className="dropdown-menu show shadow-lg p-2 mt-2"
                      style={{
                        backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
                        borderColor: darkMode ? '#334155' : '#E2E8F0',
                        minWidth: '220px',
                        right: 0,
                        left: 'auto',
                        top: '100%',
                        zIndex: 1050
                      }}
                    >
                      <li className="px-3 py-2 border-bottom mb-1" style={{ borderColor: darkMode ? '#334155' : '#E2E8F0' }}>
                        <strong className="d-block small" style={{ color: textPrimary }}>Operator Account</strong>
                        <span className="small text-truncate d-block" style={{ color: textMuted }}>operator@abc.edu.in</span>
                      </li>
                      <li>
                        <a className="dropdown-item rounded-2 py-2 d-flex align-items-center gap-2" style={{ color: textPrimary }} href="#profile-settings">
                          <i className="bi bi-sliders text-primary"></i>
                          <span>Profile Settings</span>
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item rounded-2 py-2 d-flex align-items-center gap-2" style={{ color: textPrimary }} href="#system-settings">
                          <i className="bi bi-gear text-secondary"></i>
                          <span>System Settings</span>
                        </a>
                      </li>
                      <li><hr className="dropdown-divider" style={{ borderColor: darkMode ? '#334155' : '#E2E8F0' }} /></li>
                      <li>
                        <button
                          className="dropdown-item rounded-2 py-2 text-danger d-flex align-items-center gap-2 fw-semibold"
                          onClick={() => {
                            if (setIsAuthenticated) setIsAuthenticated(false)
                            setProfileDropdownOpen(false)
                            navigate('/')
                          }}
                        >
                          <i className="bi bi-box-arrow-right"></i>
                          <span>Logout</span>
                        </button>
                      </li>
                    </ul>
                  )}
                </div>

              </div>
            </>
          )}

        </div>
      </div>
    </nav>
  )
}

export default Navbar

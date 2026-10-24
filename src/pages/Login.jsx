import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

/**
 * Login Component (UI Wireframe B from SIH26263 Architecture)
 * Supports:
 * - 4 Pre-filled Demo Accounts (Institution Operator, AICTE Reviewer, Admin, Auditor)
 * - Light and Dark theme responsiveness
 * - Remember me & Forgot Password
 * - Direct login transition to Dashboard
 */
export default function Login({ darkMode, setIsAuthenticated, setUserRole }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [selectedRole, setSelectedRole] = useState('Institution Operator')
  const [rememberMe, setRememberMe] = useState(true)
  const navigate = useNavigate()

  const demoAccounts = [
    {
      role: 'Institution Operator',
      email: 'institution@demo.com',
      badgeClass: darkMode ? 'bg-emerald-950 text-emerald-300 border-emerald-800' : 'bg-emerald-100 text-emerald-800 border-emerald-200',
      description: 'Upload CSV, Validation Results & Directory'
    },
    {
      role: 'AICTE Reviewer',
      email: 'aicte@demo.com',
      badgeClass: darkMode ? 'bg-blue-950 text-blue-300 border-blue-800' : 'bg-blue-100 text-blue-800 border-blue-200',
      description: 'Discrepancy Queue & Quota Monitoring'
    },
    {
      role: 'Administrator',
      email: 'admin@demo.com',
      badgeClass: darkMode ? 'bg-purple-950 text-purple-300 border-purple-800' : 'bg-purple-100 text-purple-800 border-purple-200',
      description: 'User Management, Rules & System Status'
    },
    {
      role: 'Auditor',
      email: 'auditor@demo.com',
      badgeClass: darkMode ? 'bg-amber-950 text-amber-300 border-amber-800' : 'bg-amber-100 text-amber-800 border-amber-200',
      description: 'Read-only Reports & Tamper-proof Audit'
    }
  ]

  const handleLogin = (e) => {
    e.preventDefault()
    // Set authentication state & role in parent
    if (setIsAuthenticated) setIsAuthenticated(true)
    if (setUserRole) setUserRole(selectedRole)
    // Redirect to Dashboard
    navigate('/dashboard')
  }

  const fillDemoAccount = (acc) => {
    setEmail(acc.email)
    setPassword('password123')
    setSelectedRole(acc.role)
    if (setUserRole) setUserRole(acc.role)
  }

  // Quick 1-click demo login
  const quickDemoLogin = (acc) => {
    setEmail(acc.email)
    setPassword('password123')
    setSelectedRole(acc.role)
    if (setIsAuthenticated) setIsAuthenticated(true)
    if (setUserRole) setUserRole(acc.role)
    navigate('/dashboard')
  }

  return (
    <div
      className="flex-grow-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8 transition-all"
      style={{
        backgroundColor: darkMode ? '#0B1120' : '#F5F7FB',
        color: darkMode ? '#F8FAFC' : '#0F172A'
      }}
    >
      {/* Header Info */}
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div
          className="inline-flex items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md p-3 mb-3"
          style={{ width: '52px', height: '52px' }}
        >
          <i className="bi bi-mortarboard-fill text-2xl"></i>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight brand-title" style={{ color: darkMode ? '#60A5FA' : '#12345A' }}>
          SIH26263
        </h2>
        <p className="mt-1 text-xl font-bold" style={{ color: darkMode ? '#F8FAFC' : '#172B4D' }}>
          Welcome Back
        </p>
        <p className="text-sm" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
          Sign in to access your APAAR verification dashboard
        </p>
      </div>

      {/* Main Card */}
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div
          className="py-8 px-6 shadow-lg rounded-2xl sm:px-10 border transition-all"
          style={{
            backgroundColor: darkMode ? '#1E293B' : '#FFFFFF',
            borderColor: darkMode ? '#334155' : '#E2E8F0'
          }}
        >
          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email Field */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: darkMode ? '#E2E8F0' : '#334155' }}>
                Email Address
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@domain.com"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: darkMode ? '#E2E8F0' : '#334155' }}>
                Password
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="bi bi-lock"></i>
                </span>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
                <span className="ml-2 text-sm" style={{ color: darkMode ? '#CBD5E1' : '#475569' }}>
                  Remember me
                </span>
              </label>
              <a
                href="#forgot"
                className="text-sm font-semibold text-blue-600 hover:text-blue-500 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="bi bi-box-arrow-in-right"></i>
              <span>Login as {selectedRole}</span>
            </button>
          </form>

          {/* Quick Demo Accounts Selection (Prototype Only) */}
          <div className="mt-6 pt-5 border-t" style={{ borderColor: darkMode ? '#334155' : '#E2E8F0' }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-bold uppercase tracking-wider" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
                <i className="bi bi-lightning-charge-fill text-amber-500 me-1"></i>
                Demo Accounts (Prototype Only)
              </p>
              <span className="text-[11px] text-gray-400">Click to fill</span>
            </div>

            <div className="space-y-2">
              {demoAccounts.map((acc) => (
                <div
                  key={acc.email}
                  className="w-full text-left p-2.5 rounded-lg border transition-all flex items-center justify-between gap-2 group cursor-pointer hover:shadow-sm"
                  style={{
                    backgroundColor: email === acc.email ? (darkMode ? '#1E3A8A25' : '#EFF6FF') : (darkMode ? '#0F172A' : '#F8FAFC'),
                    borderColor: email === acc.email ? '#3B82F6' : (darkMode ? '#334155' : '#E2E8F0')
                  }}
                  onClick={() => fillDemoAccount(acc)}
                >
                  <div className="flex items-center gap-2 overflow-hidden">
                    <span className={`px-2 py-0.5 rounded text-[11px] font-bold border ${acc.badgeClass}`}>
                      {acc.role}
                    </span>
                    <span className="text-xs truncate font-mono" style={{ color: darkMode ? '#CBD5E1' : '#475569' }}>
                      {acc.email}
                    </span>
                  </div>

                  {/* 1-Click Fast Login Button */}
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      quickDemoLogin(acc)
                    }}
                    className="opacity-80 group-hover:opacity-100 text-[11px] px-2 py-1 rounded bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors shrink-0"
                    title={`Log in instantly as ${acc.role}`}
                  >
                    Enter ➔
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Prominent New User Registration Section */}
          <div
            className="mt-6 pt-5 border-t text-center"
            style={{ borderColor: darkMode ? '#334155' : '#E2E8F0' }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
              New User or Institution?
            </p>
            <Link
              to="/register"
              className="w-full py-2.5 px-4 rounded-lg font-semibold text-sm border flex items-center justify-center gap-2 transition-all shadow-sm hover:shadow"
              style={{
                backgroundColor: darkMode ? '#0F172A' : '#F8FAFC',
                borderColor: darkMode ? '#3B82F6' : '#2563EB',
                color: darkMode ? '#60A5FA' : '#2563EB'
              }}
            >
              <i className="bi bi-person-plus-fill text-base"></i>
              <span>New User? Register Institution Here</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

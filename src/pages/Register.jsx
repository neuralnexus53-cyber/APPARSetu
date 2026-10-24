import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

/**
 * Register Component
 * Institution Onboarding for AICTE-approved institutions
 * Dual theme (Light / Dark) support
 */
export default function Register({ darkMode, setIsAuthenticated, setUserRole }) {
  const [formData, setFormData] = useState({
    institutionName: '',
    aicteId: '',
    email: '',
    role: 'Institution Operator',
    password: '',
  })
  const [successMessage, setSuccessMessage] = useState(false)

  const navigate = useNavigate()

  const handleRegister = (e) => {
    e.preventDefault()
    setSuccessMessage(true)
    setTimeout(() => {
      if (setIsAuthenticated) setIsAuthenticated(true)
      if (setUserRole) setUserRole(formData.role)
      navigate('/dashboard')
    }, 1200)
  }

  const fillSampleData = () => {
    setFormData({
      institutionName: 'Delhi Institute of Engineering & Technology',
      aicteId: '1-9382019481',
      email: 'principal@diet.edu.in',
      role: 'Institution Operator',
      password: 'password123'
    })
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
          <i className="bi bi-building-add text-2xl"></i>
        </div>
        <h2 className="text-3xl font-extrabold tracking-tight brand-title" style={{ color: darkMode ? '#60A5FA' : '#12345A' }}>
          SIH26263
        </h2>
        <p className="mt-1 text-xl font-bold" style={{ color: darkMode ? '#F8FAFC' : '#172B4D' }}>
          Institution Onboarding
        </p>
        <p className="text-sm" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
          Register your AICTE-approved institution for APAAR verification
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
          {successMessage && (
            <div className="mb-4 p-3 rounded-lg bg-emerald-500 bg-opacity-15 border border-emerald-500 text-emerald-600 dark:text-emerald-400 text-sm font-semibold flex items-center gap-2">
              <i className="bi bi-check-circle-fill"></i>
              <span>Registration successful! Redirecting to dashboard...</span>
            </div>
          )}

          <form className="space-y-4" onSubmit={handleRegister}>
            {/* Institution Name */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: darkMode ? '#E2E8F0' : '#334155' }}>
                Institution Name
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="bi bi-building"></i>
                </span>
                <input
                  type="text"
                  required
                  placeholder="e.g. ABC Institute of Technology"
                  value={formData.institutionName}
                  onChange={(e) => setFormData({ ...formData, institutionName: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                />
              </div>
            </div>

            {/* AICTE Approval ID */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: darkMode ? '#E2E8F0' : '#334155' }}>
                AICTE Approval ID
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="bi bi-patch-check"></i>
                </span>
                <input
                  type="text"
                  required
                  placeholder="e.g. 1-123456789"
                  value={formData.aicteId}
                  onChange={(e) => setFormData({ ...formData, aicteId: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                />
              </div>
            </div>

            {/* Official Email */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: darkMode ? '#E2E8F0' : '#334155' }}>
                Official College Email
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="bi bi-envelope"></i>
                </span>
                <input
                  type="email"
                  required
                  placeholder="principal@institution.edu.in"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                />
              </div>
            </div>

            {/* User Role Selection */}
            <div>
              <label className="block text-sm font-semibold mb-1" style={{ color: darkMode ? '#E2E8F0' : '#334155' }}>
                Workspace Role
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <i className="bi bi-person-badge"></i>
                </span>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                >
                  <option value="Institution Operator">Institution Operator (Upload & Verify)</option>
                  <option value="AICTE Reviewer">AICTE Reviewer (Cross-Inst Discrepancies)</option>
                  <option value="Administrator">Administrator (System & Rules)</option>
                  <option value="Auditor">Auditor (Compliance & Records)</option>
                </select>
              </div>
            </div>

            {/* Password */}
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
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full pl-10 pr-3 py-2.5 rounded-lg border text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{
                    backgroundColor: darkMode ? '#0F172A' : '#FFFFFF',
                    borderColor: darkMode ? '#475569' : '#CBD5E1',
                    color: darkMode ? '#F8FAFC' : '#0F172A'
                  }}
                />
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full mt-4 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className="bi bi-check2-circle text-lg"></i>
              <span>Create Institution Account</span>
            </button>
          </form>

          {/* Quick Demo Pre-fill for judges */}
          <div className="mt-4 pt-3 border-t text-center" style={{ borderColor: darkMode ? '#334155' : '#E2E8F0' }}>
            <button
              type="button"
              onClick={fillSampleData}
              className="text-xs text-blue-600 hover:underline inline-flex items-center gap-1 font-semibold"
            >
              <i className="bi bi-magic"></i> Auto-fill sample college data
            </button>
          </div>

          {/* Login Redirect Link */}
          <div className="mt-5 text-center text-sm" style={{ color: darkMode ? '#94A3B8' : '#64748B' }}>
            Already registered?{' '}
            <Link to="/login" className="text-blue-600 font-semibold hover:text-blue-500 hover:underline">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

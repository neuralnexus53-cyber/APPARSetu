import React, { useState, useEffect } from 'react'
import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Register from './pages/Register'
import DashboardPlaceholder from './pages/DashboardPlaceholder'

/**
 * Inner Application Layout wrapper
 * Synchronizes navbar and footer across all routed pages
 */
function AppContent({ darkMode, setDarkMode, isAuthenticated, setIsAuthenticated, userRole, setUserRole }) {
  const location = useLocation()
  const isDashboardRoute = isAuthenticated || location.pathname === '/dashboard'

  return (
    <div
      className="min-vh-100 d-flex flex-column transition-all"
      style={{
        backgroundColor: darkMode ? '#0B1120' : '#F5F7FB',
        color: darkMode ? '#F8FAFC' : '#0F172A',
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden',
        paddingTop: '68px'
      }}
    >
      {/* 1. Dynamic Navbar with sole location for Theme Mode Switcher */}
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAuthenticated={isDashboardRoute}
        setIsAuthenticated={setIsAuthenticated}
        userRole={userRole}
        setUserRole={setUserRole}
        institutionName="ABC Institute of Technology - AY 2026-27"
      />

      {/* 2. Routed Page Views */}
      <Routes>
        {/* Public Landing View */}
        <Route
          path="/"
          element={
            <LandingPage
              darkMode={darkMode}
              setIsAuthenticated={setIsAuthenticated}
              setUserRole={setUserRole}
            />
          }
        />

        {/* Login Page */}
        <Route
          path="/login"
          element={
            <Login
              darkMode={darkMode}
              setIsAuthenticated={setIsAuthenticated}
              setUserRole={setUserRole}
            />
          }
        />

        {/* Register Page */}
        <Route
          path="/register"
          element={
            <Register
              darkMode={darkMode}
              setIsAuthenticated={setIsAuthenticated}
              setUserRole={setUserRole}
            />
          }
        />

        {/* Authenticated Dashboard View */}
        <Route
          path="/dashboard"
          element={
            <DashboardPlaceholder
              darkMode={darkMode}
              userRole={userRole}
              setUserRole={setUserRole}
              setIsAuthenticated={setIsAuthenticated}
            />
          }
        />

        {/* Catch-all redirect to Landing */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* 3. Dynamic Footer */}
      <Footer
        darkMode={darkMode}
        isAuthenticated={isDashboardRoute}
      />
    </div>
  )
}

function App() {
  // Theme state: light vs dark
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('apar_theme')
    return saved === 'dark'
  })

  // Authentication view state
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  // Current active role
  const [userRole, setUserRole] = useState('Institution Operator')

  // Synchronize document theme attribute and persist preference
  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark')
      document.documentElement.classList.add('dark')
      document.body.style.backgroundColor = '#0B1120'
      document.body.style.color = '#F8FAFC'
      localStorage.setItem('apar_theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      document.documentElement.classList.remove('dark')
      document.body.style.backgroundColor = '#F5F7FB'
      document.body.style.color = '#0F172A'
      localStorage.setItem('apar_theme', 'light')
    }
  }, [darkMode])

  return (
    <Router>
      <AppContent
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
        userRole={userRole}
        setUserRole={setUserRole}
      />
    </Router>
  )
}

export default App

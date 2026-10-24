import React from 'react'

/**
 * ReusableCard Component (SIH26263 - APAARSetu)
 * Completely rewritten with inline styles for reliable dark/light mode.
 */
export default function ReusableCard({
  variant = 'feature',
  icon,
  badge,
  badgeColor = 'blue',
  title,
  subtitle,
  description,
  statValue,
  statTrend,
  stepNumber,
  tags = [],
  children,
  className = '',
  onClick,
  darkMode = false
}) {
  // Inline badge color presets
  const badgeStyleMap = {
    blue: darkMode
      ? { background: 'rgba(23,37,84,0.7)', color: '#93c5fd', border: '1px solid #1e40af' }
      : { background: '#eff6ff', color: '#1d4ed8', border: '1px solid #bfdbfe' },
    teal: darkMode
      ? { background: 'rgba(2,44,34,0.7)', color: '#5eead4', border: '1px solid #0f766e' }
      : { background: '#f0fdfa', color: '#0f766e', border: '1px solid #99f6e4' },
    green: darkMode
      ? { background: 'rgba(5,46,22,0.7)', color: '#6ee7b7', border: '1px solid #065f46' }
      : { background: '#ecfdf5', color: '#065f46', border: '1px solid #a7f3d0' },
    amber: darkMode
      ? { background: 'rgba(69,26,3,0.7)', color: '#fcd34d', border: '1px solid #92400e' }
      : { background: '#fffbeb', color: '#b45309', border: '1px solid #fde68a' },
    rose: darkMode
      ? { background: 'rgba(76,5,25,0.7)', color: '#fca5a5', border: '1px solid #9f1239' }
      : { background: '#fff1f2', color: '#be123c', border: '1px solid #fecdd3' },
    purple: darkMode
      ? { background: 'rgba(46,16,101,0.7)', color: '#d8b4fe', border: '1px solid #7e22ce' }
      : { background: '#faf5ff', color: '#7e22ce', border: '1px solid #e9d5ff' }
  }

  const badgeStyle = badgeStyleMap[badgeColor] || badgeStyleMap.blue

  // Card surface inline styles
  const cardStyle = {
    background: darkMode ? 'rgba(15,23,42,0.95)' : 'rgba(255,255,255,0.97)',
    border: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
    color: darkMode ? '#f1f5f9' : '#0f172a'
  }

  const iconBoxStyle = {
    background: darkMode ? '#1e293b' : '#eff6ff',
    color: darkMode ? '#60a5fa' : '#2563eb',
    border: darkMode ? '1px solid #334155' : '1px solid #dbeafe'
  }

  const subtitleColor = { color: darkMode ? '#60a5fa' : '#2563eb' }
  const titleColor = { color: darkMode ? '#f1f5f9' : '#0f172a' }
  const descColor = { color: darkMode ? '#94a3b8' : '#475569' }
  const tagStyle = {
    background: darkMode ? '#1e293b' : '#f1f5f9',
    color: darkMode ? '#cbd5e1' : '#475569',
    border: darkMode ? '1px solid #334155' : '1px solid #e2e8f0'
  }
  const tagDividerStyle = {
    borderTop: darkMode ? '1px solid rgba(30,41,59,0.8)' : '1px solid #f1f5f9'
  }

  return (
    <div
      onClick={onClick}
      className={`group relative rounded-2xl p-6 transition-all duration-300 ease-out shadow-sm hover:shadow-xl hover:-translate-y-1 ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={cardStyle}
    >
      {/* Top Header: Badge, Step, or Icon */}
      <div className="flex items-start justify-between gap-3 mb-4">
        {stepNumber && (
          <div className="flex items-center justify-center w-10 h-10 rounded-xl font-bold text-sm text-white"
            style={{ background: 'linear-gradient(135deg,#2563eb,#4f46e5)', boxShadow: '0 4px 12px rgba(37,99,235,0.25)' }}
          >
            {stepNumber}
          </div>
        )}

        {icon && !stepNumber && (
          <div
            className="flex items-center justify-center w-12 h-12 rounded-xl text-xl transition-transform duration-300 group-hover:scale-110 shadow-sm"
            style={iconBoxStyle}
          >
            {icon}
          </div>
        )}

        {badge && (
          <span
            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold"
            style={badgeStyle}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Stat Value if Stat Card */}
      {variant === 'stat' && statValue && (
        <div className="mb-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl sm:text-4xl font-extrabold tracking-tight" style={{ color: '#2563eb' }}>
              {statValue}
            </span>
            {statTrend && (
              <span
                className="text-xs font-medium px-2 py-0.5 rounded-full"
                style={darkMode
                  ? { background: 'rgba(5,46,22,0.7)', color: '#6ee7b7' }
                  : { background: '#d1fae5', color: '#065f46' }}
              >
                {statTrend}
              </span>
            )}
          </div>
        </div>
      )}

      {/* Subtitle */}
      {subtitle && (
        <p className="text-xs uppercase tracking-wider font-semibold mb-1" style={subtitleColor}>
          {subtitle}
        </p>
      )}

      {/* Title */}
      {title && (
        <h3 className="text-lg font-bold tracking-tight mb-2 transition-colors" style={titleColor}>
          {title}
        </h3>
      )}

      {/* Description */}
      {description && (
        <p className="text-sm leading-relaxed mb-4" style={descColor}>
          {description}
        </p>
      )}

      {/* Custom Body */}
      {children}

      {/* Tags Footer */}
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 pt-3 mt-auto" style={tagDividerStyle}>
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2.5 py-0.5 rounded-md font-medium"
              style={tagStyle}
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

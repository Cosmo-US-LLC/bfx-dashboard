import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`bg-[#1E1E1E] rounded-lg overflow-hidden ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ children, className = '' }) {
  return (
    <div className={`p-4 ${className}`}>
      {children}
    </div>
  )
}

export function CardTitle({ children, className = '' }) {
  return (
    <h2 className={`text-[18px] text-[#fff] font-[700] tracking-[0.139px] ${className}`}>
      {children}
    </h2>
  )
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-4 pt-0 ${className}`}>
      {children}
    </div>
  )
}

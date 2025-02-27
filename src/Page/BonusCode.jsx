"use client"

import type React from "react"
import { useState } from "react"

const BonusCode: React.FC = () => {
  const [newCode, setNewCode] = useState("")
  const [bonusPercentage, setBonusPercentage] = useState("")
  const [expiryDate, setExpiryDate] = useState("")

  return (
    <div className="min-h-screen bg-black p-6 flex items-center justify-center">
      <div className="w-full max-w-[440px] space-y-6 rounded-lg bg-[#191F1F] p-6">
        <div>
          <h2 className="text-[#fff] font-[700] text-[18px]">Bonus Code</h2>
          <p className="text-[#AAA] font-[700] text-[14px] mb-4">Active Bonus Code</p>
          <div className="space-y-2 bg-[#1E1E1D] p-[18px] rounded-[12px] border border-[#2D2C2C]">
            <div className="grid grid-cols-2 gap-x-4">
              <span className="text-[16px] text-[#C4C4C4] font-[400]">Name</span>
              <span className="text-[16px] text-[#fff] font-[500]">New20</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <span className="text-[16px] text-[#C4C4C4] font-[400]">Amount</span>
              <span className="text-[16px] text-[#fff] font-[500]">20% Bonus</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <span className="text-[16px] text-[#C4C4C4] font-[400]">Start</span>
              <span className="text-[16px] text-[#fff] font-[500]">1 February 3PM UTC</span>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <span className="text-[16px] text-[#C4C4C4] font-[400]">Expires</span>
              <span className="text-[16px] text-[#fff] font-[500]">10 February 3PM UTC</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="New Bonus Code"
            value={newCode}
            onChange={(e) => setNewCode(e.target.value)}
            className="w-full px-3 py-2 bg-[#333] border border-[#444] font-[600] rounded-md text-[#fff] placeholder-text-[#AAA]  focus:outline-none focus:ring-none focus:ring-none"
          />
          <input
            type="number"
            placeholder="Bonus Percentage"
            value={bonusPercentage}
            onChange={(e) => setBonusPercentage(e.target.value)}
            className="w-full px-3 py-2 bg-[#333] border border-[#444] font-[600] rounded-md text-[#fff] placeholder-text-[#AAA]  focus:outline-none focus:ring-none focus:ring-none"
          />
          <div className="relative">
            <input
              type="text"
              placeholder="Until When"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
              className="w-full px-3 py-2 bg-[#333] border border-[#444] font-[600] rounded-md text-[#fff] placeholder-text-[#AAA]  focus:outline-none focus:ring-none focus:ring-none"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zinc-400"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg>
          </div>
          <button className="w-full px-4 py-2 bg-[#E5AE00] txet-[16px] hover:bg-[#E5AE00]-600 text-black font-[600] rounded-md transition-colors duration-200">
            ADD NEW BONUS CODE
          </button>
        </div>
      </div>
    </div>
  )
}

export default BonusCode


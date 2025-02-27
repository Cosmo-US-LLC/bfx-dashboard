
import React from "react"

const StakingRewards: React.FC = () => {

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-[528px] p-[20px] space-y-6 rounded-lg bg-[#191F1F]">
        {/* Price Section */}
        <div className="space-y-4">
          <h2 className="text-[#fff] text-center text-[18px] font-[700]">STAKING REWARDS IN TOKEN</h2>

          <div className="space-y-[5px] ">
            <div className="text-[18px] font-[700] text-[#fff] text-center">
            Current Rewards: <span className="font-[500] text-[#E5E5E5]">39 APY/ Since 1 February 3PM UTC </span>
            </div>
          </div>

          <div className="flex items-center gap-2 py-[2px] rounded-[12px] bg-[#333] border border-[#444] h-[54px]">
            <input
              type="text"
              placeholder="New APY"
              className="flex-1 px-3 bg-[#333] rounded text-[#fff] font-[600] placeholder-[#AAA] text-[16px] focus:outline-none"
            />
            <button className="px-3 py-2 text-[#E5AE00] text-[16px] font-[600]">Change Now</button>
          </div>

          <div className="flex items-center gap-2 py-[2px] rounded-[12px] bg-[#333] border border-[#444] h-[54px]">
            <input
              type="text"
              placeholder="New Launch Price"
              className="flex-1 px-3 bg-[#333] rounded text-[#fff] font-[600] placeholder-[#AAA] text-[16px] focus:outline-none"
            />
            <button className="px-3 py-2 text-[#E5AE00] text-[16px] font-[600]">Change Now</button>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-[#fff] text-center text-[#fff] font-[700]">STAKING REWARDS IN USDT</h2>

          <div className="space-y-[5px]">
            <div className="text-[18px] font-[700] text-center text-[#fff]">
            Current Rewards: <span className="font-[500] text-[#E5E5E5]">10 APY / Since 1 February 3PM UTC </span>
            </div>
            <div className="text-[18px] font-[700] text-center text-[#fff]">
            Weekly Payment of Total USDT: <span className="font-[500] text-[#E5E5E5]">10% Since 1 February 3PM UTC </span>
            </div>
          </div>

          <div className="flex items-center gap-2 py-[2px] rounded-[12px] bg-[#333] border border-[#444] h-[54px]">
            <input
              type="text"
              placeholder="New APY"
              className="flex-1 px-3 bg-[#333] rounded text-[#fff] font-[600] placeholder-[#AAA] text-[16px] focus:outline-none"
            />
            <button className="px-3 py-2 text-[#E5AE00] text-[16px] font-[600]">Change Now</button>
          </div>
          <div className="flex items-center gap-2 py-[2px] rounded-[12px] bg-[#333] border border-[#444] h-[54px]">
            <input
              type="text"
              placeholder="Weekly Payment Rate"
              className="flex-1 px-3 bg-[#333] rounded text-[#fff] font-[600] placeholder-[#AAA] text-[16px] focus:outline-none"
            />
            <button className="px-3 py-2 text-[#E5AE00] text-[16px] font-[600]">Change Now</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StakingRewards


import React, { useState } from "react";

import lock from "../assects/Svg/lock.svg"

export default function ProjectSetting() {
  const [copied, setCopied] = useState("");
  const [liquiditySplitEnabled, setLiquiditySplitEnabled] = useState(false);
  const [stakingEnabled, setStakingEnabled] = useState(true);
  const [stakingRewardsActive, setStakingRewardsActive] = useState(false);
  const [lockedFields, setLockedFields] = useState({
    profitWallet: true,
    liquiditySplit: true,
    liquidityWallet: true,
    incomeWallet: true,
    stakingApy: false,
    referralPayout: false,
    referralBonus: false,
    minReferralSpend: false,
  });
  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(""), 2000);
  };
  const toggleLock = (field) => {
    setLockedFields((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };
  const CopyButton = ({ text, field }) => (
    <button
      onClick={() => handleCopy(text, field)}
      className="p-2 text-gray-500 hover:text-gray-400 transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied === field ? (
        <img src={lock} className="h-4 w-4" />
      ) : (
        <img src={lock} className="h-4 w-4" />
      )}
    </button>
  );
  const LockButton = ({ field, locked }) => (
    <button
      onClick={() => toggleLock(field)}
      className="p-2 text-gray-500 hover:text-gray-400 transition-colors"
      aria-label={locked ? "Unlock field" : "Lock field"}
    >
      {locked ? <img src={lock} className="h-4 w-4" /> : <img src={lock} className="h-4 w-4" />}
    </button>
  );
  const Toggle = ({ enabled, onChange }) => (
    <button
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${enabled ? "bg-blue-500" : "bg-[#2a2f2c]"}`}
    >
      <span
        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${enabled ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
  return (
    // <main className="min-h-screen  text-gray-200">
    //   <div className="max-w-[564px] p-6 bg-[#1a1f1c] mx-auto space-y-10">
    //     <section>
    //       <h2 className="text-lg font-medium mb-6">Payments</h2>
    //       <div className="space-y-5">
    //         <div className="flex items-center justify-between">
    //           <span className="text-sm">Liquidity Split Enabled</span>
    //         </div>
    //          <div className="flex items-center space-x-2">
    //          <Toggle
    //             enabled={liquiditySplitEnabled}
    //             onChange={setLiquiditySplitEnabled}
    //           />
    //           <img src={lock} alt="" />
    //          </div>

    //         <div className="space-y-4">
    //           <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //             <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Profit Wallet Address</label>
    //             <input
    //               type="text"
    //               defaultValue="0x011a5e2cd3db8d0adad3ca773cc00a95be7128e4"
    //               placeholder="Profit Wallet Address"
    //               className={`w-full bg-[#2a2f2c] rounded-md outline-none  pr-12 text-gray-300 text-sm ${lockedFields.profitWallet ? "opacity-75" : ""}`}
    //               readOnly={lockedFields.profitWallet}
    //             />
    //             <div className="absolute right-2 top-1/2 -translate-y-1/2">
    //               <LockButton
    //                 field="profitWallet"
    //                 locked={lockedFields.profitWallet}
    //               />
    //             </div>
    //           </div>

    //           <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //           <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Profit Wallet Address</label>
    //             <input
    //               type="text"
    //               defaultValue="0"
    //               placeholder="Liquidity Split Percentage"
    //               className={`w-full bg-[#2a2f2c] rounded-md  outline-none pr-12 text-gray-300 text-sm ${lockedFields.liquiditySplit ? "opacity-75" : ""}`}
    //               readOnly={lockedFields.liquiditySplit}
    //             />
    //             <div className="absolute right-2 top-1/2 -translate-y-1/2">
    //               <LockButton
    //                 field="liquiditySplit"
    //                 locked={lockedFields.liquiditySplit}
    //               />
    //             </div>
    //           </div>

    //           <div className="relative">
    //             <input
    //               type="text"
    //               placeholder="Liquidity Wallet Address"
    //               className={`w-full bg-[#2a2f2c] rounded-md py-4 px-3 outline-none pr-12 text-gray-300 text-[16px] ${lockedFields.liquidityWallet ? "opacity-75" : ""}`}
    //               readOnly={lockedFields.liquidityWallet}
    //             />
    //             <div className="absolute right-2 top-1/2 -translate-y-1/2">
    //               <LockButton
    //                 field="liquidityWallet"
    //                 locked={lockedFields.liquidityWallet}
    //               />
    //             </div>
    //           </div>

    //           <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //             <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Income Wallet Address</label>
    //             <input
    //               type="text"
    //               defaultValue="0x59516b29a02f5f801d3c87af4eae07ba775c429f"
    //               placeholder="Income Wallet Address"
    //               className={`w-full bg-[#2a2f2c] rounded-md outline-none pr-12 text-gray-300 text-sm ${lockedFields.incomeWallet ? "opacity-75" : ""}`}
    //               readOnly={lockedFields.incomeWallet}
    //             />
    //             <div className="absolute right-2 top-1/2 -translate-y-1/2">
    //               <LockButton
    //                 field="incomeWallet"
    //                 locked={lockedFields.incomeWallet}
    //               />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section>
    //       <h2 className="text-lg font-medium mb-6">Staking</h2>
    //       <div className="space-y-3">
    //         <div className="flex items-center justify-between">
    //           <span className="text-sm">Staking Enabled</span>
    //         </div>
    //           <div className="flex space-x-3">
    //           <Toggle enabled={stakingEnabled} onChange={setStakingEnabled} />
    //           <img src={lock} alt="" className="w-[18px] h-[18px]" />
    //           </div>

    //         <div className="space-y-3">
    //           <h5 className="text-sm">Staking Rewards Active</h5>
    //           <div className="flex space-x-2">
    //           <Toggle
    //             enabled={stakingRewardsActive}
    //             onChange={setStakingRewardsActive}
    //           />
    //           <img src={lock} className="w-[18px] h-[18px]" alt="" />
    //           </div>
    //         </div>

    //         <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //         <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Staking Apy</label>
    //           <input
    //             type="text"
    //             defaultValue="35"
    //             placeholder="Staking Apy"
    //             className={`w-full bg-[#2a2f2c] outline-none rounded-md pr-12 text-gray-300 text-sm ${lockedFields.stakingApy ? "opacity-75" : ""}`}
    //             readOnly={lockedFields.stakingApy}
    //           />
    //           <div className="absolute right-2 top-1/2 -translate-y-1/2">
    //             <CopyButton text="35" field="apy" />
    //           </div>
    //         </div>
    //       </div>
    //     </section>

    //     <section>
    //       <h2 className="text-lg font-medium mb-6">Referrals</h2>
    //       <div className="space-y-4">
    //         <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //         <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Default Referral Payout Percentage</label>

    //           <input
    //             type="text"
    //             defaultValue="5"
    //             placeholder="Default Referral Payout Percentage"
    //             className={`w-full bg-[#2a2f2c] rounded-md outline-none pr-12 text-gray-300 text-sm ${lockedFields.referralPayout ? "opacity-75" : ""}`}
    //             readOnly={lockedFields.referralPayout}
    //           />
    //           <div className="absolute right-2 top-1/2 -translate-y-1/2">
    //             <CopyButton text="5" field="payout" />
    //           </div>
    //         </div>
    //         <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //         <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Default Referral Token Bonus Percentage</label>
    //         <input
    //           type="text"
    //           defaultValue="5"
    //           placeholder="Default Referral Token Bonus Percentage"
    //           className={`w-full bg-[#2a2f2c] rounded-md outline-none text-gray-300 text-sm ${lockedFields.referralBonus ? "opacity-75" : ""}`}
    //           readOnly={lockedFields.referralBonus}
    //         />
    //         </div>
    //         <div className="relative bg-[#2a2f2c] rounded-md px-3 pb-3">
    //         <label htmlFor="" className="text-[10px] font-[500] text-[#AAAAAA]">Default Min Referral Spend</label>
    //         <input
    //           type="text"
    //           defaultValue="0"
    //           placeholder="Default Min Referral Spend"
    //           className={`w-full bg-[#2a2f2c] rounded-md outline-none text-gray-300 text-sm ${lockedFields.minReferralSpend ? "opacity-75" : ""}`}
    //           readOnly={lockedFields.minReferralSpend}
    //         />
    //         </div>
            
    //     <button className="text-[16px] font-[700] text-[#000] bg-[#666666] h-[49px] rounded-[8px] w-[100%]">CONFIRM UPDATE</button>
    //       </div>
    //     </section>
    //   </div>
    // </main>
    <>
    <div className="text-[40px] text-[#Fff]">
    Project Setting
    </div>
    </>
  );
}



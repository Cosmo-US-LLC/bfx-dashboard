

import React, { useState } from "react";
import { ChevronDown, ChevronUp, Copy, Plus, Search } from "lucide-react";
import edit from "../assects/Svg/edit.svg"

 const wallets = [
    {
      id: 1,
      address: "0xda662f017950514e7080abe9b4bee2b863eb",
      tokens: 0,
      joinedAt: "27/08/2024, 10:41:50",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 2,
      address: "0xda662f017950514e7080abxzcxwe9b4bb863eb",
      tokens: 0,
      joinedAt: "26/08/2024, 23:31:17",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 3,
      address: "0xda662f017950514e7080aasbbbe9b4bb863eb",
      tokens: 0,
      joinedAt: "26/08/2024, 16:56:49",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 4,
      address: "0xda662f017950514e7080abfdsze9b4bb863eb",
      tokens: 0,
      joinedAt: "26/08/2024, 16:54:48",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 5,
      address: "0xda662f017950514e7080abdaaae9b4bb863eb",
      tokens: 0,
      joinedAt: "26/08/2024, 16:53:57",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 6,
      address: "0xda662f017950514e70dasdasd80abe9b4bb863eb",
      tokens: 0,
      joinedAt: "26/08/2024, 16:50:29",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 7,
      address: "0xda662f0179505dasdas14e7080abe9b4bb863eb",
      tokens: 0,
      joinedAt: "26/08/2024, 12:02:19",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
    {
      id: 8,
      address: "0xda662f017950514e7080abasde9b4bb863eb",
      tokens: 0,
      joinedAt: "25/08/2024, 20:11:04",
      referralCode: "2JCr7ran4dD5",
      minReferralSpend: "2JCr7ran4dD5",
      totalTokens: "Default",
      referralBonus: "Default",
    },
  ];

export default function UserSearch() {
  const [searchQuery, setSearchQuery] = useState("");
  const [copied, setCopied] = useState("");
  const [expandedRows, setExpandedRows] = useState({});
  const [expandedWallets, setExpandedWallets] = useState({});
  const handleCopy = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopied(field);
    setTimeout(() => setCopied(""), 2000);
  };
  const toggleExpand = (address) => {
    setExpandedWallets((prev) => ({
      ...prev,
      [address]: !prev[address], 
    }));
  };

  const truncateAddress = (address) => {
    return `${address.slice(0, 6)}...${address.slice(-20)}`;
  };
  return (
    // <main className="min-h-screen p-8 text-white">
    //   <div className="max-w-[812px] w-full mx-auto">
    //     <div className="flex gap-4 mb-8">
    //       <input
    //         type="text"
    //         placeholder="Search wallets..."
    //         value={searchQuery}
    //         onChange={(e) => setSearchQuery(e.target.value)}
    //         className="flex-1 bg-[#1a1f1c] rounded-md p-4 text-[16px] font-[500] text-white placeholder-[#AAAAAA] outline-none"
    //       />
    //       <button className="bg-[#2590F5] hover:bg-[#2590F5]/90 rounded-[8px] w-[218.17px] h-[52px] px-8 flex items-center justify-center text-[16px] font-[800]">
    //         <span className="ml-2 text-[#000]">SEARCH</span>
    //       </button>
    //     </div>

    //     <div className="flex flex-col gap-4 ">
    //   {wallets.map((wallet) => (
    //     <div
    //       key={wallet.address}
    //       className="rounded-lg bg-[#191F1F] p-4 text-white"
    //     >
    //       <div className="flex items-center justify-between mb-2 cursor-pointer"
    //        onClick={() => toggleExpand(wallet.address)}
    //       >
    //         <div className="flex items-center gap-4">
    //           <span className="bg-[#4094C0] text-[14px] font-[700] px-3 py-1 rounded-full">
    //             doge-kombat
    //           </span>
    //           <div>
    //             <h5 className="text-[#AAAAAA] text-[14px] font-[700]">Wallet Address</h5>
    //           <span className="text-[16px] font-[600] text-[#fff]">
    //             {truncateAddress(wallet.address)}
    //           </span>
    //           </div>
    //         </div>
    //         <div className="flex items-center gap-6">
    //           <div>
    //           <h5 className="text-[#AAAAAA] text-[14px] font-[700] uppercase ">Tokens</h5>
    //           <span className="text-[16px] font-[600] text-[#fff]">{wallet.tokens}</span>
    //           </div>
    //           <div>
    //           <h5 className="text-[#AAAAAA] text-[14px] font-[700] uppercase">JOINED AT</h5>
    //           <span className="text-[16px] font-[600] text-[#fff]">{wallet.joinedAt}</span>
    //           </div>
    //           <button
    //             className="text-[#fff] hover:text-white transition-colors"
    //           >
    //             {expandedWallets[wallet.address] ? (
    //               <ChevronUp size={20} />
    //             ) : (
    //               <ChevronDown size={20} />
    //             )}
    //           </button>
    //         </div>
    //       </div>
    //       {expandedWallets[wallet.address] && (
    //         <>
    //           <div className=" mb-4 ">
    //             <label htmlFor="" className="text-[#AAAAAA] text-[14px] font-[700] uppercase">FULL WALLET ADDRESS</label>
    //            <div>
    //            <h5 className="text-[16px] font-[600] text-[#fff]">{wallet.address}</h5>
    //            </div>
    //           </div>
    //           <div className="grid grid-cols-4 md:grid-cols-4 gap-4 mb-4">
    //             <div>
    //               <div className="text-[#AAAAAA] text-[14px] font-[700] uppercase">Total tokens</div>
    //               <div className="text-[16px] font-[600] text-[#fff]">{wallet.tokens}</div>
    //             </div>
    //             <div>
    //               <div className="text-[#AAAAAA] text-[14px] font-[700] uppercase">Referred by</div>
    //               <div className="text-[16px] font-[600] text-[#fff]">Not Referred</div>
    //             </div>
    //             <div>
    //               <div className="text-[#AAAAAA] text-[14px] font-[700] uppercase">Referral code</div>
    //               <div className="text-[16px] font-[600] text-[#fff]">
    //                 {wallet.referralCode}
    //               </div>
    //             </div>
    //             <div>
    //               <div className="text-[#AAAAAA] text-[14px] font-[700] uppercase">
    //                 Min referral spend
    //               </div>
    //               <div className="flex items-center justify-between gap-2 text-[16px] font-[600] text-[#fff]">
    //                 Default
    //                <img className="w-[25px] h-[25px]" src={edit} alt="" />
    //               </div>
    //             </div>
    //           </div>
    //           <div className="flex items-center justify-between">
    //             <div className="flex items-center gap-8">
    //               <div>
    //                 <div className="text-[#AAAAAA] text-[14px] font-[700] uppercase">Total tokens</div>
    //                 <div className="flex justify-between items-center gap-2 text-[16px] font-[600] text-[#fff]">
    //                   Default
    //                <img className="w-[25px] h-[25px]" src={edit} alt="" />
                     
    //                 </div>
    //               </div>
    //               <div>
    //                 <div className="text-[#AAAAAA] text-[14px] font-[700] uppercase">Referral bonus%</div>
    //                 <div className="flex justify-between items-center gap-2 text-[16px] font-[600] text-[#fff]">
    //                   Default
    //                <img className="w-[25px] h-[25px]" src={edit} alt="" />
                     
    //                 </div>
    //               </div>
    //             </div>
    //             <button className="bg-[#2590F5] hover:bg-[#2590F5]/90 text-[#000] px-4 py-2 font-[700] rounded-md flex items-center gap-2 transition-colors">
    //               <Plus size={16} />
    //               ADD TOKENS
    //             </button>
    //           </div>
    //         </>
    //       )}
    //     </div>
    //   ))}
    // </div>
    //   </div>
    // </main>
    <>
    <div className="text-[40px] text-[#fff]">
    User Search
    </div>
    </>
  );
}

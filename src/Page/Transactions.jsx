
import React, { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";


const transactionData = [
  {
    id: "17070",
    label: "doge-kombat",
    tokensBought: "6.17K",
    tokens: "Bitcoin",
    tokenAmount: "0.0002",
    usdAmount: "$72.34",
    status: "COMPLETED",
    hash: "590484943F6",
    walletAddress: "0xddffc6726188f3e73f312c3d1b9cae1d6780ae70",
    type: "external",
    stage: "Stage 1",
    created: "23/08/2024, 19:00:27",
  },
  {
    id: "17071",
    label: "doge-kombat",
    tokensBought: "5.66K",
    tokens: "Dogecoin",
    tokenAmount: "103.00",
    usdAmount: "$11.32",
    status: "COMPLETED",
    hash: "7B84920AE1D",
    walletAddress: "0x3a9e8b5429f079c3c7b5c6cf24f4c817f4c21fc5",
    type: "internal",
    stage: "Stage 2",
    created: "23/08/2024, 18:45:12",
  },
  {
    id: "17072",
    label: "doge-kombat",
    tokensBought: "In Progress",
    tokens: "Tether",
    tokenAmount: "11.41",
    usdAmount: "$11.41",
    status: "PENDING",
    hash: "9C4726D1B3E",
    walletAddress: "0x8f7492de823a357666f8f8c2f68c3f48ce2d7a3c",
    type: "external",
    stage: "Stage 1",
    created: "23/08/2024, 18:30:55",
  },
  {
    id: "17073",
    label: "doge-kombat",
    tokensBought: "12.45K",
    tokens: "Ethereum",
    tokenAmount: "0.0075",
    usdAmount: "$145.23",
    status: "COMPLETED",
    hash: "AF3859D2C1B",
    walletAddress: "0x2e7d1f8c5a9b4c7d8e6f3a2b1c4d5e6f7a8b9c0",
    type: "internal",
    stage: "Stage 3",
    created: "23/08/2024, 18:15:33",
  },
  {
    id: "17074",
    label: "doge-kombat",
    tokensBought: "PENDING",
    tokens: "Bitcoin",
    tokenAmount: "0.0015",
    usdAmount: "$435.67",
    status: "PENDING",
    hash: "1D4B8E2F9C3",
    walletAddress: "0x9b4c7d8e6f3a2b1c4d5e6f7a8b9c0d1e2f3a4b5",
    type: "external",
    stage: "Stage 2",
    created: "23/08/2024, 18:00:19",
  },
  {
    id: "17075",
    label: "doge-kombat",
    tokensBought: "3.89K",
    tokens: "Litecoin",
    tokenAmount: "1.234",
    usdAmount: "$89.45",
    status: "COMPLETED",
    hash: "6E2F9C3A7B4",
    walletAddress: "0x4d5e6f7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3",
    type: "internal",
    stage: "Stage 1",
    created: "23/08/2024, 17:45:42",
  },
  {
    id: "17076",
    label: "doge-kombat",
    tokensBought: "In Progress",
    tokens: "Cardano",
    tokenAmount: "156.78",
    usdAmount: "$203.81",
    status: "PENDING",
    hash: "8B4C7D2E5F9",
    walletAddress: "0x7a8b9c0d1e2f3a4b5c6d7e8f9a0b1c2d3e4f5a6",
    type: "external",
    stage: "Stage 3",
    created: "23/08/2024, 17:30:15",
  },
]

export default function Transactions() {
  const [expandedRows, setExpandedRows] = useState(new Set());
  const toggleRow = (id) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };
  return (
    // <div className="w-full max-w-[762px] mx-auto p-6 bg-[#0A0A0A] text-white">
    //   <div className="flex gap-3 mb-8">
    //     <input
    //       type="text"
    //       placeholder="Wallet Address"
    //       className="flex-1 px-4 py-2.5 rounded bg-[#333333] text-white text-[16px] font-[500] placeholder-[#AAAAAA] outline-none "
    //     />
    //    <div className="bg-[#333333] rounded px-4 py-2 block">
    //     <h5 htmlFor="" className="text-[10px] font-[600] text-[#AAAAAA]">Search Field</h5>
    //    <input
    //       type="text"
    //       placeholder="Wallet Address"
    //       className="bg-[#333333] text-white text-[16px] font-[600] outline-none placeholder-[#fff]"
    //     />
    //    </div>
    //     <button className=" bg-[#2590F5] text-[#000] rounded hover:bg-[#2590F5]/90 transition-colors flex items-center justify-center text-[16px] font-[700] h-[52px] max-w-[131px] w-[100%]">
    //       SEARCH
    //     </button>
    //   </div>

    //   <div className="space-y-2">
    //     {
    //     transactionData.map((transaction) => (
    //       <div
    //         key={transaction.id}
    //         className="bg-[#191F1F] rounded-lg overflow-hidden border border-[#262626]"
    //       >
    //         <div
    //           className="px-5 py-4  hover:bg-[#373B3B] cursor-pointer flex items-center justify-between transition-colors"
    //           onClick={() => toggleRow(transaction.id)}
    //         >
    //           <div className="flex items-center gap-3 min-w-[110px]">
    //             <div className="flex items-center gap-2 px-3 py-1.5 bg-[#4094C0] text-[#fff] rounded-full">
    //               <span className="text-xs font-medium">
    //                 {transaction.label}
    //               </span>
    //             </div>
    //           </div>

    //           <div className="flex items-center gap-2">
    //             <div className="min-w-[100px] ">
    //               <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                 TOKENS BOUGHT
    //               </div>
    //               <div className="text-sm">{transaction.tokensBought}</div>
    //             </div>

    //             <div className="min-w-[60px] w-[60px]">
    //               <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                 TOKENS
    //               </div>
    //               <div className="text-sm">{transaction.tokens}</div>
    //             </div>

    //             <div className="min-w-[120px] w-[100px]">
    //               <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                 TOKEN AMOUNT
    //               </div>
    //               <div className="text-sm">{transaction.tokenAmount}</div>
    //             </div>

    //             <div className="min-w-[100px] w-[90px]">
    //               <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                 USD AMOUNT
    //               </div>
    //               <div className="text-sm">{transaction.usdAmount}</div>
    //             </div>

    //             <div className="min-w-[100px] w-[100px] flex items-center">
    //               <span
    //                 className={`w-[100px] flex justify-center items-center py-1.5 rounded-full text-xs font-medium ${transaction.status === "COMPLETED" ? "bg-[#64983D] text-[#fff]" : transaction.status === "PENDING" ? "bg-[#F9A000] text-[#fff]" : "bg-[#4D1919] text-[#EF4444]"}`}
    //               >
    //                 {transaction.status}
    //               </span>
    //             </div>

    //             <div className="w-[20px] flex justify-center">
    //               {expandedRows.has(transaction.id) ? (
    //                 <ChevronUp size={18} className="text-[#6B7280]" />
    //               ) : (
    //                 <ChevronDown size={18} className="text-[#6B7280]" />
    //               )}
    //             </div>
    //           </div>
    //         </div>

    //         {expandedRows.has(transaction.id) && transaction.hash && (
    //           <div className="p-5 border-t border-[#262626] bg-[#191F1F]">
    //             <div className="space-y-2 mb-1">
    //             <div>
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                   TRANSACTION HASH
    //                 </div>
    //                 <div className="text-sm">{transaction.hash}</div>
    //               </div>
    //               <div>
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                   WALLET ADDRESS
    //                 </div>
    //                 <div className="text-sm break-all">
    //                   {transaction.walletAddress}
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="grid grid-cols-4 ">
    //               <div>
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                   ID
    //                 </div>
    //                 <div className="text-sm">{transaction.id}</div>
    //               </div>
    //               <div className=" ">
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                 TOTAL TOKENS BOUGHT
    //                 </div>
    //                 <div className="text-sm">6,170</div>
    //               </div>
    //               <div className="ml-6">
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                   TYPE
    //                 </div>
    //                 <div className="text-sm">{transaction.type}</div>
    //               </div>
    //               <div>
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                   STAGE
    //                 </div>
    //                 <div className="text-sm">{transaction.stage}</div>
    //               </div>
    //               <div>
    //                 <div className="text-[14px] font-[700] text-[#AAAAAA] mb-1">
    //                   CREATED AT
    //                 </div>
    //                 <div className="text-sm">{transaction.created}</div>
    //               </div>
    //             </div>
    //           </div>
    //         )}
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className="text-[40px] text-[#Fff]">
   Transactions
    </div>
  );
}


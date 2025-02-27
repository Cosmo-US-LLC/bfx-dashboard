import React, { useState } from "react";
import {
  Routes,
  Route,
  NavLink,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Home from "../Page/Home.jsx";
import Bonus from "../Page/BonusCode.jsx";
import Transactions from "../Page/Transactions.jsx";
import ProjectSetting from "../Page/ProjectSetting.jsx";
import UserSearch from "../Page/UserSearch.jsx";

import {
  FaHome,
  FaProjectDiagram,
  FaSearch,
  FaMoneyCheckAlt,
  FaGift,
} from "react-icons/fa";
import menu from "../assects/Svg/menu.svg";
import Dropdown from "../components/dropdown.jsx";
import dropicon1 from "../assects/Svg/wlticon (12).svg";
import dropicon2 from "../assects/Svg/wlticon (11).svg";
import activesvg1 from "../assects/Svg/activeside (6).svg";
import activesvg2 from "../assects/Svg/activeside (5).svg";
import activesvg3 from "../assects/Svg/activeside (4).svg";
import activesvg4 from "../assects/Svg/activeside (3).svg";
import activesvg5 from "../assects/Svg/activeside (2).svg";
import activesvg6 from "../assects/Svg/activeside (1).svg";
import activesvg7 from "../assects/Svg/activeside (7).svg";
import price from "../assects/Svg/price.svg";
import stak from "../assects/Svg/stak.svg";
import bonus from "../assects/Svg/bonus.svg";
import home from "../assects/Svg/hhhome.svg";
import user from "../assects/Svg/user.svg";
import setting from "../assects/Svg/setting.svg";
import serh from "../assects/Svg/sch.svg";
import dropicon3 from "../assects/Svg/wlticon (10).svg";
import dropicon4 from "../assects/Svg/wlticon (9).svg";
import dropicon5 from "../assects/Svg/wlticon (8).svg";
import dropicon6 from "../assects/Svg/wlticon (7).svg";
import dropicon7 from "../assects/Svg/wlticon (6).svg";
import dropicon8 from "../assects/Svg/wlticon (5).svg";
import dropicon9 from "../assects/Svg/wlticon (4).svg";
import dropicon10 from "../assects/Svg/wlticon (3).svg";
import colicn1 from "../assects/Svg/sider (4).svg";
import colicn2 from "../assects/Svg/sider (3).svg";
import colicn3 from "../assects/Svg/sider (2).svg";
import colicn4 from "../assects/Svg/sider (1).svg";
import reficon from "../assects/Svg/ref.svg";
import logout from "../assects/Svg/logout.svg";
import PriceandTime from "../Page/PriceandTime.jsx";
import StakingRewards from "../Page/StakingRewards.jsx";

const Tokensoptions = [
  {
    text: "All",
  },
  {
    img: dropicon1,
    text: "ETH (ERC-20)",
  },
  {
    img: dropicon2,
    text: "Option 2",
  },
  {
    img: dropicon3,
    text: "Option 3",
  },
  {
    img: dropicon4,
    text: "Option 4",
  },
  {
    img: dropicon5,
    text: "Option 5",
  },
  {
    img: dropicon6,
    text: "Option 6",
  },
  {
    img: dropicon7,
    text: "Option 7",
  },
  {
    img: dropicon8,
    text: "Option 8",
  },
  {
    img: dropicon9,
    text: "Option 9",
  },
  {
    img: dropicon10,
    text: "Option 10",
  },
];
const Periodptions = [
  {
    text: "All",
  },
  {
    text: "1 day",
  },
  {
    text: "1 week",
  },
  {
    text: "1 month",
  },
  {
    text: "6 months",
  },
  {
    text: "1 year",
  },
  {
    text: "Quarter",
  },
];
const Timeoptions = [
  {
    text: "Auto",
  },
  {
    text: "1 day",
  },
  {
    text: "1 week",
  },
  {
    text: "1 month",
  },
  {
    text: "6 months",
  },
  {
    text: "1 year",
  },
  {
    text: "Quarter",
  },
];

const Layout = ({ onLogout }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked);
  };

  const activeClass =
    "py-2 px-4 !border-b !border-t !border-[#E5AE00] text-white flex items-center space-x-2";
  const defaultClass =
    "block py-2 px-4 text-gray-300 hover:border-b hover:border-t hover:border-[#E5AE00] flex items-center space-x-2";

  return (
    <div className="flex flex-col min-h-screen bg-[#0A0A0A]">
      <div className="flex justify-between bg-[#0A0A0A]   ">
        <div className=" relative h-screen ">
          <div
            className={`bg-[#191F1F] fixed py-6 flex flex-col justify-between text-white transition-all duration-300 min-h-screen overflow-y-auto`}
            style={{
              width: isSidebarCollapsed ? "5%" : "20%",
              top: 0,
              left: 0,
              height: "100vh",
            }}
          >
            <div>
              <div
                className={`${
                  isSidebarCollapsed
                    ? "flex justify-center p-2 py-6"
                    : "p-4 flex justify-between items-center"
                }`}
              >
                <h2
                  className={`text-[24px] font-[800] font-semibold ${
                    isSidebarCollapsed ? "hidden" : ""
                  }`}
                >
                  Pre-Sale
                </h2>
                <button
                  onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
                  className="text-gray-300 hover:text-white"
                >
                  <img src={menu} alt="Toggle Sidebar" />
                </button>
              </div>
              <div
                className={`${
                  isSidebarCollapsed
                    ? "flex justify-center px- py-2 "
                    : "p-4 flex justify-between items-center"
                }`}
              >
                <label
                  className={`${
                    isSidebarCollapsed
                      ? "flex justify-center items-center cursor-pointer  w-[92%]"
                      : "flex justify-between items-center cursor-pointer  w-[92%]"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only peer"
                    checked={isChecked}
                    onChange={handleChange}
                  />
                  <span
                    className={`text-[16px] font-[600] ${
                      isSidebarCollapsed ? "hidden" : ""
                    }`}
                  >
                    Privacy
                  </span>
                  <div
                    className={`${
                      isSidebarCollapsed ? "px-0 pt-4 pb-2" : "px-0 py-3"
                    }`}
                  >
                    {isSidebarCollapsed ? (
                      <div className="flex justify-center">
                        <div
                          className={`relative w-9 h-[20px] mx-auto  rounded-full transition-colors ${
                            isChecked ? "bg-[#E5AE00]" : "bg-[#333333]"
                          }`}
                        >
                          <div
                            className={`absolute top-[2px] left-[2px] w-4 h-4 bg-[#666666] rounded-full transition-transform ${
                              isChecked ? "translate-x-full" : ""
                            }`}
                          ></div>
                        </div>
                      </div>
                    ) : (
                      <div
                        className={`relative w-11 h-6 rounded-full transition-colors ${
                          isChecked ? "bg-[#E5AE00]" : "bg-[#333333]"
                        }`}
                      >
                        <div
                          className={`absolute top-[2px] left-[2px] w-5 h-5 bg-[#666666] rounded-full transition-transform ${
                            isChecked ? "translate-x-full" : ""
                          }`}
                        ></div>
                      </div>
                    )}
                  </div>
                </label>
              </div>
              <div className="space-y-[15px]">
                <div className={`${isSidebarCollapsed ? "px-2 mt-3" : "px-4"}`}>
                  {isSidebarCollapsed ? (
                    <span className=" flex items-center justify-center">
                      <img src={colicn1} alt="" className="" />
                    </span>
                  ) : (
                    <>
                      <h5 className="text-[16px] font-[600] pb-[5px] text-[#fff]">
                        Tokens
                      </h5>
                      <Dropdown
                        options={Tokensoptions}
                        defaultSelected={Tokensoptions[0]}
                        onSelect={""}
                        className="space-x-2 cursor-pointer bg-[#191F1F] p-2 rounded-[12px] bg-[#333333] h-[49px] pr-[2.5rem] pl-2 text-[16px]"
                      />
                    </>
                  )}
                </div>
                <div className={`${isSidebarCollapsed ? "px-2" : "px-4"}`}>
                  {isSidebarCollapsed ? (
                    <span className="flex items-center justify-center">
                      <img src={colicn2} alt="" className="" />
                    </span>
                  ) : (
                    <>
                      <h5 className="text-[16px] font-[600] pb-[5px] text-[#fff]">
                        Time Unit
                      </h5>
                      <Dropdown
                        options={Timeoptions}
                        defaultSelected={Timeoptions[0]}
                        onSelect={""}
                        className="space-x-2 cursor-pointer bg-[#191F1F] p-2 rounded-[12px] bg-[#333333] h-[49px] pr-[2.5rem] pl-2 text-[16px]"
                      />
                    </>
                  )}
                </div>
                <div className={`${isSidebarCollapsed ? "px-2" : "px-4"}`}>
                  {isSidebarCollapsed ? (
                    <span className=" flex items-center justify-center">
                      <img src={colicn3} alt="" className="" />
                    </span>
                  ) : (
                    <>
                      <h5 className="text-[16px] font-[600] pb-[5px] text-[#fff]">
                        Time Period
                      </h5>
                      <Dropdown
                        options={Periodptions}
                        defaultSelected={Periodptions[0]}
                        onSelect={""}
                        className="space-x-2 cursor-pointer bg-[#191F1F] p-2 rounded-[12px] bg-[#333333] h-[49px] pr-[2.5rem] pl-2 text-[16px]"
                      />
                    </>
                  )}
                </div>
              </div>
              <div
                className={`${
                  isSidebarCollapsed ? "px-2 pt-4 pb-2" : "px-4 py-3"
                }`}
              >
                {isSidebarCollapsed ? (
                  <span className="flex items-center justify-center">
                    <img src={colicn4} alt="" className="" />
                  </span>
                ) : (
                  <button className="rounded-[12px] bg-[#E5AE00] h-[48px] flex items-center justify-center w-[100%] text-[#000] text-[16px] font-[700]">
                    <img src={reficon} className="mr-3" alt="" />
                    REFRESH
                  </button>
                )}
              </div>
              <nav>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg1} alt="Active Icon" /> : <img src={home} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>HOME</span>}
                 </>
                  )}
                </NavLink>

                <NavLink
                  to="/project"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                   {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg2} alt="Active Icon" /> : <img src={setting} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>PROJECT SETTINGS</span>}
                 </>
                  )}
                </NavLink>

                <NavLink
                  to="/user-search"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg7} alt="Active Icon" /> : <img src={user} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>USER SEARCH</span>}
                 </>
                  )}
                </NavLink>

                <NavLink
                  to="/transactions"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg3} alt="Active Icon" /> : <img src={serh} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>TRANSACTIONS SEARCH</span>}
                 </>
                  )}
                </NavLink>

                <NavLink
                  to="/bonus"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg4} alt="Active Icon" /> : <img src={bonus} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>BONUS CODES</span>}
                 </>
                  )}
                </NavLink>

                <NavLink
                  to="/price-time"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg5} alt="Active Icon" /> : <img src={price} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>PRICE / TIME</span>}
                 </>
                  )}
                </NavLink>
                <NavLink
                  to="/staking-rewards"
                  className={({ isActive }) =>
                    `border-b border-t border-[transparent] ${
                      isActive ? activeClass : defaultClass
                    } ${isSidebarCollapsed ? "justify-center" : ""}`
                  }
                >
                  {({ isActive }) => (
                   <>
                   {isActive ? <img src={activesvg6} alt="Active Icon" /> : <img src={stak} alt="Default Icon" />}
                   {!isSidebarCollapsed && <span className={isActive ? "text-[#E5AE00]" : "text-white"}>STAKING REWARDS</span>}
                 </>
                  )}
                </NavLink>
              </nav>
            </div>

            <div
              onClick={onLogout}
              className={`text-white pt-[5rem] pb-[1rem]  text-[16px] cursor-pointer flex  font=[700] ${
                isSidebarCollapsed ? "flex justify-center px-2" : "px-4 flex"
              }`}
            >
              <img
                src={logout}
                alt=""
                className={`${isSidebarCollapsed ? "mr-3" : "mr-3"}`}
              />
              {!isSidebarCollapsed && <p>LOGOUT</p>}
            </div>
          </div>
        </div>

        <main
          className=" bg-[#0A0A0A] px-6"
          style={{
            width: isSidebarCollapsed ? "95%" : "80%",
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<ProjectSetting />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/bonus" element={<Bonus />} />
            <Route path="/user-search" element={<UserSearch />} />
            <Route path="/price-time" element={<PriceandTime />} />
            <Route path="/staking-rewards" element={<StakingRewards />} />
            <Route path="*" element={<Navigate to="/home" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default Layout;

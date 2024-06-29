"use client";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setActiveTab, avtiveTab}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <header className="px-6 border-b-[1px] pb-3">
    <nav className="flex gap-[60px] pt-4 justify-center text-[16px] font-normal text-[#707070]">
        <button className={`hover:border-[#2C8EE8] hover:border-b-[2px] hover:text-[#2C8EE8] hover:font-semibold ${avtiveTab===1? "text-[#2C8EE8] font-semibold border-[#2C8EE8] border-b-[2px]":"text-[#707070]"}`} onClick={()=>{
          setActiveTab(1)
        }}>معرفی</button>
        <button className={`hover:border-[#2C8EE8] hover:border-b-[2px] hover:text-[#2C8EE8] hover:font-semibold ${avtiveTab===2? "text-[#2C8EE8] font-semibold border-[#2C8EE8] border-b-[2px]":"text-[#707070]"}`} onClick={()=>{setActiveTab(2)}}>نظرات کاربران</button>
        <button className={`hover:border-[#2C8EE8] hover:border-b-[2px] hover:text-[#2C8EE8] hover:font-semibold ${avtiveTab===3? "text-[#2C8EE8] font-semibold border-[#2C8EE8] border-b-[2px]":"text-[#707070]"}`} onClick={()=>{setActiveTab(3)}}>مراکز درمانی</button>
        <button className={`hover:border-[#2C8EE8] hover:border-b-[2px] hover:text-[#2C8EE8] hover:font-semibold ${avtiveTab===4? "text-[#2C8EE8] font-semibold border-[#2C8EE8] border-b-[2px]":"text-[#707070]"}`} onClick={()=>{setActiveTab(4)}}>مقالات</button>
        <button className={`hover:border-[#2C8EE8] hover:border-b-[2px] hover:text-[#2C8EE8] hover:font-semibold ${avtiveTab===5? "text-[#2C8EE8] font-semibold border-[#2C8EE8] border-b-[2px]":"text-[#707070]"}`} onClick={()=>{setActiveTab(5)}}>گالری تصاویر</button>
    </nav>
    </header></>;
}

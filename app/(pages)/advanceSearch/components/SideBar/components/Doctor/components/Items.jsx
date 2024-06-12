"use client";
import React, { useState } from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const [activeBtn,setActiveBtn]=useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="flex justify-between">
        <span className="text-[12px] font-normal text-[#707070]">{title}</span>
        <span onClick={()=>{
            setActiveBtn(!activeBtn)
          }} className={`h-[22px] relative w-[44px] rounded-full ${activeBtn?'bg-[#0075ff]':"bg-[#909090]"} `}>
          <span  className={`h-[18px] w-[18px] transition-all  bg-white absolute ${activeBtn?'left-[23px]':"left-[2px]"}  top-[50%] translate-y-[-50%] rounded-full`}></span>
        </span>
        {/* 
        <label class="switch">
          <input type="checkbox" />
          <span class="slider round"></span>
        </label> */}
      </section>
    </>
  );
}

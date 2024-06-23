"use client";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title,setActiveFilter,filterName,activeFilter}) {
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
  <button onClick={()=>{
    setActiveFilter(filterName)
  }} className={`${filterName === activeFilter?'text-white bg-[#2C8EE8] border-[#2C8EE8]':'text-[#707070] bg-white border-[#D1D1D1]'} transition-all  py-[6px] px-4 border-[1px]  rounded-[10px]  `}>
    <span className="text-[14px] font-bold  ">{title}</span>
  </button>
  </>;
}

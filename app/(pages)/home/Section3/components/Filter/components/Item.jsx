"use client";
import { consoleLog_BlackOrange } from "@/helper";
import React, { useEffect } from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, onClick, active }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (

    <section onClick={onClick} className={`transition-all cursor-pointer h-full text-sm leading-[24.18px] font-medium flex justify-center items-center rounded-[10px] border border-solid border-[#D1D1D1] px-4  ${active ? "bg-[#2C8EE8] text-white" : "bg-[white] text-[#707070]"} hover:border-[#2C8EE8] hover:bg-[#2C8EE8] hover:text-white`}>
      {title}
    </section>

  );
}

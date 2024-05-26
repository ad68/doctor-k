"use client";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title }) {
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
    <>
      <section className="transition-all h-full  text-sm leading-[24.18px] font-medium flex justify-center items-center rounded-[10px] border border-solid border-[#D1D1D1] px-4 text-[#707070] hover:border-[#2C8EE8] hover:bg-[#2C8EE8] hover:text-white">
        {title}
      </section>
    </>
  );
}

"use client";
import React from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title, items}) {
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
        <section className="mt-[40px] ">
        <span className="text-[18px] font-bold text-[#505050] border-r-[2px] border-[#2C8EE8] pr-2">{title}</span>
        <section className="mt-6 grid gap-2">
        {items && items.map((item) => (
          <section key={item} className="flex gap-2 items-center">
            <div className="size-1 bg-[#2C8EE8] rounded-full"></div>
            <span className="font-bold text-[14px] text-[#705070]">{item}</span>
          </section>
        ))}
      </section>
        </section>

  </>;
}

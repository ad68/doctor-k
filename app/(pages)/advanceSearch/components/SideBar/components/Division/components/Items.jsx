"use client";
import React, { useEffect, useState } from "react";


// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({title, active, setActive, itemIndex}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  
  const toggle = () => {
    if (!active) {
      setActive(itemIndex)
    }
    else {
      setActive(0)
    }

  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <section className="flex gap-2">
    <input type="checkbox" value={title} className="size-[20px] border-[2px]" onChange={toggle} />
    <span className="text-[12px] font-normal text-[#707070]">{title}</span>
  </section>
  </>;
}

"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
  <section className="text-center flex w-[241px] h-[40px]  relative my-4">
    <input type="text" className="bg-[#F3F3F3] w-full h-full placeholder-[#909090] text-[12px] font-normal text-[#909090] rounded-[10px] px-4 enabled:border-none" value="جستجوی بیماری"  />
    <Image src='/images/icons/search-24g.svg' width={24} height={24} alt="" className="absolute left-[20px] top-[10px]"/>
  </section>
  </>;
}

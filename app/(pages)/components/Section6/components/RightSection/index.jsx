"use client";
import React from "react";
import Image from "next/image";
import Counter from "./Counter";
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
  return (
    <>
      <section className="flex gap-[18px] h-[298.29px] w-[570px]">
        <section className="h-[287px] w-[140px] gap-[7px] flex flex-col">
            <Counter title='پزشک فعال' number='1025'/>
            <Counter title='مشاوره موفق' number='2062'/>
        </section>
      <Image src='/images/doctor-pic.png' width={412} height={298.29} className="" alt=""/>
      </section>
    </>
  );
}

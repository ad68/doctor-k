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
  <section className="bg-white w-[1170px] flex justify-between h-[112px] rounded-[20px] px-[24px] items-center shadow-xl">
    <section className="flex gap-[32px] items-center">
    <Image src='/images/icons/phone.svg' width={68} height={68} alt="" />
    <section className="grid gap-[11px]">
        <h2 className="text-[24px] font-bold text-[#1F7FD7]">مشاوره‌ی اولیه با پزشک عمومی</h2>
        <h3 className="text-[16px] font-bold text-[#707070]">دسترسی سریع و آسان به صفر تا صدد خدمات بیمه‌ای</h3>
    </section>
    </section>
    <button className="bg-[#2C8EE8] w-[152px] h-[48px] rounded-[10px] hover:bg-[#1F7FD7] flex items-center justify-around">
        <span className="text-[14px] font-medium">ویزیت فوری</span>
        <Image src='/images/icons/arrow.svg' width={38} height={24} alt="" />
    </button>
  </section>
  </>;
} 

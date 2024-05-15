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
  return (
    <>
      <header className="mb-8 flex h-[41px] w-full items-center justify-between px-[5px]">
        <span className="flex  items-center gap-[14.58px] text-[24px] font-bold text-[#505050]">
          <Image
            src="/images/icons/VectorDrug.png"
            width={22.84}
            height={22.84}
            alt=""
          />
          پربازدیدترین تخصص‌ها
        </span>
        <span className="flex  items-center gap-[13.5px] text-sm font-medium text-[#2C8EE8]">
          مشاهده همه‌ی تخصص‌ها
          <Image
            src="/images/icons/Vectorsection3.png"
            width={9.46}
            height={13.5}
            alt=""
          />
        </span>
      </header>
    </>
  );
}

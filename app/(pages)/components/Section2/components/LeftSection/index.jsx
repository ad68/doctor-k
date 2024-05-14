"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ icons, title, text }) {
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
      <section className="flex h-auto w-full items-center gap-[10px] rounded-[15px] border border-solid border-[#EFEFEF] bg-white p-4">
        <Image src={icons} width={48} height={48} alt="" quality={100} />
        <section className="flex flex-col">
          <span className="text-[20px] font-bold leading-[34.55px] text-[#2C8EE8]">
            {title}
          </span>
          <span className="text-sm font-medium leading-[24.18px] text-[#707070]">
            {text}
          </span>
        </section>
      </section>
    </>
  );
}

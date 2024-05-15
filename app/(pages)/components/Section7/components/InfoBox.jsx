"use client";
import React from "react";
import Image from "next/image";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({img, text, name, title}) {
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
  <section className="mt-[24px]">
    <section className="bg-white w-[352px] h-[380px] rounded-[15px] grid justify-items-center hover:bg-[#2C8EE8] hover:text-white">
        <Image src={img} width={80} height={80} alt="" className="rounded-full mt-[-40px] p-px" />
        <p className=" text-sm font-medium w-[304px] text-justify leading-[24.18px]">{text}</p>
        <section className="grid grid-cols-2 gap-1 justify-items-center content-center">
            <Image src= '/images/icons/ic_round-star.svg' width={24} height={24} alt="" />
            <span className="text-[14px] font-light">4.9</span>
        </section>
        <h3 className="text-[16px] font-bold">{name}</h3>
        <h4 className="text-[12px] font-normal">{title}</h4>
    </section>
  </section>
  </>;
}

"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ image, name, text }) {
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
      <section className="mx-auto h-auto w-[724px] rounded-[16px] border-[1px] px-6 py-4 grid gap-2">
        <header className="flex justify-between items-center">
          <section className="flex gap-3 items-center">
            <Image
              src={image}
              width={40}
              height={40}
              alt=""
              className="rounded-full"
            />
            <span className="text-[16px] font-bold">{name}</span>
          </section>
          <section className="flex gap-4 items-center">
            <section className="flex gap-1 items-center">
                <Image src={"/images/icons/VectorStar.svg"} width={24} height={24} alt=""/>
                <span className="text-[14px] font-normal">4.8</span>
            </section>
            <section className="flex gap-1 items-center">
                <Image src={"/images/icons/clock-16.svg"} width={16} height={16} alt=""/>
                <span className="text-[12px] font-normal text-[#909090]">1403/02/23  15:53</span>
            </section>
          </section>
        </header>
        <p className="text-[14px] font-normal text-[#707070] text-justify leading-[24.18px]">{text}</p>
      </section>
    </>
  );
}

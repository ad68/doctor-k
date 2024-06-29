"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({image, title, history, feild}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <> <section className="w-[274px] h-[311px] border-[1px] rounded-[15px] grid p-3">
    <Image src={image} width={250} height={144.47} alt="" className="rounded-[9px] mx-auto w-[250px] h-[144.47px]"/>
    <section className="grid gap-4">
        <header className="flex justify-between">
            <span className="text-[14px] font-medium text-[#2C8EE8]">{feild}</span>
            <section className="flex gap-1 items-center">
                <Image src={"/images/icons/calendar.svg"} width={16} height={16} alt=""/>
                <span className="text-[12px] font-normal text-[#909090]">{history}</span>
            </section>
        </header>
        <section className="grid gap-4">

        <span className="text-[14px] font-bold">{title}</span>
        <section className="flex justify-between">

        <section className="flex gap-4">

        <section className="flex items-center gap-1">
            <Image src={"/images/icons/Frame 48096837.svg"} width={16} height={16} alt=""/>
            <span className="text-[12px] font-medium text-[#909090]">1000</span>
        </section>
        <section className="flex items-center gap-1">
            <Image src={"/images/icons/Frame 48096838.svg"} width={16} height={16} alt=""/>
            <span className="text-[12px] font-medium text-[#909090]">16k</span>
        </section>
        </section>
        <button className="flex items-center">
            <span className="text-[12px] font-medium text-[#2C8EE8]">ادامه</span>
            <Image src={"/images/icons/Arrow - Left.svg"} width={15} height={15} alt="" className="size-4"/>
        </button>
        </section>
        </section>
    </section>
    
    </section></>;
}

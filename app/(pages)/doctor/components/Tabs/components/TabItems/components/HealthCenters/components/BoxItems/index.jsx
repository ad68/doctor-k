"use client";
import React from "react";
import Image from "next/image";
import Items from "./components/Items";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({image, title, item}) {
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
  <section className="border-[1px]   rounded-[16px] py-4 px-4 flex items-center gap-6">
<Image src={image} width={109} height={109} alt="" className="rounded-[7px]"/>
<section className="grid gap-4">
    <span className="text-[18px] font-normal">{title}</span>
    <section className="flex items-center gap-1">
        <Image src={"/images/icons/clock-16.svg"} width={16} height={16} alt=""/>
        <span className="tetx-[12px] font-normal text-[#505050]">شنبه، دوشنبه، چهاشنبه</span>
    </section>

    <section className="flex flex-wrap gap-2 " >
    {item && item.map((items) => (
        <section key={item}>

            <Items name={items}  />
        </section>
        ))}
    </section>
</section>
    
    </section></>;
}

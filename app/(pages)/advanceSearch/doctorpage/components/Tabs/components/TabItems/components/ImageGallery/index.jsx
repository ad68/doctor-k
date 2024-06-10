"use client";
import React from "react";
import Image from "next/image";
import Box from "./components/Card";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";

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
  <section className="grid gap-6 mt-6 py-4">
    <header className="flex items-center gap-1">
      <Image src={"/images/icons/gallery.svg"} width={32} height={32} alt=""/>
      <span className="text-[20px] font-bold text-[#2C8EE8]">گالری تصاویر</span>
    </header>
    <section className=" flex gap-4 relative">
    <span className="absolute bottom-[30%] right-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowRight
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
      <Box image={"/images/image 23.png"}  title={"لوح تقدیر برترین پزشک منطقه 4 تهران"}/>
      <Box image={"/images/image 213.png"}  title={"لوح تقدیر برترین پزشک منطقه 4 تهران"}/>
      <Box image={"/images/image 234.png"}  title={"لوح تقدیر برترین پزشک منطقه 4 تهران"}/>
      <span className="absolute bottom-[30%] left-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowLeft
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
    </section>
  </section>
  </>;
}

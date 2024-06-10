"use client";
import React from "react";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";
import DocInfo from "./components/DocInfo";
import InfoBox from "./components/InfoBox";
import Tabs from "./components/Tabs";
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
  <section className="h-[1000px] mt-[90px] "> 
    <header className="flex gap-2 items-center text-[12px] font-normal w-[1170px] mx-auto">
        <span>صفحه‌ی اصلی</span>
            <IconArrowLeft
              fill="#2C8EE8"
              color="#2C8EE8"
              width={11}
              height={13.73}
              viewBox="0 -2 15 15"
            />
            <span>پزشکان پوست،‌ مو و زیبایی</span>
            <IconArrowLeft
              fill="#2C8EE8"
              color="#2C8EE8"
              width={11}
              height={13.73}
              viewBox="0 -2 15 15"
            />
            <span className="text-[14px] font-bold text-[#2C8EE8]">دکتر حمید شادلو</span>
    </header>
    <section className="w-full h-[72px] bg-[#2C8EE8] mt-4"></section>
    <section className="w-[1170px] mx-auto mt-[-40px] p-px">
        <section className="w-[769px] grid gap-4">
        <InfoBox image={"/images/Man1.png"} name={"دکتر حمید شادلو"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
        <Tabs />
        </section>
    </section>
  </section>
  </>;
}

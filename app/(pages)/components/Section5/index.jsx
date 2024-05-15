"use client";
import React from "react";
import Image from "next/image";
import Expertise from './components/Expertise';
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
  <section className="grid justify-items-center bg-[#F8FCFF] xl:w-full">
    <section className="xl:w-[1170px] grid gap-6">

    <header className="flex justify-between">
        <section className="flex gap-[10px]">
        <Image src='/images/icons/capsule_32.svg' width={32} height={32} alt="" />
        <h1 className="text-[24px] font-bold">پربازدیدترین تخصص‌ها</h1>
        </section>
        <button className="flex gap-[8px] items-center	">
            <span className="text-[14px] font-medium text-[#2C8EE8]">مشاهده همه‌ی تخصص‌ها</span>
            <Image src='/images/icons/gravity-ui_arrow-up.svg' height={24} width={24} alt="" />
        </button>
    </header>
    <section className="grid grid-rows-2 grid-cols-6 gap-6 h-[344px] mb-[104px]">
        <Expertise img = "/images/illust frame.png" title= "گوارش" />
        <Expertise img = "/images/illust.png" title= "روانشناسی" />
        <Expertise img = "/images/brain.png" title= "مغز و اعصاب" />
        <Expertise img = "/images/heart.png" title= "بیماری‌های ‌‌ریوی" />
        <Expertise img = "/images/kol.png" title= "کلیه(نفرولوژی)" />
        <Expertise img = "/images/images.png" title= "زنان و زایمان" />
        <Expertise img = "/images/ear.png" title= "گوش و حلق و بینی" />
        <Expertise img = "/images/bland.png" title= "خون" />
        <Expertise img = "/images/eye.png" title= "چشم پزشکی" />
        <Expertise img = "/images/teeth.png" title= "دندان پزشکی" />
        <Expertise img = "/images/ghodad.png" title= "غدد و متابولیسم" />
        <Expertise img = "/images/baby.png" title= "کودکان" />
    </section>
    </section>
  </section>
  </>;
}

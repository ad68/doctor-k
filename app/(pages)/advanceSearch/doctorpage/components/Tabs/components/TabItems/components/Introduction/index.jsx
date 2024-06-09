"use client";
import React from "react";
import Image from "next/image";
import Items from "./components/Items";
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
  <section >
    <header className="flex gap-3 mt-6">
        <Image src={"/images/icons/note-32.svg"} width={32} height={32} alt="" />
        <span className="text-[20px] font-bold text-[#2C8EE8]">معرفی</span>
    </header>
    <section>
        <p className="text-[14px] font-normal text-[#707070] leading-[24.18px] text-justify mt-6">دکتر زهرا فلاح متخصص زنان و زایمان، فارغ‌التحصیل دانشگاه علوم پزشکی ایران با بورد تخصصی با شماره نظام پزشکی 137448 از پزشک‌های برتر یزد محسوب می‌شود. ایشان تخصص زنان و زایمان دارد و به بیمارهای خود در زمینه بیماری زگیل تناسلی، اختلالات یائسگی، اختلالات جنسی، بی‌اختیاری ادراری و... مشاوره می‌دهد.</p>
        <section className="mt-[40px] ">
            <span className="text-[18px] font-bold text-[#505050] border-r-[2px] border-[#2C8EE8] pr-2">تخصص ها</span>
            <section className="mt-6 flex gap-2 items-center">
                <div className="size-1 bg-[#2C8EE8] rounded-full"></div>
                <span className="font-bold text-[14px] text-[#707070]">تخصص بیماری های پوست (درماتولوژی)</span>
            </section>
            <section className=" flex gap-2 items-center">
                <div className="size-1 bg-[#2C8EE8] rounded-full"></div>
                <span className="font-bold text-[14px] text-[#707070]">جراح پوست و زیبایی</span>
            </section>
        </section>
        <section className="mt-[40px] ">
        <span className="text-[18px] font-bold text-[#505050] border-r-[2px] border-[#2C8EE8] pr-2"> بیماری‌ها</span>
        <section className="flex gap-2 mt-6">
            <Items name={"سرطان پوست"} />
            <Items name={"التهابات پوستی"}/>
            <Items name={"اگزما"}/>
            <Items name={"خشکی پوست"}/>
            <Items name={"خشکی پوست"}/>
          </section>
          <button className="flex gap-3 items-center w-[152px] h-[48px] border-[1px] border-[#2C8EE8] rounded-[10px] mt-6 mx-auto justify-center">
            <span className="text-[14px] font-medium text-[#2C8EE8]">مشاهده بیشتر</span>
            <Image src={"/images/icons/arrow-down.svg"} width={40} height={40} alt=""/>
          </button>
        </section>
    </section>
  </section>
  </>;
}

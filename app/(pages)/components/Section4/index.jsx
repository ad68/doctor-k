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
  return <>
  <section className="grid justify-items-center bg-[#F8FCFF] xl:w-full">

  <section className="bg-[url('/images/banner.png')] bg-[length:1170px_327px] bg-no-repeat h-[327px]  w-[1170px] grid content-between my-[104px]" >
    <section className="w-[496px] pr-[48px] pt-[68px] text-[#06549E] grid gap-4">
        <h1 className="text-[28px] font-bold ">محتوای بنر درباره‌ی مشاوره‌ی آنلاین</h1>
        <p className="text-[16px] font-bold leading-[27.64px]">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است،</p>
        <button className="flex justify-around bg-white w-[221px] h-[48px] rounded-xl items-center justify-self-end ">
            <span className="text-[14px] font-medium text-[#06549E]">درخواست مشاوره آنلاین</span>
            <Image src='/images/icons/Grou.svg' width={38} height={24} alt="" />
        </button>
    </section>
    <Image src='/images/Slider.png' width={90} height={5} alt="" className="justify-self-center mb-[16px]"/>
  </section>
  </section>
  </>;
}

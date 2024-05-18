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
  <section className="bg-[#F8FCFF] xl:w-full grid grid-cols-2">
   <section className="bg-[#FFFFFF]  pr-[98px] py-[90px]">
    <section className="grid gap-[48px]  w-[552px]">
    <h1 className="text-[#2C8EE8] text-[28px] font-bold ">آیا یک مشاور و پزشک با تجربه هستید؟</h1>
    <p className="text-[14px] font-medium text-[#707070] leading-[24.18px] text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
    <button className="bg-[#2C8EE8] w-[221px] h-[48px] rounded-[10px] hover:bg-[#1F7FD7] flex items-center justify-around justify-self-end">
        <span className="text-[14px] font-medium text-white">ثبت نام به عنوان پزشک</span>
        <Image src='/images/icons/arrow.svg' width={38} height={24} alt="" />
    </button></section>
   </section>
   <section className="bg-[#C0E8FF] pt-4 flex justify-center">
    <Image src='/images/sabtnam pezeshk.svg' width={271} height={418} alt="" />
   </section>
    </section></>;
}

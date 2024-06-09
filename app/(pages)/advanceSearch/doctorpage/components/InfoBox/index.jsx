"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ image, name, field }) {
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
    <section className="grid h-[249px] w-full rounded-[20px] border-[1px] bg-white px-6 py-3">

      <section className=" flex justify-between">
        <section className="grid gap-[26px]">
          <section className="flex items-center gap-[28px]">
            <section className="grid gap-4">

            <Image
              src={image}
              width={100}
              height={100}
              alt=""
              className="rounded-full"
            />
            <section className="text-[#04A845] flex gap-2 items-baseline">
              <div className="w-[10px] h-[10px] rounded-full bg-[#04A845]"></div>
              <span className="text-[14px] font-normal">آنلاین</span>
            </section>
            </section>
            <section className="grid ">
              <section className="flex gap-2 items-center">
              <span className="text-[18px] font-bold text-[#2C8EE8]">{name}</span>
              <Image src={"/images/icons/ph_medal-light.svg"} width={16} height={16} alt=""/>
              </section>
              <span className="text-[14px] font-normal text-[#707070]">
                {field}
              </span>
              <section className="flex items-center gap-1">
                <Image
                  src={"/images/icons/ic_round-star.svg"}
                  width={24}
                  height={24}
                  alt=""
                />
                <span className="text-[14px] font-normal">4.8</span>
                <span className="text-[12px] font-normal text-[#707070]">
                  (13524 دیدگاه)
                </span>
              </section>
              <span className="text-[12px] font-normal text-[#6969EE] bg-[#F6F6FF] w-[104px] h-[29px] flex items-center justify-center rounded-[50px] mt-4">مشاوره با بیمه</span>
             {/*  <span className="mt-4 text-[12px] font-normal text-[#04A845]">
                امروز در دسترس است
              </span> */}
            </section>
          </section>

        </section>
        <button className="flex gap-1 items-start py-3">
              <span>اشتراک گذاری</span>
              <Image src={"/images/icons/share.svg"} width={24} height={24} alt=""/>
        </button>
      </section>
      <section className="w-full h-[45px] bg-[#F3F3F380] rounded-[10px] flex justify-around">
        <section className="flex gap-2 items-center">
          <Image src={"/images/icons/doctors_16.svg"} width={18} height={17} alt=""/>
          <span className="text-[12px] font-normal">کد نظام پزشکی<span className=" font-bold">:102356 </span></span>
        </section>
        <section className="flex gap-2 items-center">
          <Image src={"/images/icons/headphone_16.svg"} width={16} height={16} alt=""/>
          <span className="text-[12px] font-normal"> <span className=" font-bold">120</span> مشاوره موفق (در مدت 3 ماه)</span>
        </section>
        <section className="flex gap-2 items-center "> 
          <Image src={"/images/icons/tick-circle.svg"} width={16} height={16} alt=""/>
          <span className=" text-[12px] font-normal text-[#04A845]">
                امروز در دسترس است
              </span>
        </section>
      </section>
    </section>
    </>
  );
}

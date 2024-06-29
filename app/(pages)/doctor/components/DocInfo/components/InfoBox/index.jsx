"use client";
import React from "react";
import Image from "next/image";
import Items from "./components/Items";
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
      <section className="h-[216px] w-full rounded-[20px] border-[1px] bg-white px-6 py-3 flex justify-between">
        <section className="grid gap-[26px]">
          <section className="flex items-center gap-[28px]">
            <Image
              src={image}
              width={100}
              height={100}
              alt=""
              className="rounded-full"
            />
            <section className="grid ">
              <span className="text-[18px] font-bold">{name}</span>
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
              <span className="mt-4 text-[12px] font-normal text-[#04A845]">
                امروز در دسترس است
              </span>
            </section>
          </section>
          <section className="flex gap-2">
            <Items name={"سرطان پوست"} />
            <Items name={"التهابات پوستی"}/>
            <Items name={"اگزما"}/>
            <Items name={"خشکی پوست"}/>
            <Items name={"خشکی پوست"}/>
          </section>
        </section>
        <section className="grid justify-items-start gap-3">
            <section className="flex gap-3 items-center">
                <Image src={"/images/icons/clock-16.svg"} width={16} height={16} alt=""/>
                <span className="text-[12px] font-normal text-[#505050]">شنبه، دوشنبه، چهاشنبه</span>
            </section>
            <section className="flex gap-3 items-center">
                <Image src={"/images/icons/headphone_16.svg"} width={16} height={16} alt=""/>
                <span className="text-[12px] font-normal text-[#505050]">  120 مشاوره موفق (در مدت 3 ماه) </span>
            </section>
            <section className="flex gap-3 items-center">
                <Image src={"/images/icons/receipt-minus_16.svg"} width={16} height={16} alt=""/>
                <span className="text-[12px] font-normal text-[#505050]"> تومان<span className="text-[18px] font-bold text-[#2C8EE8]">100،000</span>
                شروع از</span>
            </section>
            <button className="w-[221px] h-[48px] bg-[#2C8EE8] text-white text-[14px] font-medium rounded-[10px] mt-6">
            مشاهده اطلاعات پزشک
            </button>
        </section>
      </section>
    </>
  );
}

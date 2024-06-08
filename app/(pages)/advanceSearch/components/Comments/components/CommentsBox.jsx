"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ image, name, text, docName }) {
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
      <section className="h-[225px] w-[502px] rounded-2xl border-[1px] bg-white px-6 py-[10px]">
        <header className="mb-4 flex items-center justify-center gap-3 border-b-[1px] border-[#2C8EE8] pb-4">
          <Image
            src={image}
            width={50}
            height={50}
            alt=""
            className="rounded-full"
          />
          <span className="text-[14px] font-bold text-[#2C8EE8]">{name}</span>
        </header>

        <section>
          <section className="flex items-center  justify-between">
            <section className="flex items-center gap-3">

            <Image
              src={"/images/icons/Group 48096040.svg"}
              width={48}
              height={48}
              alt=""
            />
            <span className="text-[18px] font-bold">{docName}</span>
            </section>
          <section className="flex gap-1 items-center">
            <Image
              src={"/images/icons/ic_round-star.svg"}
              width={24}
              height={24}
              alt=""
            />
            <span className="text-[14px] font-normal">4.8</span>
          </section>
          <section className="flex gap-2 items-center">
          <Image src={"/images/icons/clock-16.svg"} width={16} height={16} alt=""/>
          <span className="text-[12px] font-normal text-[#7B808C]">1403/02/23  15:53</span>
          </section>
          </section>
        </section>
        <p className="text-[14px] font-normal text-[#505050] leading-[24.18px] text-justify mt-4">عالی خیلی راضی بودم اگزما و حساسیت پوستی داشتم هیچ دکتری درمان نتونست کنه با یبار ویزیت خوب شدم.
        </p>
      </section>
    </>
  );
}

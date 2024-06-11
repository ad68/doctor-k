"use client";
import React from "react";
import Image from "next/image";
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
  return (
    <>
    <section>

  
      <section className="h-[285px] w-[327px] rounded-[8px] border-[1px] p-4  ">
        <header className="flex justify-between">
          <span className="text-[14px] font-bold">پلن‌های مشاوره تلفنی</span>
          <button className="flex items-center gap-1">
            <span className="text-[12px] font-normal text-[#2C8EE8]">
              راهنما
            </span>
            <Image
              src={"/images/icons/info-circle.svg"}
              width={16}
              height={16}
              alt=""
            />
          </button>
        </header>
        <p className="text-justify text-[12px] font-normal leading-[20.73px] text-[#707070] my-6">
          با انتخاب زمان مشاوره دلخواه میتوانید برای همین لحظه مشاوره را فعال
          کنید.
        </p>
        <section>
          <section className="flex items-center gap-1  mb-4">
            <Image
              src={"/images/icons/clock-16.svg"}
              width={16}
              height={16}
              alt=""
            />
            <span className="text-[12px] font-normal text-[#707070]">
              مدت زمان گفتگو:
            </span>
          </section>
          <section className="relative">
            <input
              type="text"
              className="h-[40px] w-[295px] rounded-[5px] border-[1px] px-2 text-[12px] font-normal text-[#505050]"
              value={"20 دقیقه"}
            />
            <Image
              src={"/images/icons/arrow-down.svg"}
              width={16}
              height={16}
              alt=""
              className="absolute left-[2%] top-[30%]"
            />
          </section>
          <section className="flex justify-between items-baseline">
            <section className="flex items-center gap-1 mt-6">
              <Image src={"/images/icons/receipt-minus_16.svg" } width={16} height={16} alt=""/>
              <span className="text-[12px] font-normal text-[#505050]">هزینه:</span>
            </section>
            <span className="text-[14px] font-medium"><span className="text-[24px] font-bold text-[#2C8EE8]">100،000</span> تومان</span>
          </section>
        </section>
      </section>
      <button className="h-[48px] w-full rounded-[10px] mt-4 bg-[#2C8EE8] text-white text-[14px] font-medium ">
        <span>ادامه و پرداخت</span>
        <span className="absolute bottom-[0%] left-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] ">
            <IconArrowLeft
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
      </button>
        </section>
    </>
  );
}

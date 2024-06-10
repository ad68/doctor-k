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
  return (
    <>
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
          <section>
            <section className="flex items-center gap-1 mt-6">
              <Image src={"/images/icons/receipt-minus_16.svg" } width={16} height={16} alt=""/>
              <span className="text-[12px] font-normal text-[#505050]">هزینه:</span>
            </section>
          </section>
        </section>
      </section>
    </>
  );
}

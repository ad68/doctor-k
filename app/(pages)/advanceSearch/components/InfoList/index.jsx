"use client";
import React from "react";
import Image from "next/image";
import InfoBox from "./components/InfoBox";
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
      <section className="my-8 grid h-[1558px] w-[872px] gap-6 ">
        <header className="flex justify-between items-center">
          <section className="flex text-[14px] font-bold">
            <span className="text-[#505050]">12 نتیجه برای جستجوی</span>
            <span className="text-[#2C8EE8]">“متخصص پوست، مو و زیبایی”</span>
          </section>
          <button className="flex h-[40px] w-[212px] items-center  justify-center gap-1 rounded-[10px] border-[1px] border-[#EFEFEF] bg-white">
            <Image
              src="/images/icons/sort_24.svg"
              width={24}
              height={24}
              alt=""
            />
            <span className="text-[14px] font-normal text-[#505050]">
              مرتب سازی بر اساس
            </span>
            <Image
              src="/images/icons/arrow-down.svg"
              width={24}
              height={24}
              alt=""
            />
          </button>
        </header>

        <InfoBox image={"/images/Man1.png"} name={"دکتر حمید شادلو"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
        <InfoBox image={"/images/doctor pic.png"} name={"دکتر علی عباسی"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
        <InfoBox image={"/images/doctor pic1.png"} name={"دکتر زهره امیری"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
        <InfoBox image={"/images/Man1.png"} name={"دکتر حمید شادلو"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
        <InfoBox image={"/images/doctor pic.png"} name={"دکتر علی عباسی"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
        <InfoBox image={"/images/doctor pic1.png"} name={"دکتر زهره امیری"} field={"تخصص بیماری های پوست (درماتولوژی)"}/>
      <section className="mx-auto">
            <button className="flex justify-around w-[221px] h-[48px] rounded-[10px] border-[1px] border-[#2C8EE8] px-8 items-center">
            <span className="text-[14px] font-medium text-[#2C8EE8]">نمایش پزشکان بیشتر</span>
            <Image
              src="/images/icons/arrow-down.svg"
              width={24}
              height={24}
              alt=""
            />
        </button>
      </section>
      </section>
    </>
  );
}

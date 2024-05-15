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
      <section className="flex h-[264px] w-[489px] flex-col ">
        <h2 className="mb-6 text-[28px] font-bold leading-[48.36px] text-[#505050]">
          مشاوره آنلاین با بیش از 1000 پزشک متخصص در تمامی تخصص‌ها
        </h2>
        <span className="text-sm leading-[24.18px] text-[#707070] text-justify mb-12">
          شما می‌توانید در سریع‌ترین زمان از سراسر ایران از پزشکان در تخصص‌های
          مختلف وقت مشاوره رزرو کرده و قبل از مراجعه حضوری مشاوره بگیرید.
        </span>
        <button className="flex self-end w-[221px] text-white h-[48px] bg-[#2C8EE8] justify-center items-center gap-2 rounded-[10px] text-sm font-medium">
          <span>درخواست مشاوره آنلاین</span>
          <span className="bg-white rounded-[50px] w-[38px] h-[24px] flex justify-center items-center ">
            <Image src="/images/icons/arrowLeft.svg" width={16} height={16} alt="" className=""/>
          </span>
        </button>
      </section>
    </>
  );
}

"use client";
import React from "react";
import Icon from "@ant-design/icons/lib/components/Icon";
import { IconArrowLeft } from "@/common/icons";
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
        <button className="flex self-end w-[221px] text-white h-[48px] bg-[#2C8EE8] hover:bg-[#2581D6] justify-center items-center gap-2 rounded-[10px] text-sm font-medium">
          <span>درخواست مشاوره آنلاین</span>
          <span className="bg-white rounded-[50px] w-[38px] h-[24px] flex justify-center items-center ">
          <IconArrowLeft fill='#2C8EE8' color='#2C8EE8' width={13.5}  height={20} viewBox='0 -3 15 15' />
          </span>
        </button>
      </section>
    </>
  );
}

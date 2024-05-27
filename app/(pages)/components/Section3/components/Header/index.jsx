"use client";
import React from "react";
import Image from "next/image";
import Icon from "@ant-design/icons/lib/components/Icon";
import { IconArrowLeft } from "@/common/icons";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ }) {
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
      <header className="mb-8 flex h-[41px] w-full items-center justify-between px-[5px]">
        <span className="flex  items-center gap-[14.58px] text-[24px] font-bold text-[#505050]">
          <Image
            src="/images/icons/VectorDrug.png"
            width={22.84}
            height={22.84}
            alt=""
          />
          پربازدیدترین تخصص‌ها
        </span>
        <span className="flex  items-center gap-[13.5px] text-sm font-medium text-[#2C8EE8]">
          مشاهده همه‌ی تخصص‌ها
          <IconArrowLeft fill='#2C8EE8' color='#2C8EE8' width={11} height={18} viewBox='0 -2 15 15' />
        </span>
      </header>
    </>
  );
}

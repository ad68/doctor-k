"use client";
import React from "react";
import Image from "next/image";
import Icon from "@ant-design/icons/lib/components/Icon";
import { IconCircle } from "@/common/icons";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ img, name, rate, status, background }) {
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
    <section className="h-[232px]  flex justify-center items-end">
      <section className="flex flex-col h-[185px] w-[203px] items-center border border-solid border-[#EFEFEF] rounded-[15px]">
        <Image src={img} width={80} height={80} alt="" className="mt-[-47px]" />
        <section className="flex flex-col text-sm justify-center items-center mt-[37px] gap-2">
          <span>{name}</span>
          <span className="flex gap-[10px] items-center"> <Image src='/images/icons/VectorStar.svg' alt="" width={17.11} height={16.36} className="" /> {rate}</span>
          <span className="flex gap-[10px] items-center"><section className={`${background} w-[10px] h-[10px] rounded-full`}></section>{status}</span>
        </section>
      </section>
    </section>

  );
}

"use client";
import React from "react";
import Image from "next/image";
import FiltersItem from "./components/FiltersItem";
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
      <section className="grid gap-4 border-b-[1px] pb-4">
        <header className="flex justify-between">
          <section className="flex items-center gap-[10px]">
            <Image
              src="/images/icons/filter_24.svg"
              width={24}
              height={24}
              alt=""
            />
            <span className="text-[14px] font-bold text-[#2C8EE8]">
              فیلتر ها
            </span>
            <span className="flex size-4 items-center justify-center rounded bg-[#2C8EE8] text-[12px] font-extrabold text-white">
              8
            </span>
          </section>
          <button className="twxt-[12px] font-normal text-[#2C8EE8]">
            حذف{" "}
          </button>
        </header>
        <section className=" grid grid-cols-2 gap-2">
            <FiltersItem title={"دارای بیمه"}/>
            <FiltersItem title={"دارای بیمه"}/>
            <FiltersItem title={"تخصص"}/>
            <FiltersItem title={"تخصص"}/>
        </section>
      </section>
    </>
  );
}

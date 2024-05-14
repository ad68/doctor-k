"use client";
import React from "react";
import SearchBox from "./components/SeachBox";
import AdvanceSearch from "./components/AdvanceSearch";
import Counseling from "./components/Counseling";
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
      <section className="grid justify-items-center h-[686px] w-full bg-[url('/images/Group.png')] bg-[length:100%_686px] bg-no-repeat text-white">
        <section className="w-[532px] pt-[181px] ">
          <h1 className="pb-[16px] text-center text-[40px] font-black leading-[69.09px]">
            دکترکا <br /> مشاوره آنلاین پزشکان ایران
          </h1>
          <h2 className="mb-6 text-center text-[16px] font-bold leading-[27.64px]">
            {" "}
            در هر تخصصی میتوانید از پزشکان منتخب با دکتر کا در کمترین زمان ممکن
            از سراسر ایران نوبت مشاوره دریافت کنید.
          </h2>
          <SearchBox />
          <AdvanceSearch />
        </section>
      </section>
        <section className="mt-[-60px] p-px flex justify-center">
        <Counseling />
        </section>
    </>
  );   
}

"use client";
import React from "react";
import RightSection from "./components/RightSection";
import LeftSection from "./components/LeftSection";

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
      <section className=" mt-[-60px] flex items-center justify-center bg-[#F8FCFF] xl:h-[589px] xl:w-full">
        <section className="relative flex h-[326px] w-[1127px] items-center justify-between">
          <RightSection />
          <LeftSection />
        </section>
      </section>
    </>
  );
}

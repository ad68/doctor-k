"use client";
import React from "react";
import LeftSection from "./components/LeftSection";
import RightSection from "./components/RightSection";
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
      <section className=" h-[426.29px] w-full gap-[48px] bg-[#2C8EE8] py-[64px] ">
        <section className="mx-auto flex h-full w-[1170px] items-center justify-between">
          <RightSection />
          <LeftSection />
        </section>
      </section>
    </>
  );
}

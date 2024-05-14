"use client";
import React from "react";
import RightSection from "./components/RightSection";
import LeftSection from "./components/LeftSection";
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
      <section className="relative mt-[-60px] flex items-center justify-center bg-[#F8FCFF] xl:h-[589px] xl:w-full">
        <button className="absolute left-[13px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#2C8EE8] shadow-[0px_4px_20px_0px_#00000033]">
          <Image
            src="/images/icons/headphone.svg"
            width={40}
            height={40}
            alt=""
            className=""
          />
        </button>

        <section className="relative flex h-[326px] w-[1127px] items-center justify-between">
          <RightSection />
          <LeftSection />
        </section>
      </section>
    </>
  );
}

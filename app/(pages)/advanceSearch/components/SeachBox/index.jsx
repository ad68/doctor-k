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
  return <>
  <section className="w-[1170px] mx-auto flex justify-center items-center">

  <section className="text-center flex w-[616px] h-[40px]  relative my-4 ">
    <input type="text" className="bg-white w-full h-full placeholder-[#2C8EE8] text-[#2C8EE8] rounded-[15px] px-5 enabled:border-none" placeholder="جستجوی پزشکان، بیماری‌ها و تخصص‌ها ..." />
    <Image src='/images/icons/Group.svg' width={24} height={24} alt="" className="absolute left-[20px] top-[10px]"/>
  </section>
  </section>
  </>;
}

"use client";
import React from "react";
import Image from "next/image";
import CommentItems from "./components/CommentItems"
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
  <section className="py-6">
    <header className="flex gap-3 items-center">
      <Image src={"/images/icons/message-text.svg"} width={32} height={32} alt=""/>
      <span className="text-[20px] font-bold text-[#2C8EE8]">نظرات کاربران </span>
      </header>
      <section>
        <CommentItems/>
      </section>
      </section></>;
}

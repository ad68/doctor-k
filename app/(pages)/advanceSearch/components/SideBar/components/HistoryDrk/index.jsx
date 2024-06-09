"use client";
import React from "react";
import Items from "./components/Items";
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
    <section className="mt-4 grid gap-4 ">
    <header className="flex justify-between">
        <span className="text-[14px] font-bold">سابقه همکاری با دکترکا </span>
        <button>

        <Image src="/images/icons/arrow-down_24.svg" width={24} height={24} alt=""/>
        </button>
    </header>
    <section className="grid gap-4">
        <Items title="طلایی" />
        <Items title=" نقره ای"/>
        <Items title="برنز" />
        
    </section>
  </section>
  </>;
}

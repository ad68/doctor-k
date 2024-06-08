"use client";
import React from "react";
import Image from "next/image";
import Search from "./components/Search";
import Items from "./components/Items";
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
  <section className="mt-4 grid gap-4 border-b-[1px] pb-4">
    <header className="flex justify-between">
        <span className="text-[14px] font-bold">دسته بندی</span>
        <button>

        <Image src="/images/icons/arrow-down_24.svg" width={24} height={24} alt=""/>
        </button>
    </header>
    <Search />
    <section className="grid gap-4">
        <Items title={"متخصص پوست و مو"} />
        <Items title={"جراح چشم"}/>
        <Items title={"ومتخصص چشم پزشکی"}/>
        <Items title={"متخصص کودکان و اطفال"}/>
        <button className="flex justify-center items-center">
            <span className="text-[12px] font-normal text-[#2C8EE8]">مشاهده بیشتر</span>
            <Image src="/images/icons/arrow-down.svg" width={24} height={24} alt=""/>

        </button>
    </section>
  </section>
  </>;
}

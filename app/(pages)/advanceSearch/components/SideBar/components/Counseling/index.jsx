"use client";
import React from "react";
import Items from "./components/Items";
import Image from "next/image";
import { FilterColaps } from "@/common";
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
      <FilterColaps
        title="نوع مشاوره"
        height="h-[204px]"
        border="border-b border-solid border-[#EFEFEF]"
      >
        <section className="mt-4 grid gap-4">
        <Items title="تلفنی" />
          <Items title="متنی " />
          <Items title={"آنلاین ویدیوئی"} />
          <Items title={"آنلاین صوتی"} />
        </section>
      </FilterColaps>
    </>
  );
}

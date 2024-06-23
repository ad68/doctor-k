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
  return <>
    <FilterColaps title='رشته تخصصی' height='h-[130px]' border='border-b border-solid border-[#EFEFEF]'>
  <section className="grid mt-4 gap-4">
  <Items title="تخصص" />
  <Items title="فوق تخصص"/>
      
    </section>
 </FilterColaps> 

  </>;
}

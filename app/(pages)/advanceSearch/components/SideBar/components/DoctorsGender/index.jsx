"use client";
import React, { useState } from "react";
import Image from "next/image";
import Items from "./components/Items";
import { FilterColaps } from "@/common";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [radioValue,setRadioValue]=useState(1)
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
        title="جنسیت پزشک"
        height="h-[176px]"
        border="border-b border-solid border-[#EFEFEF]"
      >
        <section className="mt-4 grid gap-4">
          <Items radioValue={radioValue} setRadioValue={setRadioValue} title="خانم" index={1} />
          <Items radioValue={radioValue} setRadioValue={setRadioValue} title="آقا" index={2}/>
          <Items radioValue={radioValue} setRadioValue={setRadioValue} title="هردو" index={3}/>
        </section>
      </FilterColaps>
    </>
  );
}

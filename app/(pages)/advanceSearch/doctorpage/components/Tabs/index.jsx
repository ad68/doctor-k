"use client";
import React from "react";
import TabButton from "./components/TabButton";
import TabItems from "./components/TabItems";
import { useState, useEffect } from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [avtiveTab, setActiveTab] = useState(1)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(avtiveTab)
  }, [avtiveTab])
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
    <section className="bg-white h-auto px-6 py-3 border-[1px] w-full rounded-[20px]">
      <TabButton setActiveTab={setActiveTab} avtiveTab={avtiveTab} />
      <TabItems activeTab={avtiveTab} />
    </section>
  </>;
}

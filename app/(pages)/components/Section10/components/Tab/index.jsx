"use client";
import React from "react";
import TabItems from './components/TabItems';
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setActiveFilter,activeFilter}) {
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
  <section className="flex gap-4 justify-center">

    <TabItems activeFilter={activeFilter} setActiveFilter={setActiveFilter} filterName='Physician' title='تیم پزشکی' />
    <TabItems activeFilter={activeFilter} setActiveFilter={setActiveFilter} filterName='Patient' title='بیمار' />
    <TabItems activeFilter={activeFilter} setActiveFilter={setActiveFilter} filterName='Support' title='پشتیبانی' />
  </section>
  </>;
}

"use client";
import React from "react";
import Image from "next/image";
import Filters from "./components/Filters";
import Division from "./components/Division";
import Field from "./components/Field";
import Counseling from "./components/Counseling";
import Illness from "./components/Illness";
import DoctorsGender from "./components/DoctorsGender";
import Doctor from "./components/Doctor";
import HistoryDrk from "./components/HistoryDrk";

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
      <aside className="my-8 h-auto rounded-2xl border-[1px] border-[#EFEFEF] bg-white px-[14.5px] py-6 xl:w-[274px]">
        <Filters />
        <Division />
        <Field />
        <Counseling />
        <Illness />
        <DoctorsGender />
        <Doctor />
        <HistoryDrk />
      </aside>
    </>
  );
}

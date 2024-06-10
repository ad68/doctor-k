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
  return <>
  <aside className="xl:w-[274px] border-[1px] border-[#EFEFEF] bg-white h-[1558px] rounded-2xl my-8 px-[14.5px] py-6">
    <Filters/>
    <Division/>
    <Field />
    <Counseling />
    <Illness />
    <DoctorsGender />
    <Doctor />
    <HistoryDrk />
  </aside>
  </>;
}

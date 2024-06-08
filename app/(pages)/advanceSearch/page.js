"use client";
import React from "react";
import SideBar from "./components/SideBar";
import SearchBox from "./components/SeachBox";
import InfoList from "./components/InfoList";
import Commenst from "./components/Comments";
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
  <section className="h-[3000px]">
    <header className="w-full bg-[#2C8EE8] h-[72px] mt-[72px]  ">
        <SearchBox />
    </header>
    <section className="flex justify-between gap-6 w-[1170px] mx-auto">
        
    <SideBar />
    <InfoList />
    </section>
    <Commenst />
    </section></>;
}

"use client";
import React from "react";
import SideBar from "./components/SideBar";
import SearchBox from "./components/SeachBox";
import InfoList from "./components/InfoList";
import Commenst from "./components/Comments";
import Question from "./components/Question";
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
      <section className="">
        <header className="mt-[72px] h-[72px] w-full bg-[#2C8EE8]  ">
          <SearchBox />
        </header>
        <section className="mx-auto h-auto items-start flex w-[1170px] justify-between gap-6">
          <SideBar />
          <InfoList />
        </section>
        <Commenst />
        <Question />
      </section>
    </>
  );
}

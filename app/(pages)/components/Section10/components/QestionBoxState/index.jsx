"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Descripion from "./components/Descripion";
import { consoleLog_Blue, consoleLog_Red, consoleLog_yellow } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ question, des, tabIndex, activeTab, setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (activeTab === tabIndex) {
      setOpen(true)
    }
    else {
      setOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab])
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const toggle = () => {
    if (!open) {
      setActiveTab(tabIndex)
    }
    else {
      setActiveTab(0)
    }

  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`${open ? "grid" : ""} w-full items-center xl:gap-6 border-[1px] border-[#EFEFEF] rounded-[10px] bg-white dark:bg-black dark:text-white xl:px-6 xl:py-4 py-6 px-4`}
      >
        <section className={`flex w-full gap-2 transition-all`}>
          <button onClick={toggle}>
            <Image
              src={open ? "/images/icons/collapse_24.svg" : "/images/icons/expand_24.svg"}
              width={24}
              height={24}
              alt=""
            />
          </button>
          <h5 className={`xl:text-[16px] text-[14px] xl:font-bold font-medium text-[#505050] dark:text-white `}>
            {question}
          </h5>
        </section>
        <section className="">{open ? <Descripion des={des} /> : ""}</section>
      </section>
    </>
  );
}



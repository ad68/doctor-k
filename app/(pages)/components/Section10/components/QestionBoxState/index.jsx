"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Descripion from "./components/Descripion";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ item, tabIndex, activeTab, setActiveTab }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [open, setOpen] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (activeTab === tabIndex) {
      setOpen(true);
    } else {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeTab]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const toggle = () => {
    if (!open) {
      setActiveTab(tabIndex);
    } else {
      setActiveTab(0);
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`${open ? "grid" : ""} w-full items-center rounded-[10px] border-[1px] border-[#EFEFEF] bg-white px-4 py-6 xl:gap-6 xl:px-6 xl:py-4 dark:bg-black dark:text-white`}
      >
        <section className={`flex w-full gap-2 transition-all`}>
          <button onClick={toggle}>
            <Image
              src={
                open
                  ? "/images/icons/collapse_24.svg"
                  : "/images/icons/expand_24.svg"
              }
              width={24}
              height={24}
              alt=""
            />
          </button>
          <h5
            className={`text-[14px] font-medium text-[#505050] xl:text-[16px] xl:font-bold dark:text-white `}
          >
            {item?.question}
          </h5>
        </section>
        <section className="">{open ? <Descripion item={item} /> : ""}</section>
      </section>
    </>
  );
}

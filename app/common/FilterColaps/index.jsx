"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ children, height, title, border }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [collapse, setCollapse] = useState(false);
  const [showContent, setShowContent] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (collapse) {
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    } else {
      setShowContent(false);
    }
  }, [collapse]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section
        className={`w-full ${border}  py-4 transition-all duration-700 ${collapse ? height : "h-[56px]"}`}
      >
        <section className="flex justify-between">
          <span className="text-[14px] font-bold">{title}</span>
          <Image
            onClick={() => {
              setCollapse(!collapse);
            }}
            src="/images/icons/arrow-down_24.svg"
            width={24}
            height={24}
            alt=""
            className="transition-all"
            style={{ transform: collapse ? "rotate(0)" : "rotate(180deg)" }}
          />
        </section>
        {showContent && (
          <>
            {children}
          </>
        )}
      </section>
    </>
  );
}

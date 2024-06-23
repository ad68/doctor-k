"use client";
import React, { useState } from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ title, setRadioValue, index, radioValue }) {
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
      <section className="flex gap-2">
        <section
          onClick={() => {
            setRadioValue(index);
          }}
          className="flex h-5 w-5 items-center justify-center rounded-full border-[1.5px] border-solid border-[#909090]"
        >
          <section className={`h-[14px] w-[14px] rounded-full ${radioValue===index?'bg-[#0075ff]':'bg-white'} `}></section>
        </section>
        {/* <input type="radio" value={title}  className="size-[20px] border-[2px] rounded-full"/> */}
        <span className="text-[12px] font-normal text-[#707070]">{title}</span>
      </section>
    </>
  );
}

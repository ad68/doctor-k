"use client";
import React, { useEffect } from "react";
import Item from "./components/Item";
import { consoleLog_BlackYellow } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ list, setFilter, filter }) {
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
      <section className="h-9 w-full flex gap-4 mb-8">
        {list.map((item, index) => (
          <Item active={item.name === filter.name} onClick={() => setFilter(item)} key={index} title={item.name} />
        ))}
        {/*   <Item title="پوست و مو" />
        <Item title="قلب و عروق" />
        <Item title="گوارش" />
        <Item title="گوش و حلق و بینی" />
        <Item title="عفونی" />
        <Item title="داخلی" />
        <Item title="کودکان" />
        <Item title="پاتولوژی(آسیب شناسی)" />
        <Item title="کودکان" />
        <Item title="مغز و اعصاب" /> */}
      </section>
    </>
  );
}

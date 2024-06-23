"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Search from "./components/Search";
import Items from "./components/Items";
import { FilterColaps } from "@/common";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [active, setActive] = useState(0);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <FilterColaps
        title="دسته بندی"
        border="border-b border-solid border-[#EFEFEF]"
        height='h-[221px]'
      >
        <section className="relative my-4 flex h-[40px]  w-full text-center">
          <input
            type="text"
            className="h-full w-full rounded-[10px] bg-[#F3F3F3] px-4 text-[12px] font-normal text-[#909090] placeholder-[#909090] enabled:border-none"
            value="جستجوی بیماری"
          />
          <Image
            src="/images/icons/search-24g.svg"
            width={24}
            height={24}
            alt=""
            className="absolute left-[20px] top-[10px]"
          />
        </section>
        <section className="grid gap-4">
          <Items
            title={"متخصص پوست و مو"}
            active={active}
            setActive={setActive}
            itemIndex={1}
          />
          <Items
            title={"جراح پوست"}
            active={active}
            setActive={setActive}
            itemIndex={2}
          />
          <Items
            title={"جراح پلاستیک و زیبایی"}
            active={active}
            setActive={setActive}
            itemIndex={3}
          />
         
        </section>
      </FilterColaps>
    </>
  );
}

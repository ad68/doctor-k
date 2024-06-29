"use client";
import React from "react";
import Image from "next/image";
import Box from "./components/Card";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";

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
      <section className="my-6 grid gap-6">
        <header className="flex items-center gap-1">
          <Image
            src={"/images/icons/note-321.svg"}
            width={32}
            height={32}
            alt=""
          />
          <span className="text-[20px] font-bold text-[#2C8EE8]">مقالات</span>
        </header>
        <section className=" relative flex gap-4">
          <span className="absolute bottom-[30%] right-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowRight
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
          <section className="w-[724px] flex flex-nowrap	gap-6">
            <Box
              image={"/images/article1.png"}
              feild={"روانشناسی"}
              history={"1402/09/15"}
              title={"درمان سنتی حمله پانیک چیست؟ آیا موثر است؟"}
            />
            <Box
              image={"/images/alcohol-hangovers 1.png"}
              feild={"روانشناسی"}
              history={"1402/09/15"}
              title={"درمان سنتی حمله پانیک چیست؟ آیا موثر است؟"}
            />
            <Box
              image={"/images/panic-attack-traditional-treatment-3 1.png"}
              feild={"روانشناسی"}
              history={"1402/09/15"}
              title={"درمان سنتی حمله پانیک چیست؟ آیا موثر است؟"}
            />
          </section>
          <span className="absolute bottom-[30%] left-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowLeft
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
        </section>
      </section>
    </>
  );
}

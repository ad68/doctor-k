"use client";
import React from "react";
import Item from "./Item";

import { IconArrowLeft, IconArrowRight } from "@/common/icons";
import Icon from "@ant-design/icons/lib/components/Icon";
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
      <section className="relative mx-auto mt-6 pb-[104px] flex h-full w-full flex-col items-center">
        <section className="flex h-[309px] w-full  items-end justify-center  gap-[15px]">
          <span className="absolute bottom-[60%] right-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowRight
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
          <Item
            img="/images/panic-attack-traditional-treatment.png"
            name="روانشناسی"
            like="1000"
            view="100"
            date='1402/09/15'
          />
           <Item
            img="/images/panic-attack-traditional-treatment.png"
            name="روانشناسی"
            like="1000"
            view="100"
            date='1402/09/15'
          />
           <Item
            img="/images/panic-attack-traditional-treatment.png"
            name="روانشناسی"
            like="1000"
            view="100"
            date='1402/09/15'
          />
           <Item
            img="/images/panic-attack-traditional-treatment.png"
            name="روانشناسی"
            like="1000"
            view="100"
            date='1402/09/15'
          />
          
          <span className="absolute bottom-[60%] left-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowLeft
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
              
            />
          </span>
        </section>
        <section className=" flex h-[5px] mt-4 w-auto gap-[2px] ">
          <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
          <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
          <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
          <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
        </section>
      </section>
    </>
  );
}

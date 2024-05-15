"use client";
import React from "react";
import Item from "./Item";
import Image from "next/image";
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
      <section className="mx-auto mt-[71px] flex h-[256px] justify-center  relative w-full gap-6">
      <span className="flex  items-center right-3 top-[30%]  justify-center absolute w-[38px] h-[24px] rounded-[50px] bg-[#D1D1D1]">
          <Image
            src="/images/icons/arrowRight.svg"
            width={14.75}
            height={12.73}
            alt=""
          />
        </span>
        <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />
        <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />
        <Item
          img="/images/Rectangle.png"
          name="فرزانه محمدی"
          rate="4.7"
          status="آفلاین"
          background="bg-[#E51C0F]"
        />
        <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="4.3"
          status="آنلاین"
          background="bg-[#04A845]"
        />
        <Item
          img="/images/Rectangle.png"
          name="نیما محسنی کبیر"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />
        <span className="flex absolute left-3 top-[30%] items-center w-[38px] h-[24px] justify-center rounded-[50px] bg-[#2C8EE8] cursor-pointer">
        <Image src="/images/icons/arowLeft.png" width={14.75} height={12.73} alt="" className=""/>
        </span>
      </section>
    </>
  );
}

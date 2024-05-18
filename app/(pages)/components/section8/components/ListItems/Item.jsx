"use client";
import React from "react";
import Image from "next/image";


// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ img, name, like, date,view }) {
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
      <section className="flex h-full text-xs w-[274px] flex-col bg-white items-center  rounded-[15px] border border-solid border-[#EFEFEF]">
        <Image
          src={img}
          width={250}
          height={144.47}
          alt=""
          className="mt-[12.04px]"
        />
        <section className="mt-4 flex w-[250px] flex-col  justify-center  gap-4 ">
          <section className="flex w-full  justify-between ">
            <span className="font-medium text-sm text-[#2C8EE8]">{name}</span>
            <span className="flex text-[#909090]  items-center gap-1">
              <Image
                src="/images/icons/calendar.svg"
                width={16}
                height={16}
                alt=""
                className=""
              />
              {date}
            </span>
          </section>
          <span className="w-full text-[#505050] text-sm font-bold">
            درمان سنتی حمله پانیک چیست؟ آیا موثر است؟
          </span>
          <section className="flex text-[#909090] w-full justify-between">
            <span className="flex items-center gap-2">
              <Image
                src="/images/icons/Frame-heartsvg.svg"
                alt=""
                width={16}
                height={16}
                className=""
              />{" "}
              {like}
              <Image
                src="/images/icons/eye.svg"
                alt=""
                width={16}
                height={16}
                className="mr-2"
              />{" "}
              {view}
            </span>
            <span className="flex text-[#2C8EE8] items-center gap-[10px]">
            ادامه
            <Image
                src="/images/icons/Arrow - Left.svg"
                alt=""
                width={8.75}
                height={4.35}
                className=""
              />
            </span>
          </section>
        </section>
      </section>
    </>
  );
}

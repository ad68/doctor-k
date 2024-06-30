"use client";
import React from "react";
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
      <section className="grid justify-items-center bg-[#F8FCFF] xl:w-full">
        <section className="my-[104px] grid h-[327px] w-[1170px]  content-between bg-[url('/images/banner.png')] bg-[length:1170px_327px] bg-no-repeat">
          <section className="grid w-[496px] gap-4 pr-[48px] pt-[68px] text-[#06549E]">
            <h1 className="text-[28px] font-bold ">
              محتوای بنر درباره‌ی مشاوره‌ی آنلاین
            </h1>
            <p className="text-[16px] font-bold leading-[27.64px]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است،
            </p>
            <button className="flex h-[48px] w-[221px] items-center justify-around justify-self-end rounded-xl bg-white ">
              <span className="text-[14px] font-medium text-[#06549E]">
                درخواست مشاوره آنلاین
              </span>
              <Image
                src="/images/icons/Grou.svg"
                width={38}
                height={24}
                alt=""
              />
            </button>
          </section>
          <section className="my-4 flex h-[5px] w-full justify-center gap-[2px] ">
            <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
            <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
            <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
            <span className="h-full w-[18px] rounded-[15px] bg-[#C0E8FF] transition-all hover:w-[30px] hover:bg-[#2C8EE8]"></span>
          </section>
        </section>
      </section>
    </>
  );
}

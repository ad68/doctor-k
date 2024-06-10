"use client";
import React from "react";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";
import CommentsBox from "./components/CommentsBox";
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
      <section className="mx-auto grid w-[1170px] gap-6 relative">
        <header>
          <span className="text-[24px] font-bold text-[#505050]">
            نظر کاربران
          </span>
          <p className="text-[14px] font-medium text-[#7B808C]">
            آنچه شما از تجربیات مشاوره تان پزشکان دکترکا در تخصص پوست، مو‌ و
            زیبایی با ما به اشتراک گذاشته اید.
          </p>
        </header>
        <section className="flex justify-between">
          <span className="absolute bottom-[30%] right-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowRight
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>

          <section className="flex gap-4">
            <CommentsBox
              image={"/images/Man1.png"}
              name={"امیر رئیسی"}
              docName={"مهلا مرزبان"}
            />
            <CommentsBox
              image={"/images/doctor pic.png"}
              name={"مریم عباسی"}
              docName={"سحر قریشی"}
            />
            <CommentsBox
              image={"/images/doctor pic.png"}
              name={"مریم عباسی"}
              docName={"سحر قریشی"}
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

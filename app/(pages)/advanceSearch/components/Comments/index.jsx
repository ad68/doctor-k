"use client";
import React from "react";
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
  return <>
  <section className="w-[1170px] mx-auto grid gap-6">
    <header>
        <span className="text-[24px] font-bold text-[#505050]">نظر کاربران</span>
        <p className="text-[14px] font-medium text-[#7B808C]">آنچه شما از تجربیات مشاوره تان پزشکان دکترکا در تخصص پوست، مو‌ و زیبایی با ما به اشتراک گذاشته اید.</p>
    </header>
    <section className="flex gap-4">

    <CommentsBox image={"/images/Man1.png"} name={"امیر رئیسی"} docName={"مهلا مرزبان"}/>
    <CommentsBox image={"/images/doctor pic.png"} name={"مریم عباسی"} docName={"سحر قریشی"}/>
    <CommentsBox image={"/images/doctor pic.png"} name={"مریم عباسی"} docName={"سحر قریشی"}/>
    </section>
  </section>
  </>;
}

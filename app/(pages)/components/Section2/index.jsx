"use client";
import React from "react";
import RightSection from "./components/RightSection";
import LeftSection from "./components/LeftSection";
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
      <section className="relative flex items-center justify-center bg-[#F8FCFF] xl:h-[589px] xl:w-full">
        <Image
          src="/images/support sticky.png"
          width={64}
          height={64}
          alt=""
          className="absolute left-[13px]"
        />
        <section className="relative flex h-[326px] w-[1127px] items-center justify-between">
          <RightSection />
          <section className="flex w-[543px] flex-col gap-4">
            <Image
              src="/images/Line 1018.png"
              width={26.6}
              height={105.5}
              alt=""
              className="absolute bottom-[22.5px] left-[-41.87px]"
            />
            <Image
              src="/images/Line 1017.png"
              width={26.2}
              height={105.91}
              alt=""
              className="absolute right-[546.96px] top-[78px]"
            />
            <LeftSection
              icons="/images/icons/search doctor icon.png"
              title="1.جستجوی پزشک"
              text="جستجو پزشک بر اساس اطلاعات بیماری یا مشخصات فردی پزشک"
            />
            <LeftSection
              icons="/images/icons/Counseling icon.png"
              title="2.درخواست مشاوره"
              text="جستجو پزشک بر اساس اطلاعات بیماری یا مشخصات فردی پزشک"
            />
            <LeftSection
              icons="/images/icons/feedback icon.png"
              title="3.ثبت بازخورد"
              text="در انتهای مشاوره برای بهبود خدمت رسانی دکتر کا بازخورد شماثبت خواهد شد."
            />
          </section>
        </section>
      </section>
    </>
  );
}

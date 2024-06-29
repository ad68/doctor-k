"use client";
import React, { useEffect, useState } from "react";
import QuestionBox from "./components/QestionBoxState";
import Image from "next/image";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeTab, setActiveTab] = useState(0)

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
    <section className=" grid gap-6 mb-[88px] mt-[46px] w-[1170px] mx-auto">
      <header className="flex justify-start gap-4 ">
        <span className="xl:text-[24px] xl:font-bold dark:text-white text-[20px] font-bold">
          سوالات متداول
        </span>
      </header>

      <section className=" w-full grid gap-4">
        <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={1} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
        <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={2} question='آیا زمان‌های خالی متخصصان واقعی هستند؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
        <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={3} question=' چگونه می‌توانم با پشتیبانی ارتباط داشته باشم؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
        <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={4} question='آیا امکان کنسل کردن رزرو وجود دارد؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />

        <button className="flex gap-3 place-self-end	">
          <span className="text-[14px] font-medium text-[#2C8EE8]">مشاهده همه‌ی سوالات</span>
          <Image src={"/images/icons/arrow.svg"} width={24} height={24} alt="" />
        </button>
      </section>

    </section></>;
}

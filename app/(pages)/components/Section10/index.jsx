"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tab from './components/Tab';
import QuestionBox from "./components/QestionBoxState";
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
  <section className="bg-[#F8FCFF] w-full grid py-[104px] gap-6 justify-items-center">
    <section className="w-[820px]">
        <header className="grid justify-items-center gap-6">
            <section className="flex gap-[10px]">
                <Image src='/images/icons/capsule_32.svg' width={32} height={32} alt="" />
                <h1 className="text-[24px] font-bold text-[#505050]">سوالات متداول</h1>
            </section>
            <Tab />
        </header>
    </section>
    <section className="grid gap-4 w-[820px]"> 
    <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={1} question='شرایط استفاده از کد تخفیف چگونه است؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={2} question='آیا زمان‌های خالی متخصصان واقعی هستند؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={3} question=' چگونه می‌توانم با پشتیبانی ارتباط داشته باشم؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
            <QuestionBox activeTab={activeTab} setActiveTab={setActiveTab} tabIndex={4} question='آیا امکان کنسل کردن رزرو وجود دارد؟' des={'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.'} />
        <button className="text-[#2C8EE8] text-[14px] font-medium flex gap-2 justify-self-end items-center">
            <span>مشاهده همه‌ی سوالات</span>
            <Image src='/images/icons/gravity-ui_arrow-up.svg' width={24} height={24} alt="" className=""/>
        </button>
    </section>
    </section></>;
}

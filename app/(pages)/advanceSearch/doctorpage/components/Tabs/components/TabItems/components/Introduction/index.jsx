"use client";
import React, { useState } from "react";
import Image from "next/image";
import Items from "./components/Items";
import IntroItems from "./components/IntroItems";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const [active, setActive] = useState(false)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <section className={`${active ? "h-[1570px]" :"h-[500px]"} transition-all overflow-hidden duration-500 h-[500px]`}>
    <header className="flex gap-3 mt-6">
        <Image src={"/images/icons/note-32.svg"} width={32} height={32} alt="" />
        <span className="text-[20px] font-bold text-[#2C8EE8]">معرفی</span>
    </header>
    <section>
        <p className="text-[14px] font-normal text-[#707070] leading-[24.18px] text-justify mt-6">دکتر زهرا فلاح متخصص زنان و زایمان، فارغ‌التحصیل دانشگاه علوم پزشکی ایران با بورد تخصصی با شماره نظام پزشکی 137448 از پزشک‌های برتر یزد محسوب می‌شود. ایشان تخصص زنان و زایمان دارد و به بیمارهای خود در زمینه بیماری زگیل تناسلی، اختلالات یائسگی، اختلالات جنسی، بی‌اختیاری ادراری و... مشاوره می‌دهد.</p>
        <IntroItems title={"تخصص ها"} items={["تخصص بیماری های پوست (درماتولوژی)", "جراح پوست و زیبایی"]} />
        <section className="mt-[40px] grid">
        <span className="text-[18px] font-bold text-[#505050] border-r-[2px] border-[#2C8EE8] pr-2"> بیماری‌ها</span>
        <section className="flex gap-2 mt-6">
            <Items name={"سرطان پوست"} />
            <Items name={"التهابات پوستی"}/>
            <Items name={"اگزما"}/>
            <Items name={"خشکی پوست"}/>
            <Items name={"خشکی پوست"}/>
          </section>
          
          <button className={`flex gap-3 items-center w-[152px] h-[48px] border-[1px] border-[#2C8EE8] rounded-[10px] mt-6 mx-auto justify-center ${active ? "hidden": "flex"}`} onClick={()=>{
              setActive(true)
          }}>
          

            <span className="text-[14px] font-medium text-[#2C8EE8]">مشاهده بیشتر</span>
            <Image src={"/images/icons/arrow-down.svg"} width={40} height={40} alt=""/>
          </button>

          {(active) && (<>             <IntroItems title={"تحصیلات"} items={["کارشناسی ارشد : روانشناسی بالینی", "کارشناس : روانشناسی", "دکترای : روانشناسی"]} />
              <IntroItems title={"تجربه کاری پزشک"} items={["روانشناسی بالینی از سال 90 تا کنون در تهران ", "روان پزشک از سال 1400 تا کنون در تهران", "دانشجوی دکترای روانشناسی در قزوین", "شماره نظام روانشناسی : 36090", "تجربه ی کاری پزشک : 13 سال", "عضو هیئت علمی: استاد دانشگاه آزاد واحد تهران شمال"]} />
              <IntroItems title={"تجربه کاری پزشک"} items={["روانشناسی بالینی از سال 90 تا کنون در تهران ", "روان پزشک از سال 1400 تا کنون در تهران", "دانشجوی دکترای روانشناسی در قزوین", "شماره نظام روانشناسی : 36090", "تجربه ی کاری پزشک : 13 سال", "عضو هیئت علمی: استاد دانشگاه آزاد واحد تهران شمال"]}/>
              <IntroItems title={"جوایز و افتخارات"} items={["رتبه ممتاز رشته تخصصی زنان در دانشگاه علوم پزشکی ایران", "دارای بورد تخصصی","عضو انجمن بانوان جراح ایران","بیش از 5000 مورد سزارین و زایمان طبیعی بدون درد"]}/>
              <section className="mt-[40px]">
                <span className="text-[18px] font-bold text-[#505050] border-r-[2px] border-[#2C8EE8] pr-2">شبکه‌های اجتماعی</span>
                <section className="grid gap-3 mt-6">
                  <section className="flex gap-2 items-center ">
                      <Image src={"/images/icons/bold_linkedin_24.svg"} width={24} height={24} alt="" />
                      <span className="font-bold text-[14px] text-[#705070]">@DR.ZAHRAFALAH</span>
                  </section>
                  <section className="flex gap-2 items-center ">
                      <Image src={"/images/icons/facebook_24.svg"} width={24} height={24} alt="" />
                      <span className="font-bold text-[14px] text-[#705070]">@DR.ZAHRAFALAH</span>
                  </section>
                  <section className="flex gap-2 items-center ">
                      <Image src={"/images/icons/instagram_24.svg"} width={24} height={24} alt="" />
                      <span className="font-bold text-[14px] text-[#705070]">@DR.ZAHRAFALAH</span>
                  </section>
                </section>
              </section></>) }
              <button className={`flex gap-3 items-center w-[152px] h-[48px] border-[1px] border-[#2C8EE8] rounded-[10px] mt-6 mx-auto justify-center ${!active ? "hidden": "flex"}`} onClick={()=>{
              setActive(false)
          }}> 
          <span className="text-[14px] font-medium text-[#2C8EE8]">مشاهده کمتر </span>
          <Image src={"/images/icons/arrow-down.svg"} width={40} height={40} alt=""/></button>
        </section>
    </section>
  </section>
  </>;
}

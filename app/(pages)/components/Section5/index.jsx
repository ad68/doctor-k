"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Expertise from "./components/Expertise";
import { useAxios, useFetch } from "@/hooks";
import { api } from "@/api";
import { consoleLog_BlackRed, notify } from "@/helper";
import { ComponentLoading } from "@/common";
import { NotifyMessage } from "@/enums";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const imageUrl = [
    { url: "/images/brain.png", name: "general_practitioner" },
    { url: "/images/brain.png", name: "Family_doctor" },
    { url: "/images/brain.png", name: "Orthopedist" },
    { url: "/images/brain.png", name: "Radiologist" },
    { url: "/images/brain.png", name: "Anesthesiologist" },
  ];
  const [data,loading,Reload]=useFetch(api.Expertise.getExpertiseList)
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Functions ─────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
useEffect(()=>{console.log(data)},[data])
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative grid justify-items-center bg-[#F8FCFF] xl:w-full">
        <ComponentLoading  show={loading}/>
        <section className="grid gap-6 xl:w-[1170px]">
          <header className="flex justify-between">
            <section className="flex gap-[10px]">
              <Image
                src="/images/icons/capsule_32.svg"
                width={32}
                height={32}
                alt=""
              />
              <h1 className="text-[24px] font-bold text-[#505050]">
                پربازدیدترین تخصص‌ها
              </h1>
            </section>
            <button className="flex items-center gap-[8px]	">
              <span className="text-[14px] font-medium text-[#2C8EE8]">
                مشاهده همه‌ی تخصص‌ها
              </span>
              <Image
                src="/images/icons/gravity-ui_arrow-up.svg"
                height={24}
                width={24}
                alt=""
              />
            </button>
          </header>
          <section className="mb-[104px] grid h-[344px] grid-cols-6 grid-rows-2 gap-6">
            {data.map((item, index) => (
              <Expertise
                item={item}
                key={index}
                img={imageUrl.find((obj=>obj.name===item.latinName)).url}
              />
            ))}
          <button onClick={Reload}>reload</button>
          </section>

        </section>
      </section>
    </>
  );
}

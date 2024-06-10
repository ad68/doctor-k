"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Expertise from "./components/Expertise";
import { useAxios } from "@/hooks";
import { api } from "@/api";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [data, setData] = useState([]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getExpertiseList = () => {
    useAxios
      .get(api.expertise.getExpertiseList)
      .then((res) => {
        console.log(res.data);
        setData(res?.data);
      })
      .catch((err) => {});
  };
  const getImgUrl = (value) => {
    switch (value) {
      case "general_practitioner":
        return "/images/brain.png";
      case "Family_doctor":
        return "/images/brain.png";

      case "Orthopedist":
        return "/images/brain.png";
      case "Radiologist":
        return "/images/brain.png";

      case "Anesthesiologist":
        return "/images/brain.png";
        default:
          break;
    }
  };

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getExpertiseList();
  }, []);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="grid justify-items-center bg-[#F8FCFF] xl:w-full">
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
                img={() => getImgUrl(item?.latinName)}
              />
            ))}

            {/* <Expertise img="/images/illust.png" title="روانشناسی" />
            <Expertise img="/images/brain.png" title="مغز و اعصاب" />
            <Expertise img="/images/heart.png" title="بیماری‌های ‌‌ریوی" />
            <Expertise img="/images/kol.png" title="کلیه(نفرولوژی)" />
            <Expertise img="/images/images.png" title="زنان و زایمان" />
            <Expertise img="/images/ear.png" title="گوش و حلق و بینی" />
            <Expertise img="/images/bland.png" title="خون" />
            <Expertise img="/images/eye.png" title="چشم پزشکی" />
            <Expertise img="/images/teeth.png" title="دندان پزشکی" />
            <Expertise img="/images/ghodad.png" title="غدد و متابولیسم" />
            <Expertise img="/images/baby.png" title="کودکان" /> */}
          </section>
        </section>
      </section>
    </>
  );
}

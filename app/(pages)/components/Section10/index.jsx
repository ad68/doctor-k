"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Tab from "./components/Tab";
import QuestionBox from "./components/QestionBoxState";
import { useFetch } from "@/hooks";
import { api } from "@/api";
import { ComponentLoading } from "@/common";
import { consoleLog_BlackOrange, consoleLog_Blue } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeFilter, setActiveFilter] = useState('Physician');
  const [faqList, setFaqList] = useState([]);
  const [activeTab, setActiveTab] = useState(0);
  const [data, loading] = useFetch(api.Miscellaneous.getMiscellaneous);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  useEffect(() => {
    setFaqList(data.filter((value) => value.groupName === activeFilter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);
  /*   useEffect(() => {
      console.log(faqList);
    }, [faqList, data]); */
  useEffect(() => {
    consoleLog_BlackOrange(activeTab)
  }, [activeTab])
  useEffect(() => {
    consoleLog_Blue(activeFilter)
  }, [activeFilter])
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="grid w-full justify-items-center gap-6 bg-[#F8FCFF] py-[104px]">
        <ComponentLoading show={loading} />
        <section className="w-[820px]">
          <header className="grid justify-items-center gap-6">
            <section className="flex gap-[10px]">
              <Image
                src="/images/icons/capsule_32.svg"
                width={32}
                height={32}
                alt=""
              />
              <h1 className="text-[24px] font-bold text-[#505050]">
                سوالات متداول
              </h1>
            </section>
            <Tab activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
          </header>
        </section>
        <section className="grid w-[820px] gap-4">
          {faqList?.map((item, index) => (
            <QuestionBox
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              tabIndex={index + 1}
              item={item}
              key={index}
            />
          ))}
          <button className="flex items-center gap-2 justify-self-end text-[14px] font-medium text-[#2C8EE8]">
            <span>مشاهده همه‌ی سوالات</span>
            <Image
              src="/images/icons/gravity-ui_arrow-up.svg"
              width={24}
              height={24}
              alt=""
              className=""
            />
          </button>
        </section>
      </section>
    </>
  );
}

"use client";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Slider from "./components/ListItems";
import { ComponentLoading } from "@/common";
import { useAxios } from "@/hooks";
import { api } from "@/api";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getList = () => {
    useAxios.get(api.Expertise.GetTopExpertisesPhysicians).then().catch()
  }
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getList()
  }, [])

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="mx-auto relative h-[450px] w-[1170px] pt-4 ">
        <ComponentLoading show={true} />
        <Header />
        <Filter />
        <Slider />
      </section>
    </>
  );
}

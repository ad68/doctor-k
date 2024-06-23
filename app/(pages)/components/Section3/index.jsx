"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Slider from "./components/ListItems";
import { ComponentLoading } from "@/common";
import { useFetch } from "@/hooks";
import { api } from "@/api";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//
export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const [data, loading] = useFetch(api.Expertise.getTopExpertisesPhysicians)
  // ─── States ─────────────────────────────────────────────────────────────────────

  const [filter, setFilter] = useState([]);
  const [showSlider, setShowSlider] = useState(false)
  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (data?.length > 0) {
      setFilter(data[0])
    }

  }, [data]);
  useEffect(() => {
    if (filter?.physicians?.length > 0) {
      setShowSlider(true)
    }
    else {
      setShowSlider(false)
    }
  }, [filter])
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className='mx-auto relative h-[450px] w-[1170px] pt-4 '>
        <ComponentLoading show={loading} />
        <Header />
        <Filter setFilter={setFilter} filter={filter} list={data} />
        {showSlider && <Slider list={filter?.physicians} />}
      </section>
    </>
  );
}

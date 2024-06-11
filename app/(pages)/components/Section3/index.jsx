"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Slider from "./components/ListItems";
import { ComponentLoading } from "@/common";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { consoleLog_BlackYellow, notify } from "@/helper";
import { NotifyMessage, NotifyType } from "@/enums";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState([]);
  const [showSlider, setShowSlider] = useState(false)
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getList = () => {
    setLoading(true);
    useAxios
      .get(api.Expertise.getTopExpertisesPhysicians)
      .then((res) => {
        setList(res.data);
        setFilter(res.data[0])
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);

      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    if (filter.physicians?.length > 0) {
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
        <Filter setFilter={setFilter} filter={filter} list={list} />
        {showSlider && <Slider list={filter.physicians} />}

      </section>
    </>
  );
}

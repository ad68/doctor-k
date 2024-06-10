"use client";
import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Slider from "./components/ListItems";
import { ComponentLoading } from "@/common";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { notify } from "@/helper";
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
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const getList = () => {
    setLoading(true);
    useAxios
      .get(api.Expertise.GetTopExpertisesPhysicians)
      .then((res) => {
        setList(res.data);
        setFilter(res.data[0])
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        notify.Error(NotifyMessage.GLOBAL_ERROR);
      });
  };
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    getList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


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
        <Slider list={filter.physicians} />
      </section>
    </>
  );
}

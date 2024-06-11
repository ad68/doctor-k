"use client";
import React, { useEffect, useState } from "react";
import { useAxios } from ".";
import { notify } from "@/helper";
import { NotifyMessage } from "@/enums";


// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index(url) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  const [reload, setReload] = useState(false);
  const [data, setData] = useState([]);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    setLoading(true);
    useAxios
      .get(url)
      .then((res) => {
        setData(res?.data);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false)
        notify.Error(NotifyMessage.GLOBAL_ERROR)
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  const Reload = () => {
    setReload(!reload)
  }
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return [data, loading, Reload];
}

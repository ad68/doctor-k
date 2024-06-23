"use client";

import { TextBox } from "@/common";
import React, { useState } from "react";
import Image from "next/image";
import SendActiveCode from "./components/SendActiveCode";
import RequestActiveCode from "./components/RequestActiveCode";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ children, open, onClose, width, title,closeModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const [activeModal,setActiveModal] =useState(1)
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full p-8">
      <span className="mt-[-10px] block text-center text-2xl font-bold text-[#2C8EE8]">
        دکترکا
      </span>
      {
        activeModal===1&&<RequestActiveCode setActiveModal={setActiveModal}/>
      }
       {
        activeModal===2&& <SendActiveCode closeModal={closeModal} setActiveModal={setActiveModal} num='0938987654'/>
      }
     
    </section>
  );
}

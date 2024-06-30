"use client";

import { TextBox } from "@/common";
import React, { useState } from "react";
import Image from "next/image";
import SendActiveCode from "./components/SendActiveCode";
import RequestActiveCode from "./components/RequestActiveCode";
import DoctorUserForm from "./components/DoctorUserForm";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setResponse,children, open, onClose, width, title,closeModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [status,setStatus]=useState(1)
  const [phoneNumber, setPhoneNumber] = useState("");
  const [currentUserInfo,setCurrentUserInfo]=useState({})
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
        status===1&&<RequestActiveCode setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} setActiveModal={setStatus}/>
      }
       {
        status===2&& <SendActiveCode setCurrentUserInfo={setCurrentUserInfo} phoneNumber={phoneNumber} closeModal={closeModal} setActiveModal={setStatus}/>
      }
     {
       status===3&&<DoctorUserForm currentUserInfo={currentUserInfo} setStatus={setStatus}/>
     }
    </section>
  );
}

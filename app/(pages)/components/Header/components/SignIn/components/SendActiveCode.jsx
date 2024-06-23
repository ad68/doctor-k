"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OtpInputs from "./OtpInputs";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ closeModal, phoneNumber }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const [activeCode,setActiveCode]=useState()
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
useEffect(()=>{
console.log(activeCode)
},[activeCode])
  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <p className="mt-6 font-bold text-[#505050]">
        لطفا کد ارسال شده به شماره موبایلتان را وارد نمایید
      </p>
      <p className="mt-4 cursor-pointer text-center text-xs leading-[20.73px] text-[#707070]">
        ویرایش شماره موبایل{" "}
        <span className="text-[#2C8EE8]"> {phoneNumber}</span>
      </p>
      <label className="mt-6 cursor-pointer text-center text-sm font-semibold leading-[24.18px] text-[#707070]">
        کد تایید
      </label>
      <OtpInputs setActiveCode={setActiveCode} />
      <span className="mt-4 block text-center text-sm font-medium leading-[24.18px] text-[#707070]">
        0:58
      </span>
      <button
        onClick={closeModal}
        className="mt-[48px]  flex h-[48px] w-full  items-center justify-center gap-[10.16px] rounded-[10px] bg-[#2C8EE8] font-medium text-white"
      >
        دریافت کد تایید
        <Image
          alt=""
          src="/images/icons/VectorBtnLeft.svg"
          width={14.25}
          height={20.34}
          className=""
        />
      </button>
    </>
  );
}

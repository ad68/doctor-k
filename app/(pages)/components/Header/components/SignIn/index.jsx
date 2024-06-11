"use client";

import { TextBox } from "@/common";
import React, { useState } from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ children, open, onClose, width, title }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full p-8">
      <span className="flex items-center gap-2  font-bold text-[#505050]">
        <span className="cursor-pointer">ثبت نام</span>
        <span className="h-3 w-[2px] bg-[#505050]"></span>
        <span className="cursor-pointer">ورود </span>
      </span>
      <p className="leading-[24.18px] text-sm mt-4">لطفا شماره موبایل خود را وارد نمایید</p>
      <label className=" text-[#707070] block mt-6 text-sm">شماره موبایل </label>
      <section className=" relative w-full">
       
  
      <input type="text" className="w-full py-[10px]  mt-1 pl-[90px] h-[48px] border border-solid border-[#D1D1D1] rounded-[10px] " dir="ltr" placeholder="9xx xxx xxxx" />
      <Image alt='' src='/images/icons/flag-iran.svg' width={24} height={24} className="absolute top-[50%] translate-y-[-50%] left-[8px]" />
      <span className="absolute top-[50%] translate-y-[-50%] left-[40px] text-[#707070] ">98+</span>
      <span className="h-[28px] w-[2px] top-[50%] translate-y-[-50%] left-[78px] bg-[#909090] absolute"></span>
      </section>
     <button className="w-full h-[48px] gap-[10.16px] font-bold flex items-center justify-center text-white bg-[#2C8EE8] rounded-[10px] mt-[48px]">
     دریافت کد تایید
     <Image alt='' src='/images/icons/VectorBtnLeft.svg' width={14.25} height={20.34} className="" />
     </button>
     <p className="text-xs text-center mt-4">ورود شما به معنای پذیرش  <span className="text-[#2C8EE8] cursor-pointer"> قوانین و مقررات</span> دکترکا می‌باشد .</p>
    </section>
  );
}

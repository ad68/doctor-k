"use client";
import React from "react";
import Image from "next/image";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ num,closeModal }) {
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
    <>
      <p className="mt-6 font-bold text-[#505050]">
        لطفا کد ارسال شده به شماره موبایلتان را وارد نمایید
      </p>
      <p className="mt-4 cursor-pointer text-center text-xs leading-[20.73px] text-[#707070]">
        ویرایش شماره موبایل <span className="text-[#2C8EE8]"> {num}</span>
      </p>
      <label className="mt-6 cursor-pointer text-center text-sm font-semibold leading-[24.18px] text-[#707070]">
        کد تایید
      </label>
      <form className="flex h-[56px] mt-4 gap-[17px]">
        <input
          className=" h-full w-full rounded-[10px] border border-solid border-[#EFEFEF]"
          type="text"
        />
        <input
          className=" h-full w-full rounded-[10px] border border-solid border-[#EFEFEF]"
          type="text"
        />
        <input
          className=" h-full w-full rounded-[10px] border border-solid border-[#EFEFEF]"
          type="text"
        />
        <input
          className=" h-full w-full rounded-[10px] border border-solid border-[#EFEFEF]"
          type="text"
        />
        <input
          className=" h-full w-full rounded-[10px] border border-solid border-[#EFEFEF]"
          type="text"
        />
      </form>
      <span className="mt-4 text-sm font-medium leading-[24.18px] text-[#707070] block text-center">0:58</span>
      <button onClick={closeModal} className="mt-[48px]  flex h-[48px] w-full  items-center justify-center gap-[10.16px] rounded-[10px] bg-[#2C8EE8] font-medium text-white">
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

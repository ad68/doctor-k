"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import OtpInputs from "./OtpInputs";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { Button } from "@/common";
import { useRouter } from "next/navigation";
import CountDown from "./CountDown";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  closeModal,
  phoneNumber,
  setActiveModal,
  RequestActiveCode,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const router = useRouter();
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [activeCode, setActiveCode] = useState();
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState();
  const [resendBtnState, setResendBtnState] = useState(false);
  const [reloadTimer, setReloadTimer] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    console.log(activeCode);
  }, [activeCode]);
  // ─── Functions ──────────────────────────────────────────────────────────────────

  const SendActiveCode = () => {
    let params = {
      mobileNumber: phoneNumber,
      otp: activeCode,
      role: "Patient",
    };
    if (phoneNumber && activeCode) {
      setLoading(true);
      useAxios
        .post(api.authentication.login, params)
        .then((res) => {
          setLoading(false);
          setResponse(res.data);
          closeModal();
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  };
  useEffect(() => {
    console.log(loading);
  }, [loading]);
  const ReloadTimer = () => {
    setResendBtnState(false);
    setReloadTimer(!reloadTimer);
    RequestActiveCode();
  };
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
        <span
          onClick={() => {
            setActiveModal(1);
          }}
        >
          ویرایش شماره موبایل
        </span>
        <span className="text-[#2C8EE8]"> {phoneNumber}</span>
      </p>
      <label className="mt-6 cursor-pointer text-center text-sm font-semibold leading-[24.18px] text-[#707070]">
        کد تایید
      </label>
      <OtpInputs setActiveCode={setActiveCode} />
      <section className="relative flex items-center justify-center">
        <button
          onClick={ReloadTimer}
          className="duration-400 mt-5 text-blue transition-all disabled:text-silver"
          disabled={!resendBtnState}
        >
          ارسال مجدد
        </button>
        {loading && <section className="resendCode_Loader"></section>}
      </section>
      <section className="mt-4">
        <CountDown
          totalCount={10}
          setResendBtnState={setResendBtnState}
          reload={reloadTimer}
          resendBtnState={resendBtnState}
        />
      </section>
      <Button
        loading={loading}
        onClick={() => {
          SendActiveCode();
        }}
        className="mt-[48px]  flex h-[48px] w-full  items-center justify-center gap-[10.16px] rounded-[10px] bg-none  font-medium text-white"
      >
        {loading ? (
          ""
        ) : (
          <>
            دریافت کد تایید
            <Image
              alt=""
              src="/images/icons/VectorBtnLeft.svg"
              width={14.25}
              height={20.34}
              className=""
            />
          </>
        )}
      </Button>
    </>
  );
}

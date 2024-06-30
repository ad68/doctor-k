"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ErrorMessage, TextBox } from "@/common";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { Regex } from "@/enums";
import { notify } from "@/helper";
import { Button } from "@/common";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveModal, phoneNumber, setPhoneNumber }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [error, setError] = useState(true);
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const RequestActiveCode = () => {
    setLoading(true);
    setFirstSubmit(true);
    if (Regex.MOBILE.test(phoneNumber)) {
      useAxios
        .get(api.authentication.sendOtp + `?phoneNumber=${phoneNumber}`)
        .then((res) => {
          setActiveModal(2);
          setLoading(false);
        })
        .catch((err) => {
          notify.Error("خطای ناشناخته")
          setLoading(false);
        });
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    if (!Regex.MOBILE.test(phoneNumber) && firstSubmit) {
      setError(true);
    } else {
      setError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <span className="flex items-center gap-2  font-bold text-[#505050]">
        <span className="cursor-pointer">ثبت نام</span>
        <span className="h-3 w-[2px] bg-[#505050]"></span>
        <span className="cursor-pointer">ورود </span>
      </span>
      <p className="mt-4 text-sm leading-[24.18px]">
        لطفا شماره موبایل خود را وارد نمایید
      </p>

      <section className=" relative w-full">
        <label className=" mt-6 block text-sm text-[#707070]">
          شماره موبایل{" "}
        </label>
        <TextBox
          value={phoneNumber}
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
          placeholder="09xx xxx xxxx"
          className="ltr relative mt-1 h-[48px] w-full rounded-[10px] border border-solid border-[#D1D1D1] py-[10px] pl-[90px] "
        />

        <Image
          alt=""
          src="/images/icons/flag-iran.svg"
          width={24}
          height={24}
          className="absolute left-[10px] top-[50%] "
        />
        <span className="absolute left-[42px] top-[50%]  text-[#707070] ">
          98+
        </span>
        <span className="absolute left-[78px] top-[50%] h-[28px] w-[2px]  bg-[#909090]"></span>
      </section>
      {error && firstSubmit && (
        <ErrorMessage>لطفا شماره تماس را بدرستی وارد کنید</ErrorMessage>
      )}
      <Button
        loading={loading}
        onClick={() => {
          RequestActiveCode();
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
      <p className="mt-4 text-center text-xs">
        ورود شما به معنای پذیرش{" "}
        <span className="cursor-pointer text-[#2C8EE8]"> قوانین و مقررات</span>{" "}
        دکترکا می‌باشد .
      </p>
    </>
  );
}

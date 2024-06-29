"use client";
import { Button, ErrorMessage, TextBox } from "@/common";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { Regex } from "@/enums";
import { consoleLog_BlackOrange, notify } from "@/helper";
import { api } from "@/api";
import { useAxiosWithToken } from "@/hooks";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ currentUserInfo, closeModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: currentUserInfo?.firstName,
      lastName: currentUserInfo?.lastName,
      nationalCode: currentUserInfo?.nationalCode,
      physicianSystemCode: currentUserInfo?.physicianSystemCode,

    },
  });
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [loading, setLoading] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const onSubmit = (data) => {
    let params = {
      firstName: data.firstName,
      lastName: data.lastName,
      nationalCode: data.nationalCode,
      physicianSystemCode: data.physicianSystemCode,
      /*  description: null,
       dateOfBirth: null,
       educationLevel: null,
       gender: null,
       mainImage: null */
    };
    setLoading(true);
    useAxiosWithToken
      .post(api.authentication.physician.completeProfile, params)
      .then((res) => {
        setLoading(false);
        closeModal()
        notify.Success("پزشک با موفقیت افزوده شد");
      })
      .catch((err) => {
        let errorCode = err?.response?.data?.errorCode
        setLoading(false);
        if (errorCode === 2) {
          notify.Error("این کاربر قبلا به عنوان بیمار ثبت نام کرده است")
        }
      });
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <h2 className="mt-6 font-bold text-[#505050]">ثبت نام پزشک</h2>
      <span className="mt-[16px] block text-sm text-[#505050]">
        لطفا برای تکمیل ثبت نام موارد زیر را پر نمایید.
      </span>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
        <section className="mt-6">
          <label className="mb-1 text-sm text-[#707070]">کد ملی</label>
          <Controller
            name="nationalCode"
            control={control}
            rules={{
              required: "کد ملی الزامی است",
              pattern: {
                value: Regex.NATIONAL_CODE,
                message: "کد ملی را بدرستی وارد کنید",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="کد ملی"
                className={`h-[40px] w-full rounded-[10px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#505050] xl:h-[44px] xl:rounded-[10px] xl:p-3 xl:text-[14px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {errors.nationalCode && (
            <ErrorMessage>{errors.nationalCode.message}</ErrorMessage>
          )}
        </section>
        <section>
          <label className="mb-1 text-sm text-[#707070]">نام </label>
          <Controller
            name="firstName"
            control={control}
            rules={{
              required: "نام الزامی است",
              minLength: {
                value: 3,
                message: "  نام  نباید کمتر از 2 کاراکتر باشد",
              },
              maxLength: {
                value: 40,
                message: "  نام  نباید بیشتر از 40 کاراکتر باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="نام"
                className={`h-[40px] w-full rounded-[10px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#505050] xl:h-[44px] xl:rounded-[10px] xl:p-3 xl:text-[14px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {errors.firstName && (
            <ErrorMessage>{errors.firstName.message}</ErrorMessage>
          )}
        </section>
        <section>
          <label className="mb-1 text-sm text-[#707070]">نام‌ خانوادگی </label>
          <Controller
            name="lastName"
            control={control}

            rules={{
              required: "نام خانوادگی الزامی است",
              minLength: {
                value: 3,
                message: "  نام خانوادگی نباید کمتر از 2 کاراکتر باشد",
              },
              maxLength: {
                value: 40,
                message: "  نام خانوادگی نباید بیشتر از 40 کاراکتر باشد",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="نام خانوادگی"
                className={`h-[40px] w-full rounded-[10px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#505050] xl:h-[44px] xl:rounded-[10px] xl:p-3 xl:text-[14px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {errors.lastName && (
            <ErrorMessage>{errors.lastName.message}</ErrorMessage>
          )}
        </section>
        <section>
          <label className="mb-1 text-sm text-[#707070]">کد نظام پزشکی </label>
          <Controller
            name="physicianSystemCode"
            control={control}

            rules={{
              required: " کد نظام پزشکی الزامی است",
              pattern: {
                message: " کد نظام پزشکی را بدرستی وارد کنید",
              },
            }}
            render={({ field: { onChange, value } }) => (
              <TextBox
                onChange={onChange}
                value={value}
                placeholder="کد نظام پزشکی"
                className={`h-[40px] w-full rounded-[10px] border-[1px] border-[#EBEBEB] p-2 text-[12px] font-normal text-[#505050] xl:h-[44px] xl:rounded-[10px] xl:p-3 xl:text-[14px] dark:bg-black/10 dark:text-white`}
              />
            )}
          />
          {errors.physicianSystemCode && (
            <ErrorMessage>{errors.physicianSystemCode.message}</ErrorMessage>
          )}
        </section>
        <Button loading={loading}>
          {loading ? (
            ""
          ) : (
            <>
              ثبت نام
              <Image
                alt=""
                src="/images/icons/VectorBtnLeft.svg"
                width={14.25}
                height={20.34}
                className="mr-2"
              />
            </>
          )}
        </Button>
      </form>
    </>
  );
}

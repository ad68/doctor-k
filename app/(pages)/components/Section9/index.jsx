"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Modal } from "@/common";
import SignIn from "./SignIn";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  const [signInModal, setSignInModal] = useState(false);

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const closeModal = () => {
    setSignInModal(false);
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Modal open={signInModal} onClose={closeModal} width={442}>
        <SignIn closeModal={closeModal} />
      </Modal>
      <section className="grid grid-cols-2 bg-[#F8FCFF] xl:w-full">
        <section className="bg-[#FFFFFF]  py-[90px] pr-[98px]">
          <section className="grid w-[552px]  gap-[48px]">
            <h1 className="text-[28px] font-bold text-[#2C8EE8] ">
              آیا یک مشاور و پزشک با تجربه هستید؟
            </h1>
            <p className="text-justify text-[14px] font-medium leading-[24.18px] text-[#707070]">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
            <button onClick={()=>{setSignInModal(true)}} className="flex h-[48px] w-[221px] items-center justify-around justify-self-end rounded-[10px] bg-[#2C8EE8] hover:bg-[#1F7FD7]">
              <span className="text-[14px] font-medium text-white">
                ثبت نام به عنوان پزشک
              </span>
              <Image
                src="/images/icons/arrow.svg"
                width={38}
                height={24}
                alt=""
              />
            </button>
          </section>
        </section>
        <section className="flex justify-center bg-[#C0E8FF] pt-4">
          <Image
            src="/images/sabtnam pezeshk.svg"
            width={271}
            height={418}
            alt=""
          />
        </section>
      </section>
    </>
  );
}

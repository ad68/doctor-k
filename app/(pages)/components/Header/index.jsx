"use client";
import Image from "next/image";
import { Modal } from "@/common";
import SignIn from "./components/SignIn";
import { useState } from "react";
import { title } from "process";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
const[signInModal,setSignInModal] = useState(false)

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
const closeModal=()=>{
  setSignInModal(false)
}

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <Modal open={signInModal} onClose={closeModal} width={442} >
        <SignIn closeModal={closeModal} />
      </Modal>
      <header className="fixed top-0 z-[1000] flex h-[72px] w-full items-center  bg-[#366FA7] px-[98px] text-white">
        <nav className="w-full">
          <header className="mx-auto flex w-[1170px] items-center justify-between ">
            <section className="flex items-center gap-8">
              <h1 className="cursor-pointer text-[24px] font-bold">دکتر کا</h1>
              <span className="flex items-center gap-2 text-sm">
                <Image
                  src="/images/icons/fluent_call-32-filled.svg"
                  width={16}
                  height={16}
                  className="cursor-pointer"
                  alt=""
                />
                41559
              </span>
            </section>
            <section className="flex items-center gap-2 text-sm  font-medium leading-[24.18px]">
              <a
                href="#"
                className="rounded-[30px]  transition-all hover:bg-white  hover:font-bold hover:text-[#2C8EE8]"
              >
                <button className="h-8 w-[104px]">صفحه اصلی</button>
              </a>
              <a
                href="#"
                className="rounded-[30px]  transition-all hover:bg-white hover:font-bold hover:text-[#2C8EE8]"
              >
                <button className="h-8 w-[108px]">مشاوره‌ی آنلاین </button>
              </a>
              <a
                href="#"
                className="rounded-[30px]  transition-all hover:bg-white hover:font-bold hover:text-[#2C8EE8]"
              >
                <button className="h-8 w-[111px]">جستجوی پزشک </button>
              </a>
              <a
                href="#"
                className="rounded-[30px] transition-all hover:bg-white hover:font-bold hover:text-[#2C8EE8]"
              >
                <button className="h-8 w-[98px]">انجمن سلامت </button>
              </a>
              <a
                href="#"
                className="rounded-[30px] transition-all hover:bg-white hover:font-bold hover:text-[#2C8EE8]"
              >
                <button className="h-8 w-[63px]">درباره ما </button>
              </a>
              <a
                href="#"
                className="rounded-[30px] transition-all hover:bg-white hover:font-bold hover:text-[#2C8EE8]"
              >
                <button className="h-8 w-[79px]">تماس با ما </button>
              </a>
            </section>
            <section className="flex items-center gap-7">
              <Image
                src="/images/icons/search-24.svg"
                width={24}
                height={24}
                className="cursor-pointer"
                alt=""
              />
              <span onClick={()=>{setSignInModal(true)}} className="flex items-center gap-1 text-sm">
                <span className="cursor-pointer">ثبت نام</span>/
                <span className="cursor-pointer">ورود </span>
              </span>
            </section>
          </header>
        </nav>
      </header>
    </>
  );
}

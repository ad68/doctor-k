"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { useAuthStore } from "@/store/auth";
import { isObjEmpty } from "@/helper";
import {
  IconArrowdown,
  IconDashboard,
  IconLogout,
  IconUserCircle,
} from "@/common/icons";
import { LogoutModal } from "@/common";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setSignInModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const authInfo = useAuthStore((state) => state.authInfo);
  // ─── States ─────────────────────────────────────────────────────────────────────
  const [showSideBar, setShowSideBar] = useState(false);
  const [logOutModal, setLogOutModal] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {}, []);
  // ─── Functions ──────────────────────────────────────────────────────────────────
  let proFileMenuBtn = document.querySelector(".profileMenuBtn");
  let profileMenu = document.querySelector(".profileMenu");
  document.onclick = function (e) {
    if (
      !proFileMenuBtn?.contains(e.target) &&
      !profileMenu?.contains(e.target)
    ) {
      setShowSideBar(false);
    }
  };
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="relative flex items-center gap-7">
        {isObjEmpty(authInfo) ? (
          <button
            onClick={() => {
              setSignInModal(true);
            }}
            className="flex items-center gap-1 text-sm"
          >
            <span className="cursor-pointer">ثبت نام</span>/
            <span className="cursor-pointer">ورود </span>
          </button>
        ) : (
          <>
            <button
              onClick={() => {
                setShowSideBar(!showSideBar);
              }}
              className="profileMenuBtn"
            >
              {authInfo.phoneNumber ? authInfo.phoneNumber : authInfo.firstName}
              <span className="mr-1 inline-block"> جان خوش آمدی !</span>
            </button>

            <section
              className={`${showSideBar ? "flex" : "hidden"} profileMenu absolute top-[30px]  h-auto w-[200px] flex-col gap-4  rounded-xl bg-white p-4 text-blue`}
            >
              <span className=" flex cursor-pointer justify-between ">
                <IconDashboard />
                <span className="mr-2">داشبورد</span>
                <IconArrowdown className="mr-auto h-[20px] w-[20px] rotate-90" />
              </span>
              <span
                onClick={() => {
                  setLogOutModal(true);
                  setShowSideBar(false);
                }}
                className="flex cursor-pointer items-center "
              >
                <IconLogout />
                <span className="mr-2">خروج</span>
              </span>
            </section>
          </>
        )}
         <LogoutModal
            open={logOutModal}
            onClose={() => setLogOutModal(false)}
            title="خروج"
          />
      </section>
    </>
  );
}

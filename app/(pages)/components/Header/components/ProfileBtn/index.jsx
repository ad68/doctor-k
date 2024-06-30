"use client";
import React from "react";
import Image from "next/image";
import { useAuthStore } from "@/store/auth";
import { isObjEmpty } from "@/helper";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setSignInModal }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const authInfo = useAuthStore((state) => state.authInfo);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className="flex items-center gap-7">
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
          <button>
            {authInfo.phoneNumber ? authInfo.phoneNumber : authInfo.firstName}
            <span className="mr-1 inline-block"> جان خوش آمدی !</span>
          </button>
        )}
      </section>
    </>
  );
}

"use client";
import { useState } from "react";
import Image from "next/image";
import ChatModal from "./ChatModal";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const[chatModal,setChatModal] = useState(false);
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
    <button onClick={()=>{setChatModal(!chatModal)}} className=" fixed bottom-[29.58px] left-[13.37px] flex h-[64px] w-[64px] items-center justify-center rounded-full bg-[#2C8EE8] shadow-[0px_4px_20px_0px_#00000033]">
        <Image
          src="/images/icons/headphone.svg"
          width={40}
          height={40}
          alt=""
          className=""
        />
      </button>
      {
       chatModal&&     <ChatModal />
      }

  </>;
}
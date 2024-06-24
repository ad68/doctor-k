"use client";
import React, { useEffect, useRef, useState } from "react";

// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ setActiveCode }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────

  const [firstOtp, setFirstOtp] = useState("");
  const [secondtOtp, setSecondOtp] = useState("");
  const [thirdOtp, setThirdOtp] = useState("");
  const [fourthOtp, setFourthOtp] = useState("");
  const [fifthOtp, setFifthOtp] = useState("");
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  useEffect(() => {
    if (secondtOtp) {
      thirdRef.current.focus();
    } else {
      firstRef.current.focus();
    }
  }, [secondtOtp]);
  useEffect(() => {
    if (thirdOtp) {
      fourthRef.current.focus();
    } else {
      secondRef.current.focus();
    }
  }, [thirdOtp]);
  useEffect(() => {
    if (fourthOtp) {
      fifthRef.current.focus();
    } else {
      thirdRef.current.focus();
    }
  }, [fourthOtp]);
  useEffect(() => {
    if (!fifthOtp) {
      fourthRef.current.focus();
    }
  }, [fifthOtp]);
  useEffect(() => {
    if (!firstOtp) {
      firstRef.current.focus();
    } else {
      secondRef.current.focus();
    }
  }, [firstOtp]);
  useEffect(() => {
    if (firstOtp && fifthOtp && thirdOtp && fourthOtp && secondtOtp) {
      setActiveCode(firstOtp.concat(secondtOtp, thirdOtp, fourthOtp, fifthOtp));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firstOtp, fifthOtp, thirdOtp, fourthOtp, secondtOtp]);
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <form className="mt-4 flex h-[56px] gap-[17px]">
        <input
          ref={fifthRef}
          value={fifthOtp}
          onChange={(e) => {
            setFifthOtp(e.target.value);
          }}
          className={`h-full w-full rounded-[10px] border border-solid border-[#EFEFEF] p-6 outline-none focus:border-[#2C8EE8]`}
          type="text"
        />
        <input
          ref={fourthRef}
          value={fourthOtp}
          onChange={(e) => {
            setFourthOtp(e.target.value);
          }}
          className={`h-full w-full rounded-[10px] border border-solid border-[#EFEFEF] p-6 outline-none focus:border-[#2C8EE8]`}
          type="text"
        />
        <input
          ref={thirdRef}
          value={thirdOtp}
          onChange={(e) => {
            setThirdOtp(e.target.value);
          }}
          className={` disabled h-full w-full rounded-[10px] border border-solid border-[#EFEFEF] p-6 outline-none focus:border-[#2C8EE8]`}
          type="text"
        />
        <input
          ref={secondRef}
          value={secondtOtp}
          onChange={(e) => {
            setSecondOtp(e.target.value);
          }}
          className={` h-full w-full  rounded-[10px] border border-solid border-[#EFEFEF] p-6 outline-none focus:border-[#2C8EE8]`}
          type="text"
        />
        <input
          ref={firstRef}
          value={firstOtp}
          onChange={(e) => {
            setFirstOtp(e.target.value);
          }}
          className={` h-full w-full rounded-[10px] border border-solid border-[#EFEFEF] p-6 outline-none focus:border-[#2C8EE8]`}
          type="text"
        />
      </form>
    </>
  );
}

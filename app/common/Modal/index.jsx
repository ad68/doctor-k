"use client";
import React, { useEffect, useRef } from "react";
import "./style.css";
import Close from "./icons/close";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ children, open, onClose, width }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const modalBox = useRef();
  const modalWrapper = useRef();
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────
  useEffect(() => {
    if (open) {
      modalWrapper.current.style.display = "block";
      showDialog();
    } else {
      hideDialog();
      setTimeout(() => {
        modalWrapper.current.style.display = "none";
      }, 200);
    }
    // eslint-disable-next-line
  }, [open]);

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const showDialog = () => {
    setTimeout(() => {
      modalBox.current.style.transform = "scale(1)";
    }, 10);
  };
  const hideDialog = () => {
    setTimeout(() => {
      modalBox.current.style.transform = "scale(0)";
      onClose();
    }, 10);
  };

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section ref={modalWrapper} className="fixed  h-full w-full top-0 left-0 flex items-center justify-center z-[500]">
      <section onClick={onClose} className="modalOverLay">
      </section>
      <section className="modalWrapper ">
        <section
          ref={modalBox}
          className="modalBox  mx-auto z-[1000] bg-white"
          style={{ width: width ? width : 500 }}
        >
          <section
            onClick={onClose}
            className="absolute left-[9px] xl:left-4 top-[6px] xl:top-3 z-10 h-[1px] w-[11px] xl:w-[18px] cursor-pointer rounded-full  transition-all hover:bg-slate-200"
          >
            <Close fill="#434343" color="#434343" width='15' height='15' viewBox="0 0 24 24" className='xl:hidden' />
            <Close fill="#434343" color="#434343" width='20' height='20' viewBox="0 0 24 24" className='xl:block hidden' />
          </section>
          {open ? <section>{children}</section> : ""}
        </section>
      </section>
    </section>


  );
}


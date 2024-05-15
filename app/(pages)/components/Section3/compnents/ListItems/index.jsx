"use client";
import React from "react";
import Item from "./Item";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return <>
  <section className="w-full mx-auto h-[256px] flex mt-[71px] gap-6">
    <Item img='/images/Rectangle.png' name='علی امیری' rate='3.9' status='در حال مشاوره' background='bg-[#E5B403]'/>
    <Item img='/images/Rectangle.png' name='علی امیری' rate='3.9' status='در حال مشاوره' background='bg-[#E5B403]'/>
    <Item img='/images/Rectangle.png' name='علی امیری' rate='4.7' status='آفلاین' background='bg-[#E51C0F]'/>
    <Item img='/images/Rectangle.png' name='علی امیری' rate='4.3' status='آنلاین' background='bg-[#04A845]'/>
    <Item img='/images/Rectangle.png' name='علی امیری' rate='3.9' status='در حال مشاوره' background='bg-[#E5B403]'/>
  </section>
  </>;
}
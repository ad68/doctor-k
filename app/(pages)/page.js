"use client";
import Section1 from "./home/Section1";
import Section2 from "./home/Section2";
import Section3 from "./home/Section3";
import Section6 from "./home/Section6";
import Section4 from "./home/Section4";
import Section5 from "./home/Section5";
import Section7 from "./home/Section7";
import Section8 from "./home/Section8";
import Section9 from "./home/Section9";
import Section10 from "./home/Section10";
import { UserChat } from "@/common";

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function page() {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  //

  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <UserChat />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
    </>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import BoxItems from "./components/BoxItems";
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
  <section className="py-6">
  <header className="flex gap-3 items-center mb-6">
      <Image src={"/images/icons/note-322.svg"} width={32} height={32} alt=""/>
      <span className="text-[20px] font-bold text-[#2C8EE8]">مراکز درمانی  </span>
      </header>
      <section className="grid gap-4"> 
        <BoxItems title={"کلینیک مدینو"} image={"/images/image 19.png"} item={["سرطان پوست", "التهابات پوستی", "اگزما", "خشکی پوست", "خشکی پوست"]}/>
        <BoxItems title={"بیمارستان مرکزی شیراز"} image={"/images/image 16.png"} item={["اگزما","اگزما","خشکی پوست","خشکی پوست","خشکی پوست","خشکی پوست","سرطان پوست","التهابات پوستی"]}/>
        <BoxItems image={"/images/image 18.png"} title={"کلینیک درمانگاه تخصصی مغز و اعصاب و روان رها"} item={["سرطان پوست","التهابات پوستی","اگزما","خشکی پوست","خشکی پوست","خشکی پوست"]}/>
      </section>
    </section></>;
}

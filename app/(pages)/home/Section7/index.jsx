"use client";
import React from "react";
import Image from "next/image";
import InfoBox from "./components/InfoBox";
import { IconArrowLeft, IconArrowRight } from "@/common/icons";

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
  <section className="grid justify-items-center gap-[34px] bg-[#F8FCFF] xl:w-full pb-[104px] "> 
    <header className="grid justify-items-center gap-2 mt-[104.71px]">
        <section className="flex gap-[10px]">
            <Image src='/images/icons/capsule_32.svg' width={32} height={32} alt="" />
            <h1 className="text-[24px] font-bold text-[#505050]">برترین پزشکان دکترکا</h1>
        </section>
        <p className="text-[14px] font-normal text=[#707070]">عموم مشاوران دکترکا، متخصص یا فوق تخصص رشته خود می باشند و صلاحیت علمی و عملی آنها توسط هیات علمی دکترکا بررسی شده است.</p>
    </header>
    <section className="flex gap-3 relative ">
    <span className="absolute bottom-[30%] right-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowRight
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
        <InfoBox img={"/images/profile.png"} text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته ."} name={"ینامز هراهب"} title={"متخصص گوش و حلق وبینی"} />
        <InfoBox img={"/images/profile.png"} text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته ."} name={"ینامز هراهب"} title={"متخصص گوش و حلق وبینی"} />
        <InfoBox img={"/images/profile.png"} text={"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته ."} name={"ینامز هراهب"} title={"متخصص گوش و حلق وبینی"} />
        
    <span className="absolute bottom-[30%] left-0 flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
            <IconArrowLeft
              fill="white"
              color="white"
              width={11}
              height={18.73}
              viewBox="0 -2 15 15"
            />
          </span>
    </section>
  </section>
  </>;
}

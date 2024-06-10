"use client";
import React from "react";
import Item from "./components/Item";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
/* import {IconArrowLeft, IconArrowRight} from "@/common/icons";
import Icon from "@ant-design/icons/lib/components/Icon"; */
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({ list }) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // ─── States ─────────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full h-[500px] ltr">
      <Slider {...settings}>
        {list?.map((item, index) => (<Item
          key={index}
          img="/images/Rectangle.png"
          name={`${item.firstName} ${item.lastName}`}
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />))}
        {/*   <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />
        <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />
        <Item
          img="/images/Rectangle.png"
          name="فرزانه محمدی"
          rate="4.7"
          status="آفلاین"
          background="bg-[#E51C0F]"
        />
        <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="4.3"
          status="آنلاین"
          background="bg-[#04A845]"
        />
        <Item
          img="/images/Rectangle.png"
          name="نیما محسنی کبیر"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        />
        <Item
          img="/images/Rectangle.png"
          name="علی امیری"
          rate="4.3"
          status="آنلاین"
          background="bg-[#04A845]"
        />
        <Item
          img="/images/Rectangle.png"
          name="نیما محسنی کبیر"
          rate="3.9"
          status="در حال مشاوره"
          background="bg-[#E5B403]"
        /> */}
      </Slider>
      {/*  <section className="w-auto h-[5px] gap-[2px] flex my-4 ">
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
      </section> */}
    </section>
  );
}

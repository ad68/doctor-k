"use client";
import React from "react";
import Item from "./Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
/* import {IconArrowLeft, IconArrowRight} from "@/common/icons";
import Icon from "@ant-design/icons/lib/components/Icon"; */
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
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
    <section className="w-full h-[500px]">
      {/*   <section className="flex h-full w-full  justify-center items-end  gap-6"> */}
      {/*   <span className="absolute right-0 bottom-[45%] flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] hover:bg-[#2C8EE8] bg-[#D1D1D1]">
  
           <IconArrowRight fill='white' color='white' width={11}  height={18.73} viewBox='0 -2 15 15'/>
          </span> */}
      <Slider {...settings}>
        {/* <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            1
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            2
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            3
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            4
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            5
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            6
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            7
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            8
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            6
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            7
          </h3>
        </div>
        <div className="inline-block px-5">
          <h3 className="flex h-[60px] items-center justify-center bg-red">
            8
          </h3>
        </div> */}
        <Item
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
        />
      </Slider>

      {/*  <span className="absolute left-0 bottom-[45%] flex h-[24px] w-[38px] cursor-pointer items-center justify-center rounded-[50px] bg-[#D1D1D1] hover:bg-[#2C8EE8]">
          <IconArrowLeft fill='white' color='white' width={11}  height={18.73} viewBox='0 -2 15 15' />
          </span> */}
      {/* </section> */}
      {/*  <section className="w-auto h-[5px] gap-[2px] flex my-4 ">
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
        <span className="w-[18px] hover:w-[30px] h-full hover:bg-[#2C8EE8] transition-all bg-[#C0E8FF] rounded-[15px]"></span>
      </section> */}
    </section>
  );
}

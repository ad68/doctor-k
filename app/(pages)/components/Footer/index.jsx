"use client";
import Image from "next/image";
function Footer() {
  return (
    <>
      <section className="relative w-full bg-white ">
        <section className="mx-auto flex h-[105px] w-[1170px]  items-center justify-between px-4 text-[#505050]">
          <Image
            src="/images/blue phone.png"
            width={252}
            height={201}
            alt=""
            className="absolute bottom-[-40px]"
          />
          <section className="mr-[298px] flex w-[423px] flex-col">
            <span className="text-2xl font-bold text-[#505050]">
              ارتباط 24 ساعته با پشتیبانی دکترکا
            </span>
            <span className="text-sm font-medium text-[#707070]">
              پشتیبانی ۷ روز هفته؛ ۹ صبح الی ۱ بامداد{" "}
            </span>
          </section>
          <span className=" flex w-[125px] items-center gap-2 ">
            <span className="text-[40px] font-bold text-[#505050]" dir="ltr">
              41559
            </span>
            <Image
              src="/images/phon-icon-blue.png"
              width={32}
              height={32}
              alt=""
              className=""
            />
          </span>
        </section>
      </section>
      <section className="w-full bg-[#1F7FD7]">
        <section className="mx-auto flex  h-[411px]   w-[1170px] py-[58px] text-white">
          <section className="flex w-[355px] flex-col gap-[40px] ">
            <h1 className="text-[30px]  font-bold">دکتر کا</h1>
            <span className="text-justify text-xl font-bold leading-[34.55px]">
              دریافت با کیفیت‌ترین خدمات پزشکی در سرتاسر ایران بدون محدودیت
              جغرافیایی
            </span>
            <section className="flex w-full justify-between ">
              <span className="text-sm">شبکه های اجتماعی</span>
              <section className="flex items-center gap-[14px]">
                <Image
                  src="/images/icons/instagram-fill.png"
                  width={32}
                  height={32}
                  alt=""
                  className=""
                />
                <Image
                  src="/images/icons/facebook-fill.png"
                  width={32}
                  height={32}
                  alt=""
                  className=""
                />
                <Image
                  src="/images/icons/linkedin.png"
                  width={32}
                  height={32}
                  alt=""
                  className=""
                />
              </section>
            </section>
          </section>
          <section className="mr-[246px] flex w-[180px] flex-col gap-4 text-sm">
            <span className="mb-2 text-xl font-bold">دسترسی سریع</span>
            <span>گام به گام استفاده از خدمات</span>
            <span>سوالات متداول</span>
            <span>اخبار</span>
            <span>مقالات</span>
            <span>قوانین و مقررات</span>
          </section>
          <section className="mr-[104px] flex w-[264px] flex-col gap-4 text-sm">
            <span className="mb-2 text-xl font-bold">راه‌های ارتباطی</span>
            <span className="flex items-center gap-[15px]">
              <Image
                src="/images/icons/location.svg"
                width={24}
                height={24}
                alt=""
                className=""
              />
              تهران، یوسف آباد
            </span>
            <span className="flex items-center gap-[15px]">
              <Image
                src="/images/icons/phone-footer.svg"
                width={24}
                height={24}
                alt=""
                className=""
              />
              <span>
                تلفن روابط عمومی
                <span dir="ltr">021_41559</span>
              </span>
            </span>
            <section className="mt-[37px] flex items-center gap-[14px]">
              <Image
                src="/images/logo-footer1.png"
                width={72}
                height={72}
                alt=""
                className=""
              />
              <Image
                src="/images/logo-footer2.png"
                width={72}
                height={72}
                alt=""
                className=""
              />
              <Image
                src="/images/logo-footer3.png"
                width={72}
                height={72}
                alt=""
                className=""
              />
            </section>
          </section>
        </section>
        <section className="mx-auto h-[1px]  w-[1092px] bg-white"></section>
        <section className="lead-[24.18px] flex h-auto w-full justify-center gap-4 py-[21px] text-sm text-white">
          <span className="cursor-pointer">صفحه اصلی</span>
          <span className="cursor-pointer">مشاوره آنلاین</span>
          <span className="cursor-pointer">جستجوی پزشک</span>
          <span className="cursor-pointer">انجمن سلامت</span>
          <span className="cursor-pointer">داروخانه و فروشگاه</span>
          <span className="cursor-pointer">درباره ما</span>
          <span className="cursor-pointer">تماس با ما</span>
        </section>
      </section>
    </>
  );
}

export default Footer;

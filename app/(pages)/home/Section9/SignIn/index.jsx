// "use client";

// import { TextBox } from "@/common";
// import React, { useState } from "react";
// import Image from "next/image";
// import SendActiveCode from "./components/SendActiveCode";
// import RequestActiveCode from "./components/RequestActiveCode";
// import DoctorUserForm from "./components/DoctorUserForm";
// // ────────────────────────────────────────────────────────── I ──────────
// //   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// // ────────────────────────────────────────────────────────────────────
// //

// export default function Index({ setResponse,children, open, onClose, width, title,closeModal }) {
//   // ─── Global Variable ────────────────────────────────────────────────────────────

//   // ─── States ─────────────────────────────────────────────────────────────────────
//   const [status,setStatus]=useState(1)
//   const [phoneNumber, setPhoneNumber] = useState("");

//   // ─── Life Cycle ─────────────────────────────────────────────────────────────────

//   // ─── Functions ──────────────────────────────────────────────────────────────────

//   //
//   // ──────────────────────────────────────────────────── I ──────────
//   //   :::::: R E N D E R : :  :   :    :     :        :          :
//   // ──────────────────────────────────────────────────────────────
//   //
//   return (
//     <section className="w-full p-8">
//       <span className="mt-[-10px] block text-center text-2xl font-bold text-[#2C8EE8]">
//         دکترکا
//       </span>
//       {
//         status===1&&<RequestActiveCode setPhoneNumber={setPhoneNumber} phoneNumber={phoneNumber} setActiveModal={setStatus}/>
//       }
//        {
//         status===2&& <SendActiveCode setCurrentUserInfo={setCurrentUserInfo} phoneNumber={phoneNumber} closeModal={closeModal} setActiveModal={setStatus}/>
//       }
//      {
//        status===3&&<DoctorUserForm currentUserInfo={currentUserInfo} setStatus={setStatus}/>
//      }
//     </section>
//   );
// }
"use client";

import { TextBox } from "@/common";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import SendActiveCode from "./components/SendActiveCode";
import DoctorUserForm from "./components/DoctorUserForm";
import RequestActiveCode1 from "./components/RequestActiveCode1";
import { useAxios } from "@/hooks";
import { api } from "@/api";
import { Regex } from "@/enums";
import { notify } from "@/helper";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({
  setResponse,
  children,
  open,
  onClose,
  width,
  title,
  closeModal,
}) {
  // ─── Global Variable ────────────────────────────────────────────────────────────

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [status, setStatus] = useState(1);
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(true);
  const [firstSubmit, setFirstSubmit] = useState(false);
  const [currentUserInfo, setCurrentUserInfo] = useState({});
  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  // ─── Functions ──────────────────────────────────────────────────────────────────
  const RequestActiveCode = () => {
    setFirstSubmit(true);
    if (Regex.MOBILE.test(phoneNumber)) {
      setLoading(true);
      useAxios
        .get(api.authentication.sendOtp + `?phoneNumber=${phoneNumber}`)
        .then((res) => {
          setStatus(2);
          setLoading(false);
        })
        .catch((err) => {
          notify.Error("خطای ناشناخته");
          setLoading(false);
        });
    } else {
      setError(true);
    }
  };
  useEffect(() => {
    if (!Regex.MOBILE.test(phoneNumber) && firstSubmit) {
      setError(true);
    } else {
      setError(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phoneNumber]);
  //
  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <section className="w-full p-8">
      <span className="mt-[-10px] block text-center text-2xl font-bold text-[#2C8EE8]">
        دکترکا
      </span>
      {status === 1 && (
        <RequestActiveCode1
          RequestActiveCode={RequestActiveCode}
          error={error}
          setPhoneNumber={setPhoneNumber}
          phoneNumber={phoneNumber}
          setActiveModal={setStatus}
          firstSubmit={firstSubmit}
          loading={loading}
        />
      )}
      {status === 2 && (
        <SendActiveCode
          RequestActiveCode={RequestActiveCode}
          phoneNumber={phoneNumber}
          closeModal={closeModal}
          setActiveModal={setStatus}
          setCurrentUserInfo={setCurrentUserInfo}
        />
      )}
      {status === 3 && (
        <DoctorUserForm
          currentUserInfo={currentUserInfo}
          setStatus={setStatus}
          status={status}
        />
      )}
    </section>
  );
}

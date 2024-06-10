"use client";
import React  from "react";
import Introduction from "./components/Introduction";
import Comments from "./components/Comments";
import HealthCenters from "./components/HealthCenters";
import Articles from "./components/Articles";
import ImageGallery from "./components/ImageGallery";
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index({setActiveTab, activeTab}) {
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
  {activeTab===1 ? <Introduction/>:<></>}
  {activeTab===2 ? <Comments /> : <></>}
  {activeTab===3 ? <HealthCenters/> : <></>}
  {activeTab===4 ? <Articles/> : <></>}
  {activeTab===5? <ImageGallery/> : <></>}
  
  </>;
}

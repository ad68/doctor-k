"use client";
import React, { useState, useContext, useEffect } from "react";
import { Picker, format, newDate, DatePickerConfig } from "@persian-tools/persian-mobile-datepicker";
//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: C O M P O N E N T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

export default function Index() {
  // ─── Global Variable ────────────────────────────────────────────────────────────
  const DatePickerConfig = {
    year: {
      caption: {
        text: "سال",
      },
    },
    month: {
      caption: {
        text: "ماه",
      },
    },
    day: {
      caption: {
        text: "روز",
      },
    },
  };

  // ─── States ─────────────────────────────────────────────────────────────────────
  const [showPicker, setShowPicker] = React.useState(true);
  const [selectedDateValue, setSelectedDateValue] = React.useState();
  const [selectedDateEvents, setSelectedDateEvents] = React.useState([]);

  function handleSubmit(selectedDate) {
    const date = format(selectedDate.date, "d MMMM yyyy");
    const events = selectedDate.events;
    setSelectedDateValue(date);
    setSelectedDateEvents(events);
  }

  // ─── Functions ──────────────────────────────────────────────────────────────────

  // ─── Life Cycle ─────────────────────────────────────────────────────────────────

  //
  // ──────────────────────────────────────────────────── I ──────────
  //   :::::: R E N D E R : :  :   :    :     :        :          :
  // ──────────────────────────────────────────────────────────────
  //
  return (
    <>
      <section className='mt-[300px] h-[600px]'>
        <Picker
          isOpen={showPicker}
          config={DatePickerConfig}
          minDate={newDate({ year: 1331, month: 1, day: 1 })}
          maxDate={newDate({ year: 1390, month: 1, day: 1 })}
          onSubmit={handleSubmit}
          onChange={handleSubmit}
          onClose={() => setShowPicker(false)}
          /* highlightWeekends */
        />
      </section>
    </>
  );
}

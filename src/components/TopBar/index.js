import React from "react";
import { Button } from "primereact/button";
import { Calendar } from "primereact/calendar";
import logo from "../../assets/logo.png";

export default function TopBar({
  onClick,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) {
  return (
    <div className="top-bar">
      <img src={logo} width="200px" className="top-bar-img" alt="logo"></img>
      <div className="top-bar-calender">
        <label htmlFor="startDate" className="top-bar-calender-label">
          Start Date
        </label>
        <Calendar
          id="startDate"
          value={startDate}
          onChange={(e) => {
            setStartDate(e.value);
          }}
          dateFormat="mm-dd-yy"
          showIcon
          maxDate={new Date()}
        />
      </div>
      <div className="top-bar-calender">
        <label htmlFor="endDate" className="top-bar-calender-label">
          End Date
        </label>
        <Calendar
          id="endDate"
          value={endDate}
          onChange={(e) => {
            setEndDate(e.value);
          }}
          dateFormat="mm-dd-yy"
          showIcon
          maxDate={new Date()}
        />
      </div>
      <Button
        className="top-bar-button"
        label="Search"
        icon="pi pi-search"
        onClick={onClick}
      />
    </div>
  );
}

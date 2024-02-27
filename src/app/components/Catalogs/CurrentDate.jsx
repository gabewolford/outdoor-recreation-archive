"use client";

export default function CurrentDate() {
  const today = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[today.getMonth()];
  const day = today.getDate();
  const year = today.getFullYear();
  const formattedDate = month + " " + day + ", " + year;

  return formattedDate;
}

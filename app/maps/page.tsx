"use client";
import dynamic from "next/dynamic";

const Control = dynamic(
  () => import("./Control").then((mod) => mod.Control),
  {
    ssr: false,
  }
);

export default function Maps() {
  return <Control />;
}
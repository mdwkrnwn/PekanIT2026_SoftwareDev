"use client"
import { Content } from './Content';

import Image from "next/image";
import Link from "next/link";


import {
  FaBookmark,
  FaFacebookF,
  FaHeart,
  FaShareNodes,
  FaTwitter,
  FaUser,
} from "react-icons/fa6";

import { BsLink45Deg, BsWhatsapp } from "react-icons/bs";

import { articlePoints, popularArticles } from "@/lib/mockData";
import { Sidebar } from './Sidebar';

export default function ArticlePage() {

  return (
    <div className="w-[86vw]">
      <section className="grid gap-10 xl:grid-cols-[2fr_1fr]">
        {/* Main Content */}
        <Content articlePoints={articlePoints} />

        {/* Sidebar */}
        <Sidebar popularArticles={popularArticles} />
      </section>
    </div>
  );
}
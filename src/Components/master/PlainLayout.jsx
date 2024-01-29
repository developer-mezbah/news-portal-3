import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import { PrismaClient } from "@prisma/client";
import { Toaster } from "react-hot-toast";
import AppNavbar from "./navbar/AppNavbar";
import Footer from "./footer/Footer";
import { cookies } from "next/headers";

async function getData() {
  try {
    const prisma = new PrismaClient();
    const social = await prisma.socials.findMany({});
    const categories = await prisma.categories.findMany({});
    return { social: social, categories: categories };
  } catch (error) {
    console.log(error);
  }
}

const PlainLayout = async (props) => {

  const cookieStore = cookies()
  const token = cookieStore.get('token')
  let isLogin = false
  isLogin = typeof token !== "undefined"

  const { social, categories } = await getData();
  return (
    <div>
      <TopNavbar socialData={social} />
      <Toaster position="bottom-center" />
      <AppNavbar categories={categories} isLogin={isLogin} />
      {props.children}
      <Footer data={{ social, categories }} />
    </div>
  );
};

export default PlainLayout;

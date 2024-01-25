import React from "react";
import TopNavbar from "./navbar/TopNavbar";
import { PrismaClient } from "@prisma/client";
import { Toaster } from "react-hot-toast";
import AppNavbar from "./navbar/AppNavbar";
import Footer from "./footer/Footer";
import { AuthCheck } from "../Auth/AuthCheck";

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
  const { social, categories } = await getData();
  const { email } = AuthCheck();
  return (
    <div>
      <TopNavbar socialData={social} />
      <Toaster position="bottom-center" />
      <AppNavbar categories={categories} auth={email} />
      {props.children}
      <Footer data={{ social, categories }} />
    </div>
  );
};

export default PlainLayout;

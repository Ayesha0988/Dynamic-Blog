import AuthoreCard from "@/components/AuthoreCard";
import Footer from "@/components/Footer";
import Mega from "@/components/Mega";
import NavBar from "@/components/NavBar";
import React from "react";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Mega />
      <AuthoreCard />
      <Footer/>
    </div>
  );
}

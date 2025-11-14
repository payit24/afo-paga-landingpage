"use client";
import React, { useState, useEffect } from "react";
import  Navbar  from "./components/Navbar";
import  Hero  from "./components/Hero";
import  Stats  from "./components/Stats";
import  {Footer}  from "./components/Footer";

export default function PayConnectLanding() {
  const faqs = [
    { q: "Is my financial data secure?", icon: "❓" },
    { q: "Which payment methods supported?", icon: "❓" },
    { q: "What are the fees?", icon: "❓" },
    { q: "Works offline?", icon: "❓" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navbar />
      <Hero />
      <Stats />
      <Footer />
    </div>
  );
}

"use client";
import React, { useState, useEffect } from "react";
import  Navbar  from "./components/Navbar";
import  Hero  from "./components/Hero";

export default function PayConnectLanding() {
  const stats = [
    { value: "50k+", label: "Active Users" },
    { value: "3", label: "Countries" },
    { value: "24/7", label: "Support Available" },
    { value: "99.9%", label: "Uptime Record" },
  ];

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
    </div>
  );
}

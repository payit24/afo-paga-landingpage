"use client";
import React, { useState, useEffect } from "react";
import  Navbar  from "./components/Navbar";
import  Hero  from "./components/Hero";
import  Stats  from "./components/Stats";
import  {Solution}  from "./components/Solution";
import  {Footer}  from "./components/Footer";
import { Steps } from "./components/Steps";
import FeaturesHighlight from "./components/FeatureHiglight";
import CountryCoverage from "./components/CountryCoverage";
import  Testimonial  from "./components/Testimonial";
import FAQ from "./components/faqs";

export default function PayConnectLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50">
      <Navbar />
      <Hero />
      <Stats />
      <Solution />
      <Steps />
      <FeaturesHighlight />
      <CountryCoverage />
      <Testimonial />
      <FAQ />
      <Footer />
    </div>
  );
}

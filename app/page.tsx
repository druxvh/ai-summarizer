import CTA from "@/components/landing-page/CTA";
import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Hero from "@/components/landing-page/Hero";
import type React from "react"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}
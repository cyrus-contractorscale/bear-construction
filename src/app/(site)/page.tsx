import type { Metadata } from "next";
import { HomePage } from "@/components/home/HomePage";

export const metadata: Metadata = {
  title: "Bear Construction | Wellington Renovation & Extension Builders",
  description:
    "Wellington renovation builders — home extensions, renovations, exterior cladding & leaky home repairs across Wellington, Lower Hutt, Upper Hutt and Porirua.",
  keywords: [
    "renovation builders wellington",
    "home extensions wellington",
    "bathroom renovations wellington",
    "kitchen renovations wellington",
    "exterior cladding wellington",
    "leaky home repair wellington",
    "bear construction",
  ],
};

export default function Home() {
  return <HomePage />;
}

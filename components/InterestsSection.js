import React from "react";
import InterestsMd from "@/data/home/Interests.mdx";

export default function InterestSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Research Interests</h1>
      <div className="flex flex-col gap-2">
      <InterestsMd/>
      </div>
    </section>
  );
}

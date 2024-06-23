import React from "react";
import Quote from "@/data/home/Quote";

export default function QuoteSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Quote</h1>
      <div className="flex flex-col gap-2">
        <Quote />
      </div>
    </section>
);
}

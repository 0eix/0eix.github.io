import React from "react";
import QuoteMd from "@/data/home/Quote.mdx";

export default function QuoteSection() {
  return (
    <section className="flex flex-col gap-3">
      <h1 className="text-3xl font-semibold">Quote</h1>
      <div className="flex flex-col gap-2">
        <QuoteMd />
      </div>
    </section>
);
}

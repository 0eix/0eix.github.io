import React from "react";
import NewsMd from "@/data/home/News.mdx";

export default function NewsSection() {
  return (
    <section className="flex flex-col gap-3">
      <NewsMd />
    </section>
  );
}

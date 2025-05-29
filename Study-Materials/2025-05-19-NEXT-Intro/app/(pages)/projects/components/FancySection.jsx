"use client";

import { useState } from "react";

export const FancySection = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="p-8 bg-slate-700 grid gap-8 rounded-xl">
      <h2 className="text-2xl">Some other headertext</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis velit
        veritatis, iusto voluptas nulla asperiores eligendi alias vitae
        possimus! Quod facilis ducimus accusamus dolore cumque, iste possimus
        sapiente recusandae laboriosam.
      </p>
      <button onClick={() => setIsOpen(!isOpen)}>Click</button>
      <div className={`${isOpen ? "block" : "hidden"}`}>Show me the monay!</div>
    </section>
  );
};

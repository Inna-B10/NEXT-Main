"use client";

import { useState } from "react";
import { CounterButton } from "./base/buttons/CounterButtons";

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };
  return (
    <section className="p-8 bg-slate-800 flex flex-col justify-center items-center gap-4">
      <h2>Counter</h2>
      <div className="grid grid-cols-2 gap-4">
        <CounterButton
          onclick={decrement}
          text="-"
          className="bg-primary"
        />

        <CounterButton
          onclick={increment}
          text="+"
          className="bg-green-500"
        />
      </div>
      <p>Counter: {count}</p>
    </section>
  );
};

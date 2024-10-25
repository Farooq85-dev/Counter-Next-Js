"use client";
import { useState } from "react";
import BtnComp from "./components/Button";

export default function Home() {
  const [counter, setCounter] = useState<number>(0);
  return (
    <>
      <h1>{counter}</h1>
      <BtnComp title={"Decrement"} onclick={() => setCounter(counter - 1)} />
      <BtnComp title={"Increment"} onclick={() => setCounter(counter + 1)} />
    </>
  );
}

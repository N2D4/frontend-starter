"use client";

import { AsyncButton } from "@/components/async-button";
import { wait } from "@/utils/promises";

export function WaitABit() {
  return (
    <AsyncButton
      onClick={async () => {
        await wait(5_000);
        alert("You waited 5 seconds!");
      }}
    >
      Click me!
    </AsyncButton>
  );
}

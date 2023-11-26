"use client";

import { AsyncIconButton } from "@/components/async-icon-button";
import { Icon } from "@/components/icon";
import { wait } from "@/utils/promises";

export function WaitABit() {
  return (
    <>
    Click this icon button:
      <AsyncIconButton
        onClick={async () => {
          await wait(5_000);
          alert("You waited 5 seconds!");
        }}
      >
        <Icon icon="alarm" />
      </AsyncIconButton>
    </>
  );
}

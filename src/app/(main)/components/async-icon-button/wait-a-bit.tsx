"use client";

import { AsyncIconButton } from "@/components/async-icon-button";
import { Icon } from "@/components/icon";
import { wait } from "@/utils/promises";
import { Box } from "@mui/joy";

export function WaitABit() {
  return (
    <Box>
      Click this button!<br />
      <AsyncIconButton
        onClick={async () => {
          await wait(5_000);
          alert("You waited 5 seconds!");
        }}
      >
        <Icon icon="alarm" />
      </AsyncIconButton>
    </Box>
  );
}

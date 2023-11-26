"use client";

import { Icon } from "@/components/icon";
import { Autocomplete, Stack } from "@mui/joy";
import { useState } from "react";

export function IconPlayground() {
  const [icon, setIcon] = useState("move_selection_down");

  return (
    <Stack alignItems="center" gap={2}>
      <Autocomplete
        options={[...Icon.allIcons]}
        value={icon}
        onChange={(_, v) => setIcon(v ?? "")}
      />
      <Icon icon={icon as any} />
    </Stack>
  );
}

"use client";

import { PageLoadingIndicator } from "@/components/page-loading-indicator";
import { Checkbox } from "@mui/joy";
import { useState } from "react";

export function PageLoadingCheckbox() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Checkbox
        label="Show loading indicator"
        checked={isLoading}
        onChange={(e) => setIsLoading(e.target.checked)}
      />
      {isLoading && <PageLoadingIndicator />}
    </>
  );
}

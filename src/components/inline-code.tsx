"use client";

import { useSnackbar } from "@/hooks/use-snackbar";
import { getNodeText } from "@/utils/react";
import { Typography, TypographyProps } from "@mui/joy";

export function InlineCode(props: TypographyProps<"code">) {
  const snackbar = useSnackbar();

  return (
    <Typography
      component="code"
      display="inline"
      {...props}
      style={{
        cursor: "pointer",
        ...props.style,
      }}
      onClick={async (...args: any[]) => {
        try {
          await navigator.clipboard.writeText(getNodeText(props.children));
          snackbar.showSuccess('Copied to clipboard!');
        } catch (e) {
          snackbar.showError('Failed to copy to clipboard!');
        }
      }}
    />
  );
}

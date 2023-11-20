"use client";

import { useSnackbar } from "@/hooks/use-snackbar";
import { getNodeText } from "@/utils/react";
import { TypographyProps } from "@mui/joy";

export function InlineCode(props: TypographyProps) {
  const snackbar = useSnackbar();

  return (
    <code
      {...props}
      style={{
        cursor: "pointer",
        ...props.style,
      }}
      onClick={async (...args) => {
        try {
          await navigator.clipboard.writeText(getNodeText(props.children));
          snackbar.showSuccess('Copied to clipboard!');
        } catch (e) {
          snackbar.showError('Failed to copy to clipboard!');
        } finally {
          props.onClick?.(...args);
        }
      }}
    />
  );
}

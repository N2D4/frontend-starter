"use client";

import { useSnackbar } from "@/hooks/use-snackbar";
import { hasClickableParent } from "@/utils/dom";
import { getNodeText } from "@/utils/react";
import { Typography, TypographyProps } from "@mui/joy";
import { MouseEvent } from "react";

export function InlineCode(props: TypographyProps<"code">) {
  const { onClick, style, ...typographyProps } = props;

  const snackbar = useSnackbar();

  return (
    <Typography
      component="code"
      display="inline"
      data-n2-clickable={true}
      {...typographyProps}
      style={{
        cursor: "pointer",
        ...style,
      }}
      onClick={(e: MouseEvent<HTMLElement>) => {
        onClick?.(e);
        if (!hasClickableParent(e.currentTarget)) {
          e.stopPropagation();
          e.preventDefault();
          void (async () => {
            try {
              await navigator.clipboard.writeText(getNodeText(props.children));
              snackbar.showSuccess('Copied to clipboard!');
            } catch (e) {
              snackbar.showError('Failed to copy to clipboard!');
            }
          })();
        }
      }}
    />
  );
}

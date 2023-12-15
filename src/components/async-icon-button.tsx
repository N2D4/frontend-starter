"use client";

import { CircularProgress, IconButton, IconButtonProps } from "@mui/joy";
import React from "react";

export function AsyncIconButton(props: Omit<IconButtonProps, 'onClick'> & {
  onClick?: (...args: Parameters<IconButtonProps['onClick'] & {}>) => Promise<void> | void | any,
  onChangeIsLoading?: (isProcessing: boolean) => void,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  
  return (
    <IconButton
      {...props}
      disabled={isLoading || props.disabled}
      onClick={async (...args) => {
        setIsLoading(true);
        props.onChangeIsLoading?.(true);
        try {
          await props.onClick?.(...args);
        } finally {
          setIsLoading(false);
          props.onChangeIsLoading?.(false);
        }
      }}
    >
      {isLoading ? <CircularProgress /> : props.children}
    </IconButton>
  );
};

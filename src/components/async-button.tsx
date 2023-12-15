"use client";

import { Button, ButtonProps } from "@mui/joy";
import React from "react";

export function AsyncButton(props: Omit<ButtonProps, 'onClick'> & {
  onClick?: (...args: Parameters<ButtonProps['onClick'] & {}>) => Promise<void> | void | any,
  onChangeIsLoading?: (isProcessing: boolean) => void,
}) {
  const [isLoading, setIsLoading] = React.useState(false);
  
  return (
    <Button
      {...props}
      loading={isLoading || props.loading}
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
    />
  );
};

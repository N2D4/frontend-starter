"use client";

import { useSnackbar } from "@/hooks/use-snackbar";
import { Button } from "@mui/joy";

export function ComplexCustomizedSnackbar() {
  const snackbar = useSnackbar();

  return (
    <Button
      onClick={() => snackbar.show({
        children: "You clicked the button!",
        color: 'primary',
        size: 'lg',
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'center',
        },
        endDecorator: (
          <Button
            onClick={() => snackbar.showError("You clicked the new button!")}
          >
            Click me too!
          </Button>
        ),
      })}
    >
      Click me!
    </Button>
  );
}

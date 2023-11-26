"use client";

import { useSnackbar } from "@/hooks/use-snackbar";
import { Box, Button, Stack } from "@mui/joy";

export function SuccessOrError() {
  const snackbar = useSnackbar();

  return (
    <Stack gap={2}>
      <Button
        color="success"
        onClick={() => snackbar.showSuccess("You clicked the Success button!")}
      >
        Open Success
      </Button>
      <Button
        color="danger"
        onClick={() => snackbar.showError("You clicked the Error button!")}
      >
        Open Error
      </Button>
    </Stack>
  );
}

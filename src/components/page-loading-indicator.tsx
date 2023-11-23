import { Box, LinearProgress } from "@mui/joy";

export function PageLoadingIndicator() {
  return (
    <Box
      position="absolute"
      top={0}
      left={0}
      right={0}
      zIndex={9999999}
    >
      <LinearProgress
        variant="solid"
        sx={{
          width: '100%',
          "--LinearProgress-thickness": "5px",
          "--LinearProgress-radius": "0px",
          "--LinearProgress-progressRadius": "5px"      
        }}
      />
    </Box>
  );
}

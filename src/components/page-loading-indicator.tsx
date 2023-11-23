import { Box, LinearProgress } from "@mui/joy";

export function PageLoadingIndicator() {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      zIndex={9999999}
      sx={{
        pointerEvents: "none",
        animation: "page-loading-indicator 0.05s",
        "@keyframes page-loading-indicator": {
          "0%": {
            visibility: 'hidden',
          },
          "99%": {
            visibility: 'hidden',
          },
          "100%": {
            visibility: 'visible',
          },
        },
      }}
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

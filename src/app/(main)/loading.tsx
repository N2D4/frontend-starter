import { PageLoadingIndicator } from "@/components/page-loading-indicator";
import { Box } from "@mui/joy";

export default function Loading() {
  return (
    <>
      <PageLoadingIndicator />
      <Box sx={{ height: '100vh' }} />
    </>
  );
}

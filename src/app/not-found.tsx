import { Logo } from "@/components/logo";
import { Paragraph } from "@/components/paragraph";
import { SmartLink } from "@/components/smart-link";
import { Sheet, Stack } from "@mui/joy";

export default function NotFound() {
  return (
    <Sheet component="main">
      <Stack width="100vw" height="100vh" justifyContent="center" alignItems="center">
        <Paragraph body>
          <Logo width={128} />
        </Paragraph>

        <Paragraph h1>
        Oh no! 404
        </Paragraph>

        <Paragraph body textAlign="center">
        Page not found.<br />
          <SmartLink href="/">Go back home</SmartLink>
        </Paragraph>
      </Stack>
    </Sheet>
  );
}

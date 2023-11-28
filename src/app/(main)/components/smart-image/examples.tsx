import { ExampleCard } from "@/components/example-card";
import { Paragraph } from "@/components/paragraph";
import { SmartImage } from "@/components/smart-image";
import { deindent } from "@/utils/strings";
import { Stack, Typography } from "@mui/joy";

export function ImageWithoutGivenWidthExample() {
  return (
    <ExampleCard code={iconPlaygroundCode} language="tsx">
      <Stack>
        <SmartImage
          disableStrictCLS
          src="/logo.png"
          alt="Logo"
        />
        <Paragraph box>
          Note: this text will shift its position as soon as the image loads.
        </Paragraph>
      </Stack>
    </ExampleCard>
  );
}

const iconPlaygroundCode = deindent`
  <Stack>
    <SmartImage
      disableStrictCLS
      src="/logo.png"
      alt="Logo"
    />
    <Paragraph box>
      Note: this text will shift its position as soon as the image loads.
    </Paragraph>
</Stack>
`;

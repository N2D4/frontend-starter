import { ExampleCard } from "@/components/example-card";
import { SmartImage } from "@/components/smart-image";
import { deindent } from "@/utils/strings";
import { Stack } from "@mui/joy";

export function ImageWithoutGivenWidthExample() {
  return (
    <ExampleCard code={iconPlaygroundCode} language="tsx">
      <Stack>
        <SmartImage
          disableStrictCLS
          src="/logo.png"
          alt="Logo"
        />
        Note: this text will shift its position as soon as the image loads.
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
    Note: this text will shift its position as soon as the image loads.
  </Stack>
`;

import { CopyButton } from "@/components/copy-button";
import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { Box } from "@mui/joy";

export function CopyStaticStringExample() {
  return (
    <ExampleCard code={copyStaticStringCode} language="tsx">
      <Box>
        <CopyButton
          variant="outlined"
          content="Hello, world!"
        />
      </Box>
    </ExampleCard>
  );
}


const copyStaticStringCode = deindent`
  <CopyButton
    variant="outlined"
    content="Hello, world!"
  />
`;

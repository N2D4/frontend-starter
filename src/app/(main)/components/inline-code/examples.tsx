import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { Paragraph } from "@/components/paragraph";
import { InlineCode } from "@/components/inline-code";

export function CodeWithinAParagraphExample() {
  return (
    <ExampleCard code={codeWithinAParagraphCode} language="tsx">
      <Paragraph body>
        This is a paragraph with <InlineCode>some monospace code</InlineCode> that you can click on.
      </Paragraph>
    </ExampleCard>
  );
}

const codeWithinAParagraphCode = deindent`
  <Paragraph body>
    This is a paragraph. It also contains <InlineCode>some inline code</InlineCode>, that you can click on.
  </Paragraph>
`;

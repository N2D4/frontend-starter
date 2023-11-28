import { ExampleCard } from "@/components/example-card";
import { Paragraph } from "@/components/paragraph";
import { deindent } from "@/utils/strings";
import { Typography } from "@mui/joy";

export function DifferentCodeAndOutput() {
  return (
    <ExampleCard code={differentCodeAndOutputCode} language="tsx">
      <ExampleCard
        language="python"
        code={deindent`
          def func():
            return "This code could be anything; it's not actually run."
        `}
      >
        <Paragraph box>
          The code and output don&apos;t need to align; in fact, quite often they don&apos;t!
        </Paragraph>
      </ExampleCard>
    </ExampleCard>
  );
}

const differentCodeAndOutputCode = deindent`
  <ExampleCard
    language="python"
    code={deindent\`
      def func():
        return "This code could be anything; it's not actually run."
    \`}
  >
    <Paragraph box>
      The code and output don&apos;t need to align; in fact, quite often they don&apos;t!
    </Paragraph>
  </ExampleCard>
`;

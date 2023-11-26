import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";

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
        The code and output don't need to align; in fact, quite often they don't!
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
    The code and output don't need to align; in fact, quite often they don't!
  </ExampleCard>
`;

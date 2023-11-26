import { CodeBlock } from "@/components/code-block";
import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";

export function SimpleCodeBlockExample() {
  return (
    <ExampleCard code={simpleCodeBlockCode} language="tsx">
      <CodeBlock
        theme="inverted"
        language="python"
        lineNumbers
        code={deindent`
          def fib(n):
            if n <= 1:
              return n
            return fib(n - 1) + fib(n - 2)
        `}
      />
    </ExampleCard>
  );
}


const simpleCodeBlockCode = deindent`
  <CodeBlock
    theme="inverted"
    language="python"
    lineNumbers
    code="..."
  />
`;

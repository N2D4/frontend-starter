import { CodeBlock } from "@/components/code-block";
import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";

export function SimpleCodeBlockExample() {
  return (
    <ExampleCard code={simpleCodeBlockCode} language="tsx">
      <CodeBlock
        language="python"
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
    language="python"
    code="..."
  />
`;

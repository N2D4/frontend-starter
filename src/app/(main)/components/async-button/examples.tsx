import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { WaitABit } from "./wait-a-bit";

export function WaitABitExample() {
  return (
    <ExampleCard code={waitABitCode} language="tsx">
      <WaitABit />
    </ExampleCard>
  );
}


const waitABitCode = deindent`
  <AsyncButton
    onClick={async () => {
      await wait(5_000);
      alert("You waited 5 seconds!");
    }}
  >
    Click me!
  </AsyncButton>
`;

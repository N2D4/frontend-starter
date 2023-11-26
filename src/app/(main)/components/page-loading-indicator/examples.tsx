import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { Paragraph } from "@/components/paragraph";
import { InlineCode } from "@/components/inline-code";
import { Logo } from "@/components/logo";
import { PageLoadingCheckbox } from "./page-loading-checkbox";

export function PageLoadingCheckboxExample() {
  return (
    <ExampleCard code={pageLoadingCheckboxCode} language="tsx">
      <PageLoadingCheckbox />
    </ExampleCard>
  );
}

const pageLoadingCheckboxCode = deindent`
  <Logo height={64} />
`;

import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { Paragraph } from "@/components/paragraph";
import { InlineCode } from "@/components/inline-code";
import { Logo } from "@/components/logo";

export function LogoExample(props: { full?: boolean }) {
  return (
    <ExampleCard code={props.full ? logoFullCode : logoCode} language="tsx">
      <Logo height={64} full={props.full} />
    </ExampleCard>
  );
}

const logoCode = deindent`
  <Logo height={64} />
`;

const logoFullCode = deindent`
  <Logo height={64} full />
`;

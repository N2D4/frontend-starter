import { ExampleCard } from "@/components/example-card";
import { Paragraph } from "@/components/paragraph";
import { SmartLink } from "@/components/smart-link";
import { deindent } from "@/utils/strings";

export function VariousLinksExample() {
  return (
    <ExampleCard code={variousLinksCode} language="tsx">
      <Paragraph box>
        <SmartLink href="#props">Props section</SmartLink><br />
        <SmartLink href="/">Home</SmartLink><br />
        <SmartLink href="https://www.example.com">example.com</SmartLink>
      </Paragraph>
    </ExampleCard>
  );
}

const variousLinksCode = deindent`
  <Paragraph box>
    <SmartLink href="#props">Props section</SmartLink><br />
    <SmartLink href="/">Home</SmartLink><br />
    <SmartLink href="https://www.example.com">example.com</SmartLink>
  </Paragraph>
`;

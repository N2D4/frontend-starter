import { ExampleCard } from "@/components/example-card";
import { Paragraph } from "@/components/paragraph";
import { QuoteBlock } from "@/components/quote-block";
import { deindent } from "@/utils/strings";

export function QuotesWithParagraphsExample() {
  return (
    <ExampleCard code={quotesWithParagraphsCode} language="tsx">
      <Paragraph body>
        This is normal text.
        <QuoteBlock>
          This is a quote block, without a paragraph directly surrounding it, so there is no margin to the text above.
          <Paragraph body>
            <QuoteBlock>
              Wrap a quote block in a nested paragraph for extra margins.
            </QuoteBlock>
          </Paragraph>
          Text below the quote block
        </QuoteBlock>
      </Paragraph>
    </ExampleCard>
  );
}

const quotesWithParagraphsCode = deindent`
  <Paragraph body>
    This is normal text.
    <QuoteBlock>
      This is a quote block, without a paragraph directly surrounding it, so there is no margin to the text above.
      <Paragraph body>
        <QuoteBlock>
          Wrap a quote block in a nested paragraph for extra margins.
        </QuoteBlock>
      </Paragraph>
      Text below the quote block
    </QuoteBlock>
  </Paragraph>
`;

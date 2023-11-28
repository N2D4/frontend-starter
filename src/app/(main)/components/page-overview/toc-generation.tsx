"use client";

import { InlineCode } from "@/components/inline-code";
import { Overview, PageOverview } from "@/components/page-overview";
import { Paragraph } from "@/components/paragraph";
import { deindent } from "@/utils/strings";
import { Box, Card } from "@mui/joy";
import { useState } from "react";

export function TocGeneration() {
  const [pageOverview, setPageOverview] = useState<Overview | null>(null);

  const sectionToString = (section: Overview["sections"][number], depth: number): string => {
    const indent = "  ".repeat(depth);
    const subSections = section.subSections
      .map((sub) => sectionToString(sub, depth + 1));
    return deindent`
      ${indent}level ${section.level}: #${section.id}
      ${subSections.join("")}
    `;
  };

  return (
    <Box>
      <PageOverview onOverviewChange={setPageOverview}>
        <Box border="1px solid red">
          <Paragraph className="n2-ignore-on-this-page" body id="some-text">Some body.</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" h1 id="h1-title">h1 title</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" h1 id="another-h1-title">Another h1 title</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" body id="some-other-text">Some other body.</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" h2 id="h2-title">h2 title</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" h3 id="h3-title">h3 title</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" h2 id="another-h2-title">Another h2 title</Paragraph>
          <Paragraph className="n2-ignore-on-this-page" h2>h2 title without id</Paragraph>
        </Box>
      </PageOverview>
    
      <Paragraph body>
        <InlineCode whiteSpace="pre">
          {pageOverview == null
            ? "Loading..."
            : pageOverview.sections.map(s => sectionToString(s, 0))}
        </InlineCode>
      </Paragraph>
    </Box>
  );
}

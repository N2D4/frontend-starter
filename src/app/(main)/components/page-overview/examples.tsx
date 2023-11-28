import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { TocGeneration } from "./toc-generation";

export function PageOverviewExample() {
  return (
    <ExampleCard code={pageOverviewCode} language="tsx">
      <TocGeneration />
    </ExampleCard>
  );
}

const pageOverviewCode = deindent`
  function TocGeneration() {
    const [pageOverview, setPageOverview] = useState<Overview | null>(null);

    const sectionToString = (section: Overview["sections"][number], depth: number): string => {
      const indent = "  ".repeat(depth);
      const subSections = section.subSections
        .map((sub) => sectionToString(sub, depth + 1));
      return deindent\`
        \${indent}level \${section.level}: #\${section.id}
        \${subSections.join("")}
      \`;
    };

    return (
      <Box>
        <PageOverview onOverviewChange={setPageOverview}>
          <Box border="1px solid red">
            <Paragraph body id="some-text">Some body.</Paragraph>
            <Paragraph h1 id="h1-title">h1 title</Paragraph>
            <Paragraph h1 id="another-h1-title">Another h1 title</Paragraph>
            <Paragraph body id="some-other-text">Some other body.</Paragraph>
            <Paragraph h2 id="h2-title">h2 title</Paragraph>
            <Paragraph h3 id="h3-title">h3 title</Paragraph>
            <Paragraph h2 id="another-h2-title">Another h2 title</Paragraph>
            <Paragraph h2>h2 title without id</Paragraph>
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
`;

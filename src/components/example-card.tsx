import { Card, CardContent, CardOverflow, CardProps, Divider, Sheet } from "@mui/joy";
import { CodeBlock } from "./code-block";

export function ExampleCard(props: CardProps & {
  expandContent?: boolean,
  code: string,
  language: string,
  codeProps?: React.ComponentProps<typeof CodeBlock>,
  children: React.ReactNode,
}) {
  const { expandContent, code, language, children, ...otherProps } = props;

  return (
    <Card
      {...otherProps}
    >
      {expandContent ? (
        <CardOverflow
          sx={{
            padding: 0,
            overflow: 'hidden',
          }}
        >
          {children}
        </CardOverflow>
      ) : (
        <CardContent>
          {children}
        </CardContent>
      )}
      <CardOverflow
        sx={{
          padding: 0,
          overflow: 'hidden',
        }}
      >
        <Divider />
        <CodeBlock
          disableBorder
          lineNumbers
          code={code}
          language={language}
          {...props.codeProps}
        />
      </CardOverflow>
    </Card>
  );
}

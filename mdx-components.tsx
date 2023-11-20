import { CodeBlock } from '@/components/code-block';
import { InlineCode } from '@/components/inline-code';
import { Paragraph } from '@/components/paragraph';
import { QuoteBlock } from '@/components/quote-block';
import { Box, Checkbox, Divider, Grid, Link, Stack, Table, Typography } from '@mui/joy';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => (
      <Paragraph h1 {...props as {}} />
    ),
    h2: (props) => (
      <Paragraph h2 {...props as {}} />
    ),
    h3: (props) => (
      <Paragraph h3 {...props as {}} />
    ),
    h4: (props) => (
      <Paragraph h4 {...props as {}} />
    ),
    h5: (props) => (
      <Paragraph h4 component="h5" {...props as {}} />
    ),
    h6: (props) => (
      <Paragraph h4 component="h6" {...props as {}} />
    ),
    p: (props) => (
      <Paragraph body {...props as {}} />
    ),
    a: (props) => (
      <Link {...props as {}} />
    ),
    table: (props) => (
      <Table {...props as {}} sx={{
        tableLayout: 'auto',
        width: 'auto',
        '& th': {
          backgroundColor: 'transparent',
        },
      }}/>
    ),
    ul: (props) => (
      <ul
        {...props}
        style={{
          ...props.className?.includes('contains-task-list') ? {
            listStyleType: "none",
            paddingInlineStart: 16,
          } : {},
          ...props.style,
        }}
      />
    ),
    li: (props) => (
      <Typography display="list-item" component="li" {...props as {}}>
        {props.className?.includes('task-list-item') ? (
          <Box
            display="grid"
            gridTemplateColumns={"auto 1fr"}
            columnGap={1}
            sx={{
              "& > *": {
                justifyContent: "center",
              },
            }}
          >
            <Stack>
              <Checkbox
                readOnly
                checked={!!(props.children as any)[0].props.checked}
                sx={{
                  pointerEvents: "none",
                }}
              />
            </Stack>
            <Stack>
              <Box>
                {(props.children as any).slice(2).filter((x: any) => x?.type?.name !== "ul")}
              </Box>
            </Stack>
            <Stack />
            <Stack>
              <Box>
                {(props.children as any).slice(2).filter((x: any) => x?.type?.name === "ul")}
              </Box>
            </Stack>
          </Box>
        ) : (
          props.children
        )}
      </Typography>
    ),
    hr: (props) => (
      <Divider
        sx={{
          marginY: 2,
        }}
        {...props as {}}
      />
    ),
    blockquote: (props) => (
      <QuoteBlock {...props as {}} />
    ),
    pre: (props) => (
      <CodeBlock mdxPreProps={props} />
    ),
    code: (props) => (
      <InlineCode {...props as {}} />
    ),
    ...components,
  };
}

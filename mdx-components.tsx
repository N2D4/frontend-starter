import { CodeBlock } from '@/components/code-block';
import { Box, Checkbox, Divider, Grid, Link, Stack, Table } from '@mui/joy';
import { Code } from 'bright';
import type { MDXComponents } from 'mdx/types';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including inline styles,
// components from other libraries, and more.
 

// TODO use Next.js Image component
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    h1: (props) => (
      <h1 style={{ color: 'red' }} {...props} />
    ),
    a: (props) => (
      <Link {...props as any} />
    ),
    table: (props) => (
      <Table {...props as any} sx={{
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
      <li {...props}>
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
      </li>
    ),
    hr: (props) => (
      <Divider {...props as any} />
    ),
    pre: (props) => (
      <CodeBlock mdxPreProps={props} />
    ),
    ...components,
  };
}

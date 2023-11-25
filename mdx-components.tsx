import { CodeBlock } from '@/components/code-block';
import { Enumeration, EnumerationItem } from '@/components/enumeration';
import { Image } from '@/components/image';
import { InlineCode } from '@/components/inline-code';
import { Paragraph } from '@/components/paragraph';
import { QuoteBlock } from '@/components/quote-block';
import { SmartLink } from '@/components/smart-link';
import { Box, Checkbox, Divider, Stack, Table, Typography } from '@mui/joy';
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
      <SmartLink {...props as {}} />
    ),
    img: (props) => {
      const { alt, ...imageProps } = props;
      const regexResult = alt?.match(/(.*)\|([0-9]*)x([0-9]*)$/);
      return (
        <Image
          alt={regexResult?.[1] ?? alt ?? ""}
          width={regexResult?.[2] ? parseInt(regexResult[2]) : undefined}
          height={regexResult?.[3] ? parseInt(regexResult[3]) : undefined}
          disableStrictCLS
          {...imageProps as { src: string }}
        />
      );
    },
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
      <Enumeration
        type={props.className?.includes('contains-task-list') ? "checklist" : "bulleted"}
        {...props as {}}
      />
    ),
    li: (props) => {
      const isTaskListItem = !!props.className?.includes('task-list-item');
      return (
        <EnumerationItem
          checked={isTaskListItem && !!(props.children as any)[0].props.checked}
          {...props as {}}
        >
          {isTaskListItem ? (props.children as any).slice(2) : props.children}
        </EnumerationItem>
      );
      },
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
      <Paragraph body>
        <CodeBlock mdxPreProps={props} />
      </Paragraph>
    ),
    code: (props) => (
      <InlineCode {...props as {}} />
    ),
    ...components,
  };
}

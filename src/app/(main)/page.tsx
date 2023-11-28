import { Enumeration, EnumerationItem } from "@/components/enumeration";
import { Paragraph } from "@/components/paragraph";
import { SmartLink } from "@/components/smart-link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Overview",
};

export default function Home() {
  // Note: For demonstration purposes, this is a normal .tsx React
  // component, but it could've been written in MDX instead.
  //
  // See /guides/using-mdx for more details.

  return (
    <>
      <Paragraph h1>
        Overview
      </Paragraph>

      <Paragraph body>
        Welcome to frontend-starter!
      </Paragraph>

      <Paragraph body>
        This is a starter template for a frontend project and at the same time its own documentation. It includes:
      </Paragraph>

      <Paragraph body>
        <Enumeration type="bulleted">
          <EnumerationItem>
            <b>React + Next.js</b> as a base framework
          </EnumerationItem>
          <EnumerationItem>
            <b><SmartLink href="/guides/joy-ui">MUI&apos;s Joy UI</SmartLink></b> as a UI library, built on the same backbones as the Material UI library, but with more customizable styling
          </EnumerationItem>
          <EnumerationItem>
            <b><SmartLink href="/guides/using-mdx">MDX</SmartLink></b> for writing content & text-heavy server components
          </EnumerationItem>
          <EnumerationItem>
            Several custom hooks, components, and utilities for common tasks
          </EnumerationItem>
        </Enumeration>
      </Paragraph>

      <Paragraph body>
        Check out the <SmartLink href="/getting-started">Getting Started</SmartLink> guide for more information.
      </Paragraph>

      <Paragraph body>
        For more information about the project, see the <SmartLink href="https://github.com/N2D4/frontend-starter">GitHub repo</SmartLink>.
      </Paragraph>
    </>
  );
}

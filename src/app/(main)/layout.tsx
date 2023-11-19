import { MDXProvider } from "@mdx-js/react";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <>
      some header or so idk
      <main>
        {props.children}
      </main>
    </>
  );
}

import { Link } from '@mui/joy';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      Main content
      <Link href="/using-mdx">Using MDX</Link>

      todo:
      - layout/header/sidebar
      - blockquotes in mdx
      - darkmode
      - write docs
      - github actions workflows
      - next images in mdx
      - typography h1/h2/... in mdx
      - github pages
      - updated getting started (maybe a scaffolding script)
    </>
  );
}

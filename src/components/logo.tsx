import logo from "../../public/logo.png";
import logoFull from "../../public/logo-full.png";
import { Link } from "@mui/joy";
import { Image } from "./image";

type ImageProps = React.ComponentProps<typeof Image>;

export function Logo(props: (ImageProps | Omit<ImageProps, "src" | "alt">) & { full?: boolean }) {
  const { full, ...imageProps } = props;

  return (
    <Link href="/">
      <Image
        src={full ? logoFull : logo}
        alt="Logo"
        {...imageProps}
      />
    </Link>
  );
}

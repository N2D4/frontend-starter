import Image, { ImageProps } from "next/image";
import logo from "../../public/logo.png";
import logoFull from "../../public/logo-full.png";
import { Link } from "@mui/joy";

export function Logo(props: (ImageProps | Omit<ImageProps, "src" | "alt">) & { full?: boolean }) {
  return (
    <Link href="/">
      <Image
        src={props.full ? logoFull : logo}
        alt="Logo"
        {...props}
      />
    </Link>
  );
}

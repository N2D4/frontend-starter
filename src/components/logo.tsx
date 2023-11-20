import Image, { ImageProps } from "next/image";
import favicon from "../../public/logo.png";

export function Logo(props: ImageProps | Omit<ImageProps, "src" | "alt">) {
  return (
    <Image
      src={favicon}
      alt="Logo"
      {...props}
    />
  );
}

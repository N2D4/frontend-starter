"use client";

import logoLightMode from "../../public/logo.png";
import logoFullLightMode from "../../public/logo-full.png";
import logoDarkMode from "../../public/logo-bright.png";
import logoFullDarkMode from "../../public/logo-full-bright.png";
import { Link, useColorScheme } from "@mui/joy";
import { Image } from "./image";

type ImageProps = React.ComponentProps<typeof Image>;

export function Logo(props: (ImageProps | Omit<ImageProps, "src" | "alt">) & { full?: boolean }) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme.mode === "dark";

  const { full, ...imageProps } = props;

  const logo = isDark ?
    (full ? logoFullDarkMode : logoDarkMode) :
    (full ? logoFullLightMode : logoLightMode);

  return (
    <Link href="/">
      <Image
        src={logo}
        alt="Logo"
        {...imageProps}
      />
    </Link>
  );
}

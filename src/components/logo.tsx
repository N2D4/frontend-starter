import logoLightMode from "../../public/logo.png";
import logoFullLightMode from "../../public/logo-full.png";
import logoDarkMode from "../../public/logo-bright.png";
import logoFullDarkMode from "../../public/logo-full-bright.png";
import { Link } from "@mui/joy";
import { Image } from "./image";

type ImageProps = React.ComponentProps<typeof Image>;

export function Logo(props: (ImageProps | Omit<ImageProps, "src" | "alt">) & { full?: boolean }) {
  const { full, ...imageProps } = props;

  // first item is the selector which HIDES the logo, second is the logo source
  const modes = [
    ['html[data-joy-color-scheme="light"] &', full ? logoFullDarkMode : logoDarkMode],
    ['html:not([data-joy-color-scheme="light"]) &', full ? logoFullLightMode : logoLightMode],
  ] as const;

  return (
    <>
      {modes.map((mode, i) => (
        <Link
          href="/"
          key={i}
          sx={{
            [mode[0]]: {
              display: 'none',
            },
          }}
        >
          <Image
            src={mode[1]}
            alt="Logo"
            priority
            {...imageProps}
            placeholder="empty"
          />
        </Link>
      ))}
    </>
  );
}

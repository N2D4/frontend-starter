"use client";

import { Box, Link, LinkProps } from "@mui/joy";
import { Icon } from "./icon";
import { useEffect, useState } from "react";

export function SmartLink(props: LinkProps) {
  const [isExternal, setIsExternal] = useState(!!props.href?.match(/^[a-z]+:/));

  useEffect(() => {
    const hrefUrl = new URL(props.href ?? "", window.location.href);
    const isExternal = hrefUrl.origin !== window.location.origin;
    setIsExternal(isExternal);
  }, [props.href]);

  return (
    <Link
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      endDecorator={isExternal ? (
        <Icon
          icon="open_in_new"
          size="0.8em"
        />
      ) : undefined}
      {...props}
      sx={{
        "&:hover": {
          textDecoration: 'none',
          "& > .n2-smart-link-child": {
            textDecoration: 'underline',
          },
        },
        ...props.sx ?? {},
      }}
    >
      <Box component="span" display="inline-flex" className="n2-smart-link-child">
        {props.children}
      </Box>
    </Link>
  );
}

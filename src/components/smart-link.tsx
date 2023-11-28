"use client";

import { Box, Link, LinkProps } from "@mui/joy";
import { Icon } from "./icon";
import { useEffect, useState } from "react";

export function SmartLink(props: LinkProps & { hideExternalIndicator?: boolean }) {
  const [isExternal, setIsExternal] = useState(!!props.href?.match(/^[a-z]+:/));

  const { hideExternalIndicator, ...linkProps } = props;

  useEffect(() => {
    const hrefUrl = new URL(props.href ?? "", window.location.href);
    const isExternal = hrefUrl.origin !== window.location.origin;
    setIsExternal(isExternal);
  }, [props.href]);

  return (
    <Link
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      endDecorator={!hideExternalIndicator && isExternal ? (
        <Icon
          icon="open_in_new"
          size="0.8em"
        />
      ) : undefined}
      display="inline"
      {...linkProps}
      sx={{
        "&:hover": {
          textDecoration: 'none',
          "& > .n2-smart-link-child": {
            textDecoration: 'underline',
          },
        },
        ...linkProps.sx ?? {},
      }}
    >
      <Box component="span" display="inline" className="n2-smart-link-child">
        {props.children}
      </Box>
    </Link>
  );
}

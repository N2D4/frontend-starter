"use client";

import { Icon } from "@/components/icon";
import { Logo } from "@/components/logo";
import { Sheet, Stack, IconButton, Box, SheetProps, useColorScheme, colors, Input, Button } from "@mui/joy";
import { SiteSearch } from "./site-search";
import { SmartLink } from "@/components/smart-link";
import Image from "next/image";
import GitHubInvertocatWhite from "../../../public/github-invertocat-white.svg";
import GitHubInvertocat from "../../../public/github-invertocat.svg";
import { SmartImage } from "@/components/smart-image";

export function Header(props: SheetProps & {
  isCompactMediaQuery: string,
  onShowSidebar: () => void,
}) {
  const colorScheme = useColorScheme();

  const { isCompactMediaQuery, onShowSidebar, ...sheetProps } = props;
  return (
    <Sheet
      variant="outlined"
      component="header"
      {...sheetProps}
      sx={{
        paddingX: 2,
        position: 'sticky',
        top: 0,
        zIndex: 30,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
        display: 'flex',
        alignItems: 'stretch',
        ...sheetProps.sx ?? {},
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        flexGrow={1}
        gap={2}
      >
        <IconButton
          size="sm"
          variant="outlined"
          onClick={onShowSidebar}
          sx={{
            display: 'none',
            [isCompactMediaQuery]: {
              display: 'flex',
            },
          }}
        >
          <Icon icon="menu" />
        </IconButton>
        <Logo height={36} />
        <Box flexGrow={1} />
        <SmartLink href="https://github.com/N2D4/frontend-starter" hideExternalIndicator>
          <Box
            width={32}
            height={32}
            position="relative"
            sx={{
              'html[data-joy-color-scheme="light"] &': {
                display: 'none',
              }
            }}
          >
            <SmartImage
              src={GitHubInvertocatWhite}
              alt="GitHub repository"
              fill
            />
          </Box>
          <Box
            width={32}
            height={32}
            position="relative"
            sx={{
              'html:not([data-joy-color-scheme="light"]) &': {
                display: 'none',
              }
            }}
          >
            <SmartImage
              src={GitHubInvertocat}
              alt="GitHub repository"
              fill
            />
          </Box>
        </SmartLink>
        <SiteSearch
          size="sm"
          sx={{
            display: {
              xs: 'none',
              sm: 'flex',
            },
            minWidth: '100px',
            width: '150px',
            flexShrink: 1,
            transition: 'width 0.1s ease',
            '&:focus-within, &:active': {
              width: '250px',
            },
          }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          onClick={() => colorScheme.setMode(colorScheme.mode === 'light' ? 'dark' : 'light')}
        >
          <Icon icon="contrast" />
        </IconButton>
      </Stack>
    </Sheet>
  );
}

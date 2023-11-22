"use client";

import { typedIncludes } from "@/utils/arrays";
import React, { use } from "react";
import { Paragraph } from "./paragraph";
import { Box, Checkbox, Stack, Typography } from "@mui/joy";

const enumerationContext = React.createContext<{ type: EnumerationProps["type"] } | null>(null);

const olProps = ["numbered"] as const;
const ulProps = ["bulleted", "checklist"] as const;


type EnumerationProps = 
  | (React.ComponentProps<"ol"> & {
    type: typeof olProps[number];
  })
  | (React.ComponentProps<"ul"> & {
    type: typeof ulProps[number];
  })

export function Enumeration(props: EnumerationProps) {
  const { type, ...listProps } = props;
  const Component = typedIncludes(olProps, type) ? "ol" : "ul";

  return (
    <enumerationContext.Provider value={{ type }}>
      <Component {...listProps as {}} />
    </enumerationContext.Provider>
  );
}

type EnumerationItemProps = React.ComponentProps<"li"> & (
  | {
    type?: never,
    checked?: boolean,
  }
  | {
    type: "numbered" | "bulleted",
  }
  | {
    type: "checklist",
    checked: boolean,
  }
);

export function EnumerationItem(props: EnumerationItemProps) {
  const enumeration = use(enumerationContext);

  let { type, children, ...listItemProps } = props;
  type ??= enumeration?.type;

  // some lists have sublists, and when rendering checkboxes we want to
  // render the sublists that are at the end of this enumeration differently
  let normalChildren = children;
  let trailingSubLists: React.ReactNode[] = [];
  console.log(normalChildren);
  if (Array.isArray(normalChildren)) {
    let i;
    for (i = normalChildren.length - 1; i >= 0; i--) {
      if (!["ul", "ol", "Enumeration"].includes(normalChildren[i]?.type?.name)) break;
      trailingSubLists.unshift(normalChildren[i]);
    }
    normalChildren = normalChildren.slice(0, i + 1);
  }


  return (
    <Typography
      display="list-item"
      component="li"
      {...listItemProps as {}}
      sx={{
        listStyleType: !type ? undefined : {
          bulleted: "disc",
          numbered: "decimal",
          checklist: "none",
        }[type],
      }}
    >
      {type !== "checklist" ? children : (
        <Stack
          direction="row"
          marginY="4px"
        >
          <Stack
            height="1lh"
            width="56px"
            marginLeft="-56px"
            justifyContent="center"
            alignItems="center"
          >
            <Checkbox
              readOnly
              checked={!!(props as any).checked}
              sx={{
                paddingInlineStart: "16px",
                pointerEvents: "none",
              }}
            />
          </Stack>
          <Box>
            {normalChildren}
          </Box>
        </Stack>
      )}
    </Typography>
  );
}

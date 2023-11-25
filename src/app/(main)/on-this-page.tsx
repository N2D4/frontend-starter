"use client";

import { Overview } from "@/components/page-overview";
import { SmartLink } from "@/components/smart-link";
import { useAnimationFrame } from "@/hooks/use-animation-frame";
import { List, ListItem, ListItemButton, ListSubheader, Sheet, Stack, StackProps } from "@mui/joy";
import { useMemo, useState } from "react";

export function OnThisPage(props: StackProps & { overview: Overview, screenOffset: number }) {
  const { screenOffset, overview, ...boxProps } = props;
  const [scrollChangesCount, setScrollChangesCount] = useState(0);

  const recursiveSectionsOverview = useMemo(() => {
    const res: Overview["sections"][number][] = [];
    const addSection = (section: Overview["sections"][number]) => {
      res.push(section);
      for (const subSection of section.subSections) {
        addSection(subSection);
      }
    };
    for (const section of overview.sections) {
      addSection(section);
    }
    return res;
  }, [overview]);

  // TODO use an intersection observer or something for performance, so we don't re-render every single frame
  useAnimationFrame(() => {
    setScrollChangesCount((count) => count + 1);
  });


  const selectedSection = useMemo(() => {
    scrollChangesCount; // make sure we use this in the dependency array
    const selectedSectionIndex = recursiveSectionsOverview.findLastIndex((section) => {
      const sectionBoundingRect = section.element.getBoundingClientRect();
      return sectionBoundingRect.top < screenOffset;
    });
    const selectedSection = recursiveSectionsOverview[selectedSectionIndex] ?? null;
    return selectedSection;
  }, [scrollChangesCount, recursiveSectionsOverview, screenOffset]);

  return (
    <Stack {...boxProps}>
      <Sheet
        variant="outlined"
        sx={{
          overflowY: 'auto',
          borderRadius: 'sm',
          minHeight: 0,
          flexShrink: 1,
        }}
      >
        <List size="sm">
          <ListSubheader sticky>
          On this page
          </ListSubheader>
          {overview.sections.map((section, i) => (
            <Section
              key={section.id}
              section={section}
              selectedSection={selectedSection}
            />
          ))}
        </List>
      </Sheet>
    </Stack>
  );
}

function Section(props: { section: Overview["sections"][number], paddingLeft?: number, selectedSection: Overview["sections"][number] | null }) {
  const paddingLeft = props.paddingLeft ?? 0;
  return (
    <ListItem nested>
      <ListItem>
        <ListItemButton
          component={SmartLink}
          href={`#${props.section.id}`}
          selected={props.section === props.selectedSection}
          sx={{
            paddingLeft: 1 + paddingLeft,
          }}
        >
          {[...props.section.element.querySelectorAll(":not(.n2-icon)")].flatMap(node => [...node.childNodes]).filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join("")}
        </ListItemButton>
      </ListItem>
      <List>
        {props.section.subSections.map((subSection) => (
          <Section
            key={subSection.id}
            section={subSection}
            paddingLeft={paddingLeft + 1}
            selectedSection={props.selectedSection}
          />
        ))}
      </List>
    </ListItem>
  );
}

"use client";

import { Overview } from "@/components/page-overview";
import { SmartLink } from "@/components/smart-link";
import { useAnimationFrame } from "@/hooks/use-animation-frame";
import { List, ListItem, ListItemButton, ListSubheader, Sheet, Stack, StackProps } from "@mui/joy";
import { useEffect, useMemo, useRef, useState } from "react";

export function OnThisPage(props: StackProps & { overview: Overview, screenOffset: number }) {
  const { screenOffset, overview, ...boxProps } = props;
  const [forcedUpdatesCount, setForcedUpdatesCount] = useState(0);
  const [lastClickedSection, setLastClickedSection] = useState<Overview["sections"][number] | null>(null);
  const scrollUpdatesLockCountRef = useRef(0);

  useEffect(() => {
    const callback = () => {
      if (scrollUpdatesLockCountRef.current > 0) return;
      setForcedUpdatesCount((count) => count + 1);
      setLastClickedSection(null);
    };
    window.addEventListener('scroll', callback, true);
    return () => window.removeEventListener('scroll', callback, true);
  }, []);

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

  

  const selectedSection = useMemo(() => {
    if (lastClickedSection) return lastClickedSection;

    forcedUpdatesCount; // make sure we use this in the dependency array
    const selectedSectionIndex = recursiveSectionsOverview.findLastIndex((section) => {
      const sectionBoundingRect = section.element.getBoundingClientRect();
      return sectionBoundingRect.top <= screenOffset;
    });
    const selectedSection = recursiveSectionsOverview[selectedSectionIndex] ?? null;
    return selectedSection;
  }, [lastClickedSection, forcedUpdatesCount, recursiveSectionsOverview, screenOffset]);

  const onClick = (section: Overview["sections"][number]) => {
    // force section to be selected, and don't allow any scroll updates for 200ms
    // ensures that the section is always highlighted when a user clicks on it, even if the "top-most" visible section is a different one
    scrollUpdatesLockCountRef.current++;
    setTimeout(() => scrollUpdatesLockCountRef.current--, 200);
    setLastClickedSection(section);
  };

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
              onClick={onClick}
            />
          ))}
        </List>
      </Sheet>
    </Stack>
  );
}

function Section(props: {
  section: Overview["sections"][number],
  paddingLeft?: number,
  selectedSection: Overview["sections"][number] | null,
  onClick: (section: Overview["sections"][number]) => void,
}) {
  const paddingLeft = props.paddingLeft ?? 0;
  return (
    <ListItem nested>
      <ListItem>
        <ListItemButton
          component={SmartLink}
          href={`#${props.section.id}`}
          onClick={() => props.onClick(props.section)}
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
            onClick={props.onClick}
          />
        ))}
      </List>
    </ListItem>
  );
}

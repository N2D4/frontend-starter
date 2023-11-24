import { Overview } from "@/components/page-overview";
import { SmartLink } from "@/components/smart-link";
import { Box, BoxProps, Card, List, ListItem, ListItemButton, ListSubheader, Sheet, Stack, StackProps } from "@mui/joy";

export function OnThisPage(props: StackProps & { overview: Overview }) {
  const { overview, ...boxProps } = props;

  return (
    <Stack position="sticky" {...boxProps}>
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
          {overview.map((section) => (
            <Section key={section.id} section={section} />
          ))}
        </List>
      </Sheet>
    </Stack>
  );
}

function Section(props: { section: Overview[number], paddingLeft?: number }) {
  const paddingLeft = props.paddingLeft ?? 0;
  return (
    <ListItem nested>
      <ListItem>
        <ListItemButton
          component={SmartLink}
          href={`#${props.section.id}`}
          sx={{
            paddingLeft: 1 + paddingLeft,
          }}
        >
          {[...props.section.element.querySelectorAll(":not(.n2-icon)")].flatMap(node => [...node.childNodes]).filter((node) => node.nodeType === Node.TEXT_NODE).map((node) => node.textContent).join("")}
        </ListItemButton>
      </ListItem>
      <List>
        {props.section.subSections.map((subSection) => (
          <Section key={subSection.id} section={subSection} paddingLeft={paddingLeft + 1} />
        ))}
      </List>
    </ListItem>
  );
}

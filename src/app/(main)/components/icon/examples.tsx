import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { IconPlayground } from "./icon-playground";

export function IconPlaygroundExample() {
  return (
    <ExampleCard code={iconPlaygroundCode} language="tsx">
      <IconPlayground />
    </ExampleCard>
  );
}

const iconPlaygroundCode = deindent`
  function IconPlayground() {
    const [icon, setIcon] = useState("move_selection_down");

    return (
      <Stack alignItems="center" gap={2}>
        <Autocomplete
          options={[...Icon.allIcons]}
          value={icon}
          onChange={(_, v) => setIcon(v ?? "")}
        />
        <Icon icon={icon as any} />
      </Stack>
    );
  }
`;

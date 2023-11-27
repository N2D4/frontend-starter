import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { PageLoadingCheckbox } from "./page-loading-checkbox";

export function PageLoadingCheckboxExample() {
  return (
    <ExampleCard
      code={pageLoadingCheckboxCode}
      language="tsx"
      sx={{
        "& > .MuiCardContent-root": {
          zIndex: "unset",
        },
      }}
    >
      <PageLoadingCheckbox />
    </ExampleCard>
  );
}

const pageLoadingCheckboxCode = deindent`
  function PageLoadingCheckbox() {
    const [isLoading, setIsLoading] = useState(false);

    return (
      <>
        <Checkbox
          label="Show loading indicator"
          checked={isLoading}
          onChange={(e) => setIsLoading(e.target.checked)}
        />
        {isLoading && <PageLoadingIndicator />}
      </>
    );
  }
`;

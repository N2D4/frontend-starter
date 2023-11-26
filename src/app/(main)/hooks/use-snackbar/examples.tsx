import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";
import { SuccessOrError } from "./success-or-error";
import { ComplexCustomizedSnackbar } from "./complex-customized-snackbar";

export function SuccessOrErrorExample() {
  return (
    <ExampleCard code={successOrErrorCode} language="tsx">
      <SuccessOrError />
    </ExampleCard>
  );
}


const successOrErrorCode = deindent`
  function SuccessOrError() {
    const snackbar = useSnackbar();

    return (
      <Stack gap={2}>
        <Button
          color="success"
          onClick={() => snackbar.showSuccess("You clicked the Success button!")}
        >
          Open Success
        </Button>
        <Button
          color="danger"
          onClick={() => snackbar.showError("You clicked the Error button!")}
        >
          Open Error
        </Button>
      </Stack>
    );
  }
`;



export function ComplexCustomizedSnackbarExample() {
  return (
    <ExampleCard code={complexCustomizedSnackbarCode} language="tsx">
      <ComplexCustomizedSnackbar />
    </ExampleCard>
  );
}

const complexCustomizedSnackbarCode = deindent`
  function ComplexCustomizedSnackbar() {
    const snackbar = useSnackbar();

    return (
      <Button
        onClick={() => snackbar.show({
          children: "You clicked the button!",
          color: 'primary',
          size: 'lg',
          anchorOrigin: {
            vertical: 'top',
            horizontal: 'center',
          },
          endDecorator: (
            <Button
              onClick={() => snackbar.showError("You clicked the new button!")}
            >
              Click me too!
            </Button>
          ),
        })}
      >
        Click me!
      </Button>
    );
  }
`;

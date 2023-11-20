"use client";

import { Icon } from "./icon";
import { AsyncIconButton } from "./async-icon-button";
import { wait } from "@/utils/promises";
import { useSnackbar } from "@/hooks/use-snackbar";

type PropsWithoutBase = {
  content: string,
  onClick?: never,
};
type Props = PropsWithoutBase & Omit<React.ComponentProps<typeof AsyncIconButton>, keyof PropsWithoutBase>;

export function CopyButton(props: Props) {
  const snackbar = useSnackbar();

  return (
    <AsyncIconButton
      {...props}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(props.content);
          snackbar.showSuccess('Copied to clipboard!');
        } catch (e) {
          snackbar.showError('Failed to copy to clipboard!');
        }
      }}
    >
      <Icon icon="content_copy" />
    </AsyncIconButton>
  );
}

import { Icon } from "@/components/icon";
import { Button, Input, InputProps } from "@mui/joy";
import { useCallback, useState } from "react";

export function SiteSearch(props: InputProps) {
  const [searchText, setSearchText] = useState('');

  const { ...inputProps } = props;

  const openSearch = useCallback(() => {
    window.open(`https://www.google.com/search?q=${encodeURIComponent(`${searchText} site:${window.location.hostname}`)}`, '_blank');
  }, [searchText]);

  return (
    <Input
      value={searchText}
      onChange={e => setSearchText(e.target.value)}
      placeholder="Search"
      size="sm"
      startDecorator={<Icon icon="search" sx={{
        color: theme => theme.palette.primary[500],
      }} />}
      endDecorator={
        <Button size="sm" color="primary" variant="solid" onClick={() => openSearch()}>
          Go
        </Button>
      }
      {...inputProps}
      sx={{
        '&:not(:focus-within) button:not(:active)': {
          display: 'none',
        },
        ...inputProps.sx ?? {},
      }}
      onKeyDown={e => {
        if (e.key === 'Enter') {
          openSearch();
        }
      }}
    />
  );
}

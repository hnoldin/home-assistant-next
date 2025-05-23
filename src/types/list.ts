export enum ListItemType {
  Entity = "entity",
  Link = "link",
  Source = "source",
}

export interface ListItem {
  key: string;
  type: ListItemType;
  name: string;
  url?: string;
  value?: string;
  icon: JSX.Element;
  iconColor?: string;
  selected?: boolean;
  onClick?: () => void;
}

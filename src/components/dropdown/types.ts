// Так было сделано для масштабирования элемента списка (например, добавить: index, value, disabled, group)
export type Option = string;

export type DropDownProps = {
  isOpen: boolean;
  options: Option[];
  className?: string;
  onSelect: (val: Option) => void;
  closeDropDown: () => void;
};

export type ListItemProps = {
  value: Option;
  onSelect: (val: Option) => void;
  closeDropDown: () => void;
};

import { Option } from '../dropdown/types';

export type ComboBoxProps = {
  className?: string;
  value?: string;
  placeholder?: string;
  options?: Option[];
  onSelect: (val: string) => void;
  label?: string;
  disabled?: boolean;
};

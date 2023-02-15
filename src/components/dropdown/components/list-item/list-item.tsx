import { FC, useCallback } from 'react';

import { ListItemProps } from '../../types';

import styles from './styles.module.scss';

export const ListItem: FC<ListItemProps> = ({
  value,
  onSelect,
  closeDropDown
}) => {
  const onClick = useCallback(
    () => onSelect(value),
    [value, onSelect, closeDropDown]
  );

  const onKeyUp: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.code === 'Enter') {
        e.preventDefault();
        e.stopPropagation();
        onSelect(value);
        closeDropDown();
      }
    },
    [closeDropDown]
  );

  return (
    <div
      onClick={onClick}
      className={styles.ListItem}
      onKeyUp={onKeyUp}
      tabIndex={0}
    >
      {value}
    </div>
  );
};

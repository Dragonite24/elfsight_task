import { FC, useCallback } from 'react';
import clsx from 'clsx';

import { ListItem } from './components/list-item';

import { DropDownProps, Option } from './types';

import styles from './styles.module.scss';

export const Dropdown: FC<DropDownProps> = ({
  isOpen,
  options,
  onSelect,
  closeDropDown,
  className
}) => {
  const onKeyUp: React.KeyboardEventHandler<HTMLDivElement> = useCallback(
    (e) => {
      if (e.code === 'Escape') {
        e.preventDefault();
        e.stopPropagation();
        closeDropDown();
      }
    },
    [closeDropDown]
  );

  const onListSelect = useCallback((option: Option) => {
    onSelect(option);
  }, []);

  return isOpen ? (
    <div
      className={clsx([styles.DropDown_wrapper, className])}
      onKeyUp={onKeyUp}
    >
      <div className={styles.DropDown_content}>
        {options.length ? (
          options.map((item) => (
            <ListItem
              key={item}
              value={item}
              onSelect={onListSelect}
              closeDropDown={closeDropDown}
            />
          ))
        ) : (
          <p className={styles['DropDown_no-data']}>Данных не найдено</p>
        )}
      </div>
    </div>
  ) : null;
};

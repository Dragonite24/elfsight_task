import { FC, useCallback, useMemo, useRef, useState } from 'react';
import clsx from 'clsx';

import { ComboBoxProps } from './types';
import { InputWrapper } from '../input-wrapper';
import { Dropdown } from '../dropdown/dropdown';
import { Option } from '../dropdown/types';

import styles from './styles.module.scss';

export const ComboBox: FC<ComboBoxProps> = ({
  label,
  value = '',
  placeholder = '',
  options,
  disabled = false,
  onSelect,
  className
}) => {
  const ref = useRef<HTMLInputElement | null>(null);
  const [isDropDownOpened, setIsDropDownOpened] = useState(false);

  const openDropDown = useCallback(() => {
    setIsDropDownOpened(true);
  }, []);

  const closeDropDown = useCallback(() => {
    setIsDropDownOpened(false);
  }, []);

  const onBlur = useCallback((e: React.FocusEvent<HTMLFieldSetElement>) => {
    const target = e.relatedTarget;
    const container = e.currentTarget;

    if (!container.contains(target)) {
      setIsDropDownOpened(false);
    }
  }, []);

  const onDropDownSelect = useCallback(
    (val: Option) => {
      onSelect(val);
      setIsDropDownOpened(false);
    },
    [onSelect]
  );

  const optionsWithSearch = useMemo(() => {
    return options
      ? options.reduce((optionsAcc, option) => {
          const labelLowercase = option.toLocaleLowerCase();
          const searchLowercase = value.toLowerCase();
          if (labelLowercase.indexOf(searchLowercase) !== -1) {
            optionsAcc.push(option);
          }
          return optionsAcc;
        }, [] as Option[])
      : null;
  }, [value, options]);

  return (
    <InputWrapper
      label={label}
      disabled={disabled}
      isOpened={isDropDownOpened}
      className={clsx(styles.ComboBox, className)}
      onBlur={onBlur}
    >
      <div className={styles.ComboBox_content}>
        <div className={styles['ComboBox_input-wrapper']}>
          <input
            ref={ref}
            autoComplete="off"
            value={value}
            disabled={disabled}
            placeholder={value.length ? '' : placeholder}
            onChange={(e) => {
              onSelect(e.target.value);
            }}
            onFocus={openDropDown}
            onKeyDown={(e) => {
              if (e.key === 'Escape' || e.key === 'Enter') {
                setIsDropDownOpened(false);
                e.currentTarget.blur();
              }
            }}
            className={styles.ComboBox_input}
          />
        </div>
      </div>
      {!disabled && optionsWithSearch ? (
        <Dropdown
          isOpen={isDropDownOpened}
          options={optionsWithSearch}
          onSelect={onDropDownSelect}
          closeDropDown={closeDropDown}
        />
      ) : null}
    </InputWrapper>
  );
};

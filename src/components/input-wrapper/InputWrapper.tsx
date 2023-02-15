import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import clsx from 'clsx';

import styles from './styles.module.scss';

interface Props extends PropsWithChildren, HTMLAttributes<HTMLFieldSetElement> {
  label?: string;
  error?: string;
  disabled?: boolean;
  className?: string;
  isOpened?: boolean;
}

export const InputWrapper: FC<Props> = ({
  label,
  isOpened,
  disabled,
  className,
  children,
  ...rest
}) => {
  return (
    <fieldset
      className={clsx(
        styles.InputWrapper,
        {
          [styles['InputWrapper--disabled']]: disabled,
          [styles['InputWrapper--opened']]: isOpened,
          [styles['InputWrapper--hover']]: !disabled
        },
        className
      )}
      tabIndex={0}
      {...rest}
    >
      {!!label ? (
        <>
          <legend className={clsx(styles.InputWrapper_label)}>{label}</legend>
          <p className={styles['InputWrapper_label-text']}>{label}</p>
        </>
      ) : null}
      {children}
    </fieldset>
  );
};

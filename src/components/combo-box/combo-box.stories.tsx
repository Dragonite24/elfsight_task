import { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ComboBox } from './combo-box';

const MOCK_OPTIONS = ['Кошка', 'Собака', 'Мышь', 'Попугай', 'Змея', 'Капибара'];

export default {
  title: 'ComboBox',
  component: ComboBox,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `UI Combobox`
      }
    }
  },
  argTypes: {
    label: {
      defaultValue: 'label',
      control: { type: 'text' }
    },
    disabled: {
      defaultValue: false,
      control: { type: 'boolean' }
    },
    placeholder: {
      defaultValue: 'placeholder',
      control: { type: 'text' }
    },
    options: {
      defaultValue: MOCK_OPTIONS
    }
  }
} as ComponentMeta<typeof ComboBox>;

export const Example: ComponentStory<typeof ComboBox> = ({
  value,
  label,
  disabled,
  options,
  placeholder
}) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  return (
    <ComboBox
      onSelect={setSelectedValue}
      value={selectedValue}
      options={options}
      placeholder={placeholder}
      label={label}
      disabled={disabled}
    />
  );
};

import { FC, useState } from 'react';

import { ComboBox } from '../../components';
import { Option } from '../../components/dropdown/types';

import styles from './styles.module.scss';

const MOCK_OPTIONS: Option[] = [
  'Кошка',
  'Собака',
  'Мышь',
  'Попугай',
  'Змея',
  'Капибара'
];

export const App: FC = () => {
  const [selectedValue, setSelectedValue] = useState('');

  return (
    <div className={styles.App}>
      <ComboBox
        className={styles.App_comboBox}
        value={selectedValue}
        label="Cool Combobox!"
        placeholder="Начните вводить текст"
        onSelect={setSelectedValue}
        options={MOCK_OPTIONS}
      />
    </div>
  );
};

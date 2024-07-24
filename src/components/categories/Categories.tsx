import { FC } from 'react';
import styles from './Categories.module.css';
import { ICategories } from '@/interfaces/categories';
import { v4 as uuidv4 } from 'uuid';
import { Category } from './Category';

export const Categories: FC<{ items: ICategories }> = ({ items }) => {
  return (
    <div className={styles.categories}>
      {items.map((item) => (
        <Category key={uuidv4()} item={item} />
      ))}
    </div>
  );
};

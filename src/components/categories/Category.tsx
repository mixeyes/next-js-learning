import Link from 'next/link';
import style from './Categories.module.css';
import { FC } from 'react';
import { ICategory } from '@/interfaces/categories';

export const Category: FC<{ item: ICategory }> = ({ item }) => (
  <div className={style.category}>
    <Link href={`/categories/${item.categoryName}`}>{item.name}</Link>
  </div>
);

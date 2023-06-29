 import Link from 'next/link';
import style from './Categories.module.css';
import { FC } from 'react';
import { ICategory } from '@/interfaces/categories';
import Image from 'next/image';

export const Category: FC<{ item: ICategory }> = ({ item }) => (
  <div className={style.category}>
    <Link href={`/categories/${item.path}`}>
      <Image
        style={{ width: '25em', height: '15em', margin: 10 }}
        src={item.imgUrl}
        alt="App Logo"
        priority
        width={15}
        height={25}
      />
      {item.name}
    </Link>
  </div>
);

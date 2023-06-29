import styles from './page.module.css';
import { Categories } from '@/components';
import { get } from '@/utils';
import { FC, ReactElement } from 'react';
import { ICategories } from '@/interfaces/categories';

const Home = async () => {
  const data: ICategories = await get('/api/categories');
  return (
    <main className={styles.main}>
      <Categories items={data} />
    </main>
  );
};

export default Home;

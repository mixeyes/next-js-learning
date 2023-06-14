import styles from './page.module.css';
import { Categories } from '@/components';
import { get } from '@/utils';
import { FC } from 'react';
import { ICategories } from '@/interfaces/categories';

{
  /* @ts-expect-error Async Server Component */
}
const Home: FC = async () => {
  const data: ICategories = await get('/api/categories');
  return (
    <main className={styles.main}>
      <Categories items={data} />
    </main>
  );
};

export default Home;

'use client';
import { usePathname } from 'next/navigation';
import { FC } from 'react';
import styles from './Breadcrumbs.module.css';

export const Breadcrumbs: FC<{ rootLabel: string }> = ({ rootLabel }) => {
  const pathname = usePathname();

  return (
    <div className={styles.wrapper}>
      {rootLabel}
      <span>/Breadcrumbs</span>
    </div>
  );
};

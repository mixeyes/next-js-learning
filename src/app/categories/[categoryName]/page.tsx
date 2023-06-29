import { ICategory } from '@/interfaces/categories';
import { get } from '@/utils';
import React from 'react';
import Image from 'next/image';

interface ICategoryPage {
  params: {
    categoryName: string;
  };
}

const CategoryPage = async ({ params: { categoryName } }: ICategoryPage) => {
  const data: ICategory = await get(`/api/category/${categoryName}`);
  console.table(data);

  return await (
    <div>
      <Image
        style={{ width: '25em', height: '15em', margin: 10 }}
        src={data.imgUrl}
        alt={data.name}
        priority
        width={15}
        height={25}
      />
      <span>{data.name}</span>
    </div>
  );
};

export default CategoryPage;

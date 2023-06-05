import { ICategories, ICategory } from '@/interfaces/categories';
import { get } from '@/utils';
import React, {FC} from 'react';

interface ICategoryPage {
  params: {
    categoryName: string;
  };
};

const CategoryPage: FC<ICategoryPage> = ({ params: { categoryName } }) => {
  // const router = useRouter();
  console.log(categoryName);

  return (
    <div>
      <span>Category {categoryName}</span>
    </div>
  );
};

export async function generateStaticParams() {
  const data: ICategories = await get('/api/categories');

  return data.map((category: ICategory) => ({
    categoryName: category.categoryName,
  }));
}

export default CategoryPage

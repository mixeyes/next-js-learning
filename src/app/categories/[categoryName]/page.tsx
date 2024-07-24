import React, { FC } from 'react';

interface ICategoryPage {
  params: {
    categoryName: string;
  };
}

const CategoryPage: FC<ICategoryPage> = ({ params: { categoryName } }) => {
  // const router = useRouter();
  console.log(categoryName);

  return (
    <div>
      <span>Category {categoryName}</span>
    </div>
  );
};

export default CategoryPage;

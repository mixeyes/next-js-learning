import { Categories } from '@/services/db/models/categories';
import { NextResponse } from 'next/server';

interface IParams {
  params: {
    categoryName: string;
  };
}

export async function GET(req: Request, { params }: IParams) {
  const { categoryName } = params;
  const getCat = Categories.getInstance();
  const categories = await getCat.getCategorByName(categoryName);
  return NextResponse.json(categories);
}

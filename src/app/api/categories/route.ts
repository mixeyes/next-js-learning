import { Categories } from '@/services/db/models/categories';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const getCat = Categories.getInstance();
  const categories = await getCat.getAllCategories();
  return NextResponse.json(categories);
}

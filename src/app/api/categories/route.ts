import { ICategories } from '@/interfaces/categories';
import { NextResponse } from 'next/server';

const categories: ICategories = [
  { categoryName: 'photo', name: 'Camera & Photo' },
  { categoryName: 'phones', name: 'Phones & Accessories' },
  { categoryName: 'tv', name: 'TV & Home Theatre' },
  { categoryName: 'audio', name: 'Audio & HiFi' },
  { categoryName: 'musical-instruments', name: 'Musical Instruments & DJ Equipment' },
  { categoryName: 'car-hifi', name: 'Navigation & Car HiFi' },
  { categoryName: 'electronics-sccessories', name: 'Electronics Accessories' },
  { categoryName: 'game-sccessories', name: 'Consoles & Game Accessories' },
  { categoryName: 'household-appliances', name: 'Household Appliances & Vacuums' },
  { categoryName: 'large-appliances', name: 'Large Appliances' },
  { categoryName: 'all-products', name: 'All Products' },
  { categoryName: 'pc-laptops', name: 'PCs & Laptops' },
  { categoryName: 'tablets', name: 'Tablets' },
  { categoryName: 'computer-accessories', name: 'Computer Accessories' },
  { categoryName: 'computer-components', name: 'Computer Components' },
  { categoryName: 'software', name: 'Software' },
  { categoryName: 'video-games', name: 'PC & Video Games' },
  { categoryName: 'printers', name: 'Printers & Ink' },
  { categoryName: 'office-supplies', name: 'Stationery & Office Supplies' },
];

export function GET(req: Request) {
  console.log(req.json());
  return NextResponse.json(categories);
}

import { ICategories } from '@/interfaces/categories';
import { NextResponse } from 'next/server';

const categories: ICategories = [
  { name: 'Camera & Photo', categoryName: 'photo' },
  { name: 'Phones & Accessories', categoryName: 'phones' },
  { name: 'TV & Home Theatre', categoryName: 'tv' },
  { name: 'Audio & HiFi', categoryName: 'audio' },
  {
    name: 'Musical Instruments & DJ Equipment',
    categoryName: 'musical-instruments',
  },
  { name: 'Navigation & Car HiFi', categoryName: 'car-hifi' },
  { name: 'Electronics Accessories', categoryName: 'electronics-sccessories' },
  { name: 'Consoles & Game Accessories', categoryName: 'game-sccessories' },
  {
    name: 'Household Appliances & Vacuums',
    categoryName: 'household-appliances',
  },
  { name: 'Large Appliances', categoryName: 'large-appliances' },
  { name: 'All Products', categoryName: 'all-products' },
  { name: 'PCs & Laptops', categoryName: 'pc-laptops' },
  { name: 'Tablets', categoryName: 'tablets' },
  { name: 'Computer Accessories', categoryName: 'computer-accessories' },
  { name: 'Computer Components', categoryName: 'computer-components' },
  { name: 'Software', categoryName: 'software' },
  { name: 'PC & Video Games', categoryName: 'video-games' },
  { name: 'Printers & Ink', categoryName: 'printers' },
  { name: 'Stationery & Office Supplies', categoryName: 'office-supplies' },
];

export function GET(req: Request) {
  return NextResponse.json(categories);
}

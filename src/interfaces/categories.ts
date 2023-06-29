export interface ICategory {
  id: string;
  name: string;
  path: string;
  imgUrl: string;
  img_url: string;
}

export type ICategories = Array<ICategory>;

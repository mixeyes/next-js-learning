import { execute } from '../dbConnector';

export const createCategoriesTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS "categories" (
	    "id" SERIAL,
	    "title" VARCHAR(100) NOT NULL,
	    "category_name" VARCHAR(100) NOT NULL,
      "img_url" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

  execute(query).then((result: any) => {
    if (result) {
      console.log('Table categories created');
    }
  });
};

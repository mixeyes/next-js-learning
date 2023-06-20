import { DBConnector } from '../dbConnector';

export const createCategoriesTable = async () => {
  const connector = DBConnector.getInstance();
  const query = `
    CREATE TABLE IF NOT EXISTS "categories" (
	    "id" SERIAL,
	    "title" VARCHAR(100) NOT NULL,
	    "category_name" VARCHAR(100) NOT NULL,
      "img_url" VARCHAR(100) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

  const result  = await connector.execute(query)
    if (result) {
      console.log('Table categories created');
    }
  console.log(' the end category');
};

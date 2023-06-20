import { DBConnector } from '../dbConnector';

export const createUserTable = async () => {
  const connector = DBConnector.getInstance();

  const query = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "last_name" VARCHAR(100) NOT NULL,
	    "first_name" VARCHAR(100) NOT NULL,
	    "email" VARCHAR(100) NOT NULL,
      "create_date" DATE NOT NULL DEFAULT CURRENT_DATE,
      "update_date" DATE NOT NULL DEFAULT CURRENT_DATE,
	    "username" VARCHAR(100) NOT NULL,
      "password" TEXT NOT NULL,
      "salt" TEXT NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

  const result = await connector.execute(query);
    if (result) {
      console.log('Table users created');
    }
  console.log('the end user')
};


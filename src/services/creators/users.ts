import { execute } from '../dbConnector';

export const createUserTable = () => {
  const query = `
    CREATE TABLE IF NOT EXISTS "users" (
	    "id" SERIAL,
	    "last_name" VARCHAR(100) NOT NULL,
	    "first_name" VARCHAR(100) NOT NULL,
      "create_date" DATE NOT NULL DEFAULT CURRENT_DATE,
	    "username" VARCHAR(100) NOT NULL,
      "password" TEXT NOT NULL,
	    "role" VARCHAR(15) NOT NULL,
	    PRIMARY KEY ("id")
    );`;

  execute(query).then((result: any) => {
    if (result) {
      console.log('Table users created');
    }
  });
}

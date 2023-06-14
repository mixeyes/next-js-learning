import { execute } from '../dbConnector';

export const addPgCrypto = () => {
  const query = 'CREATE EXTENSION pgcrypto';

  execute(query).then((result: any) => {
    if (result) {
      console.log('pgcrypto added');
    }
  });
};

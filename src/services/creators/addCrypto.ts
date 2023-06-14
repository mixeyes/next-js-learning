export const addPgCrypto = () => {
  const query = 'CREATE EXTENSION pgcrypto';

  createUsers(query).then((result: any) => {
    if (result) {
      console.log('pgcrypto added');
    }
  });
};


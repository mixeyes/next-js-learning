const URL = process.env.API_URL || '';
export const get = async (uri: string) => {
  const res = await fetch(`${URL}${uri}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
};

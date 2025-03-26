import type QueryParams from '@/types/QueryParams'

// Serializes an object to a query string (starting with `&`)
export default (params: QueryParams) => {
  if (!params || !Object.keys(params).length) {
    return '';
  }

  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, values]) => {
    if (!Array.isArray(values)) {
      query.append(key, values);

      return;
    }

    values.forEach((value) => {
      query.append(key, value);
    });
  });

  return `&${query.toString()}`;
};

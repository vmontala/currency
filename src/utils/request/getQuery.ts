import type QueryParams from '@/types/QueryParams'

/**
 * Serializes an object to a query string
 *
 * @param {object} params - Set of params to serialize on the URL
 *
 * @returns {string} - Either empty string or URL-friendly key-value serialized object starting with
 * `&`
 */
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

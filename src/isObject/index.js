/**
 * This function should return "true" only for "Object" type
 * @param {any} data - this can be any value: string, number, array, object, etc.
 * @return {boolean} result of the "isObject" function
 * @example
 * isObject({});   // true
 * isObject([]);   // false
 * isObject(null); // false
 */
const isObject = data => {
  /* your logic here...*/
  const type = typeof data
  return data != null && !Array.isArray(data) && (type === 'object' || type === 'function')
};

export default isObject;

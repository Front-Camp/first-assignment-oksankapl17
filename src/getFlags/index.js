/**
 * @param {Array<Object>} arr - this is an array of objects
 * @return {Array} result of the sum value.
 * @example
 * const arr = [{flags: [1, 2, 3]}, {flags: [4, 5, 6]}];
 * getFlags(arr); // [1, 2, 3, 4, 5, 6]
 */
const getFlags = arr => {
  /* your logic here...*/
  let newArr = [];
  arr.map(obj => newArr.push.apply(newArr, obj.flags));
  return newArr;
};

export default getFlags;

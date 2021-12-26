const nestedArray = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

const flatten = (nestedArray, newArray) => {
  nestedArray.map((item) => {
    if (Array.isArray(item)) {
      flatten(item, newArray);
    } else {
      newArray.push(item);
    }
  });

  return newArray;
};

console.log(flatten(nestedArray, []));// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]

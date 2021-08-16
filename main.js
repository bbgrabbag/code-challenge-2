const areJoinable = (x, y) => {
  return x.endPx > y.startPx && x.startPx < y.endPx;
};

const union = (x, y) => {
  return {
    startPx: Math.min(x.startPx, y.startPx),
    endPx: Math.max(x.endPx, y.endPx),
  };
};

// brute force
// ~ O(n^3)
const unionOverlappingItems = (arr) => {
  const output = [...arr];
  if (output.length < 2) return output;
  for (let i = 0; i < output.length - 1; i++) {
    for (let j = i + 1; j < output.length; j++) {
      if (areJoinable(output[i], output[j])) {
        output[i] = union(output[i], output[j]);
        output.splice(j, 1);
        i = -1;
        break;
      }
    }
  }
  return output;
};

// sort
// ~ O(n^2 * log(n))
const unionOverlappingItemsOptimized = (arr) => {
  if (arr.length < 2) return [...arr];
  return arr
    .sort((x, y) => x.startPx - y.startPx)
    .reduce(
      (t, item, i) => {
        if (t.underConstruction === null) {
          t.underConstruction = item;
        } else if (item.startPx < t.underConstruction.endPx) {
          if (item.endPx > t.underConstruction.endPx)
            t.underConstruction.endPx = item.endPx;
        } else {
          t.output.push(t.underConstruction);
          t.underConstruction = item;
        }
        if (i === arr.length - 1) t.output.push(t.underConstruction);
        return t;
      },
      { output: [], underConstruction: null }
    ).output;
};

module.exports = {
  unionOverlappingItems,
  unionOverlappingItemsOptimized,
  union,
  areJoinable,
};

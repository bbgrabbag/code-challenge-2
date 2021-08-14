const areJoinable = (x, y) => {
  return x.endPx > y.startPx && x.startPx < y.endPx;
};

const union = (x, y) => {
  return {
    startPx: Math.min(x.startPx, y.startPx),
    endPx: Math.max(x.endPx, y.endPx),
  };
};

const unionOverlappingItems = (arr) => {
  if (arr.length < 2) return arr;

  let output = arr;

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

module.exports = {
  unionOverlappingItems,
  union,
  areJoinable,
};

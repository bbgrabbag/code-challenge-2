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
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (areJoinable(arr[i], arr[j])) {
        arr[i] = union(arr[i], arr[j]);
        arr.splice(j, 1);
        i = -1;
        break;
      }
    }
  }
  return arr;
};

module.exports = {
  unionOverlappingItems,
  union,
  areJoinable,
};

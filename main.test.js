const { unionOverlappingItemsOptimized, unionOverlappingItems, union, areJoinable } = require("./main");
const { testCases } = require("./test-cases");

describe("union function", () => {
  testCases.union.forEach(([input, expected]) => {
    it("Should output an overlapped item", () => {
      expect(union(...input)).toEqual(expected);
    });
  });
});

describe("areJoinable function", () => {
  testCases.areJoinable.forEach(([input, expected]) => {
    it("Should determine whether two items are joinable", () => {
      expect(areJoinable(...input)).toBe(expected);
    });
  });
});

describe("unionOverlappingItems Function", () => {
  testCases.unionOverlappingItems.forEach(([input, expected]) => {
    it("Should output an array of non-overlapping items", () => {
      expect(unionOverlappingItems(input)).toEqual(expected);
    });
  });
});
describe("unionOverlappingItemsOptimized Function", () => {
  testCases.unionOverlappingItems.forEach(([input, expected]) => {
    it("Should output an array of non-overlapping items", () => {
      expect(unionOverlappingItemsOptimized(input)).toEqual(expected);
    });
  });
});

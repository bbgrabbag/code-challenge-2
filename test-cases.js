const testCases = {
  unionOverlappingItems: [
    // empty case
    [[], []],
    // single item case
    [[{ startPx: 0, endPx: 100 }], [{ startPx: 0, endPx: 100 }]],
    [
      // no overlaps
      [
        { startPx: 0, endPx: 10 },
        { startPx: 30, endPx: 40 },
        { startPx: 50, endPx: 60 },
        { startPx: 70, endPx: 80 },
      ],
      [
        { startPx: 0, endPx: 10 },
        { startPx: 30, endPx: 40 },
        { startPx: 50, endPx: 60 },
        { startPx: 70, endPx: 80 },
      ],
    ],
    [
      // shared overlaps
      [
        { startPx: 0, endPx: 10 },
        { startPx: 0, endPx: 15 },
        { startPx: 5, endPx: 20 },
        { startPx: 5, endPx: 15 },
      ],
      [{ startPx: 0, endPx: 20 }],
    ],
    [
      // one overlap
      [
        { startPx: 0, endPx: 10 },
        { startPx: 5, endPx: 15 },
        { startPx: 20, endPx: 30 },
        { startPx: 40, endPx: 50 },
      ],
      [
        { startPx: 0, endPx: 15 },
        { startPx: 20, endPx: 30 },
        { startPx: 40, endPx: 50 },
      ],
    ],
    [
      // two overlaps
      [
        { startPx: 0, endPx: 10 },
        { startPx: 5, endPx: 15 },
        { startPx: 20, endPx: 30 },
        { startPx: 25, endPx: 35 },
      ],
      [
        { startPx: 0, endPx: 15 },
        { startPx: 20, endPx: 35 },
      ],
    ],
    [
      // multiple overlaps
      [
        { startPx: 0, endPx: 10 },
        { startPx: 5, endPx: 15 },
        { startPx: 10, endPx: 20 },
        { startPx: 25, endPx: 35 },
        { startPx: 30, endPx: 40 },
      ],
      [
        { startPx: 0, endPx: 20 },
        { startPx: 25, endPx: 40 },
      ],
    ],
    [
      // unordered & multiple overlaps w/ negatives
      [
        { startPx: 0, endPx: 10 },
        { startPx: -10, endPx: 20 },
        { startPx: 30, endPx: 40 },
        { startPx: -5, endPx: 10 },
        { startPx: 25, endPx: 50 },
      ],
      [
        { startPx: -10, endPx: 20 },
        { startPx: 25, endPx: 50 },
      ],
    ],
  ],
  union: [
    [
      // typical case
      [
        { startPx: 10, endPx: 25 },
        { startPx: 15, endPx: 30 },
      ],
      { startPx: 10, endPx: 30 },
    ],
    [
      // same starting
      [
        { startPx: 10, endPx: 25 },
        { startPx: 10, endPx: 40 },
      ],
      { startPx: 10, endPx: 40 },
    ],
    [
      // same ending
      [
        { startPx: 10, endPx: 25 },
        { startPx: 15, endPx: 25 },
      ],
      { startPx: 10, endPx: 25 },
    ],
    [
      // nested inside
      [
        { startPx: 10, endPx: 25 },
        { startPx: 15, endPx: 20 },
      ],
      { startPx: 10, endPx: 25 },
    ],
  ],
  areJoinable: [
    [
      // not overlapping
      [
        { startPx: 0, endPx: 10 },
        { startPx: 10, endPx: 20 },
      ],
      false,
    ],
    [
      // overlapping
      [
        { startPx: 0, endPx: 20 },
        { startPx: 10, endPx: 30 },
      ],
      true,
    ],
    [
      // nested
      [
        { startPx: 0, endPx: 20 },
        { startPx: 5, endPx: 15 },
      ],
      true,
    ],
  ],
};

module.exports = {
  testCases,
};

// t/m requirement 4
// jest aanroepen: ..\27_test\node_modules\.bin\jest --watch farm

const { 
  getYieldForPlant,
  getYieldForCrop, 
  getTotalYield,
  getCostForPlant,
  getCostForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit
} = require("./farm");

const corn = {
  name: "corn",
  cost: 1,
  yield: 3,
  salePrice: 1
};

const pumpkin = {
  name: "pumpkin",
  cost: 2,
  yield: 4,
  salePrice: 2
};

const input = {
  crop: corn,
  numCrops: 10,
};

const crops = [
  { crop: corn, numCrops: 5 },
  { crop: pumpkin, numCrops: 2 },
];

const crops2 = [{ crop: corn, numCrops: 0 }];


describe("getYieldForPlant", () => {   // wtf is describe, waarom moet ik dat googlen? ##
  test("Get yield for plant with no environment factors", () => {
    expect(getYieldForPlant(corn)).toBe(3);
  });
});

describe("getYieldForCrop", () => {
  test("Get yield for crop, simple", () => {
    expect(getYieldForCrop(input)).toBe(30);
  });
});

describe("getTotalYield", () => {
  test("Calculate total yield with multiple crops", () => {
    expect(getTotalYield(crops)).toBe(23);
    // expect(getTotalYield({ crops })).toBe(23);

  });

  test("Calculate total yield with 0 amount", () => {
    expect(getTotalYield({ crops2 })).toBe(0);
  });
});

describe("getCostForPlant", () => {
  test("Get cost for plant with no environment factors", () => {
    expect(getCostForPlant(corn)).toBe(1);
  });
});

describe("getCostForCrop", () => {
  test("Get cost for crop, simple", () => {
    expect(getCostForCrop(input)).toBe(10);
  });
});

describe("getRevenueForCrop", () => {
  test("Get revenue for crop, simple", () => {
    expect(getRevenueForCrop(input)).toBe(30);
  })
});

describe("getProfitForCrop", () => {
  test("Get profit for crop, simple", () => {
    expect(getProfitForCrop(input)).toBe(20);
  });
});

describe("getTotalProfit", () => {
  test("Get total profit, simple", () => {
    expect(getTotalProfit(crops)).toBe(22);
  });
});



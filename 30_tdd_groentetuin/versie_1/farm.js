const getYieldForPlant = (plant) => plant.yield;

const getYieldForCrop = (input) =>
  input.numCrops * getYieldForPlant(input.crop);

const getTotalYield = (crops) => {
  // console.log(typeof(crops));
  // let result = 0;
  // result = Array.from(crops).reduce((totalYield, item) => {
  //   return totalYield + getYieldForCrop(item);
  // });
  // return result;

  const arrayFromCrops = Array.from(crops);
  let totalYield = 0;

  for (i = 0; i < arrayFromCrops.length; i++) {
    // console.log(arrayFromCrops[i].numCrops);
    totalYield += getYieldForCrop(arrayFromCrops[i]);
  }

  // console.log('ty: ' + totalYield);
  return totalYield;
};

const getCostForPlant = (plant) => plant.cost;

const getCostForCrop = (input) => input.numCrops * getCostForPlant(input.crop);

const getRevenueForCrop = (input) =>
  input.numCrops * input.crop.yield * input.crop.salePrice;

const getProfitForCrop = (input) =>
  getRevenueForCrop(input) - getCostForCrop(input);

const getTotalProfit = (crops) => {
  const arrayFromCrops = Array.from(crops);
  let totalProfit = 0;

  for (i = 0; i < arrayFromCrops.length; i++) {
    totalProfit += getProfitForCrop(arrayFromCrops[i]);
  }
  return totalProfit;
};

module.exports = {
  getYieldForPlant,
  getYieldForCrop,
  getTotalYield,
  getCostForPlant,
  getCostForCrop,
  getRevenueForCrop,
  getProfitForCrop,
  getTotalProfit,
};

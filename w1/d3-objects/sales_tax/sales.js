const calculateSalesTax = (salesData, taxRates) => {
  let returnObject = {};
  for (branch of salesData) {
    //calculate total sales and tax
    let totalSales = 0;
    let totalTax = 0;
    let taxRate = taxRates[branch["province"]];
    for (sale of branch.sales) {
      totalSales += sale;
      totalTax += sale * taxRate;
    }
    if (!returnObject[branch.name]) {
      returnObject[branch.name] = {};
      returnObject[branch.name].totalSales = 0;
      returnObject[branch.name].totalTax = 0;
    }
    returnObject[branch.name].totalSales += totalSales;
    returnObject[branch.name].totalTax += totalTax;
  }
  return returnObject;
};

const salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.1,
};

const companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [100, 200, 400],
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [80, 20, 10, 100, 90, 500],
  },
  {
    name: "Telus",
    province: "SK",
    sales: [500, 100],
  },
];

console.log(calculateSalesTax(companySalesData, salesTaxRates));

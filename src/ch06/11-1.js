import { readJSON } from "../util/fileController.js";

const products = readJSON("src/ch06/11-products.json");
const shippingMethod = {
  discountFee: 0.1,
  feePerCase: 0.03,
  discountThreshold: 0.12,
};

function applyShipping(pricateData, shippingMethod) {
  const shippingPerCase =
    pricateData.basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;

  const shippingCost = pricateData.quantity * shippingPerCase;
  return pricateData.basePrice - pricateData.discount + shippingCost;
}

const priceOrder = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const pricateData = {
    basePrice,
    quantity,
    discount,
  };

  return applyShipping(pricateData, shippingMethod);
};

products.forEach((product) => {
  console.log(priceOrder(product, 10, shippingMethod));
});

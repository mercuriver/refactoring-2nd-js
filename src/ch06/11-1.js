import { readJSON } from "../util/fileController.js";

const products = readJSON("src/ch06/11-products.json");
const shippingMethod = {
  discountFee: 0.1,
  feePerCase: 0.03,
  discountThreshold: 0.12,
};

function applyShipping(
  pricateData,
  basePrice,
  shippingMethod,
  quantity,
  discount
) {
  const shippingPerCase =
    basePrice > shippingMethod.discountThreshold
      ? shippingMethod.discountFee
      : shippingMethod.feePerCase;

  const shippingCost = quantity * shippingPerCase;
  return basePrice - discount + shippingCost;
}

const priceOrder = (product, quantity, shippingMethod) => {
  const basePrice = product.basePrice * quantity;
  const discount =
    Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
  const pricateData = {};

  return applyShipping(
    pricateData,
    basePrice,
    shippingMethod,
    quantity,
    discount
  );
};

products.forEach((product) => {
  console.log(priceOrder(product, 10, shippingMethod));
});

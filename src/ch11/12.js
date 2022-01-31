class ShippingRules {
  constructor(data) {
    this.data = data;
  }
}
const countryData = {
  shippingRules: {
    US: 10,
    CA: 7,
  },
};
const errorList = [];

class OrderProcessingError extends Error {
  constructor(errorCode) {
    super(`주문 처리 오류 ${errorCode}`);
    this.code = errorCode;
  }
  get name() {
    return "OrderProcessingError";
  }
}

const localShippingRules = (country) => {
  const data = countryData.shippingRules[country];
  if (data) return new ShippingRules(data);
  else throw new OrderProcessingError(-23);
};
const calculateShippingCosts = (order) => {
  // 관련 없는 코드
  const shippingRules = localShippingRules(order.country);
  if (shippingRules < 0) throw new Error("오류 코드가 다 사라지지 않았습니다.");
  // 관련 없는 코드
};
const execute = (order) => {
  let state;
  try {
    state = calculateShippingCosts(order);
  } catch (err) {
    if (err instanceof OrderProcessingError) {
      if (state < 0) errorList.push({ order, errorCode: state });
    } else {
      throw err;
    }
  }
};

execute({ country: "US" });
execute({ country: "CA" });
execute({ country: "KO" });

console.log(errorList);

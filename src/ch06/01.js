const printBanner = () => {
  console.log("*****************");
  console.log("**** 고객 채무 ****");
  console.log("*****************");
};

const printOwing = (invoice) => {
  let outstanding = 0;

  function printDetails() {
    console.log(`고객명: ${invoice.customer}`);
    console.log(`채무액: ${outstanding}`);
    console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
  }

  for (const o of invoice.orders) {
    outstanding += o.amount;
  }

  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );

  printBanner();
  printDetails();
};

printOwing({
  customer: "마틴",
  orders: [
    { name: "사채", amount: 100 },
    { name: "대출", amount: 1000 },
  ],
});

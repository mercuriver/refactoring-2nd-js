const printBanner = () => {
  console.log("*****************");
  console.log("**** 고객 채무 ****");
  console.log("*****************");
};

function printDetails(invoice, outstanding) {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
}

const printOwing = (invoice) => {
  printBanner();

  let outstanding = 0;
  for (const o of invoice.orders) {
    outstanding += o.amount;
  }
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
  printDetails(invoice, outstanding);
};

printOwing({
  customer: "마틴",
  orders: [
    { name: "사채", amount: 100 },
    { name: "대출", amount: 1000 },
  ],
});

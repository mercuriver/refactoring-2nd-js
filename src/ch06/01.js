const printBanner = () => {
  console.log("*****************");
  console.log("**** 고객 채무 ****");
  console.log("*****************");
};

const calculateOutstanding = (invoice) =>
  invoice.orders.reduce((result, order) => (result += order.amount), 0);

const recordDueDate = (invoice) => {
  const today = new Date();
  invoice.dueDate = new Date(
    today.getFullYear(),
    today.getMonth(),
    today.getDate() + 30
  );
};

const printDetails = (invoice, outstanding) => {
  console.log(`고객명: ${invoice.customer}`);
  console.log(`채무액: ${outstanding}`);
  console.log(`마감일: ${invoice.dueDate?.toLocaleString()}`);
};

const printOwing = (invoice) => {
  printBanner();
  const outstanding = calculateOutstanding(invoice);
  recordDueDate(invoice);
  printDetails(invoice, outstanding);
};

printOwing({
  customer: "마틴",
  orders: [
    { name: "사채", amount: 100 },
    { name: "대출", amount: 1000 },
  ],
});

let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

export const getDefaultOwner = () => Object.assign({}, defaultOwnerData);
export const setDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

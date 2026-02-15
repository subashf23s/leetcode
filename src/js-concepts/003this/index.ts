const firstThis = () => {
  const test = {
    props: 42,
    func() {
      return this.props;
    },
  };
  console.log(test.func());
};
// const secondThis = () => {
//   function getThis() {
//     return this;
//   }
//   const obj1 = {
//     name: "obj1",
//   };
//   const obj2 = { name: "obj2" };
//   obj1.getThis = getThis;
//   console.log(obj1.getThis());
// };
export const thisFn = () => {
  firstThis();
  //   secondThis();
};

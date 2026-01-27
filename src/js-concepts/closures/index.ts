function makeFunc() {
  const name = "Subash";
  return () => {
    console.log("My name is ", name);
  };
}
function makeAdder(x: number) {
  return (y: number) => {
    return x + y;
  };
}
export const closures = () => {
  const myFunc = makeFunc();
  myFunc();
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  console.log(add5(45));
  console.log(add10(40));
};

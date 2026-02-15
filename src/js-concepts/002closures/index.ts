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
function createCounter() {
  let count = 0;
  return {
    increment() {
      return ++count;
    },
    decrement() {
      return --count;
    },
    get() {
      return count;
    },
  };
}
export const closures = () => {
  const myFunc = makeFunc();
  myFunc();
  const add5 = makeAdder(5);
  const add10 = makeAdder(10);
  console.log(add5(45));
  console.log(add10(40));
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log("var", i), 1000);
  }
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log("let", i), 1000);
  }
  for (var i = 0; i < 5; i++) {
    ((x) => setTimeout(() => console.log("IIFE x", x), 1000))(i);
  }
  const c = createCounter();
  console.log(c.increment());
  console.log(c.increment());
  console.log(c.get());
  console.log(c.decrement());
  console.log(c.get());
};

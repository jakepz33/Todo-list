const coloredDivs = function () {
  console.log("I am outer");

  const innerFunction = function () {
    console.log("I am inner function");
  };

  return {
    innerFunction,
  };
};

export { coloredDivs };

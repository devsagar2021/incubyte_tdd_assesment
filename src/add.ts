const add = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }
  const numberArr = numbers.split(",");
  const sum = numberArr.reduce((acc, num) => acc + parseInt(num, 10), 0);
  return sum;
};

export default add;

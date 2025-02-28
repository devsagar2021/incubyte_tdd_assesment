const add = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }

  let delimiter: string | RegExp = /[,\n]/;
  let numbersToSum = numbers;

  if (numbers.startsWith("//")) {
    delimiter = numbers[2];
    numbersToSum = numbers.substring(numbers.indexOf("\n") + 1);
  }

  const numberArr = numbersToSum.split(delimiter);
  const sum = numberArr.reduce((acc, num) => acc + parseInt(num, 10), 0);
  return sum;
};

export default add;

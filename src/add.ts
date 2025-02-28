const add = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }

  let delimiter: string | RegExp = /[,\n]/;
  let numbersToSum = numbers;

  if (numbers.startsWith("//")) {
    const firstChar = numbers[2];
    if (firstChar === "[") {
      const endOfDelimiter = numbers.indexOf("]");
      delimiter = numbers.substring(3, endOfDelimiter);
    } else { 
      delimiter = firstChar;
    }
    numbersToSum = numbers.substring(numbers.indexOf("\n") + 1);
  }

  const numberArr = numbersToSum.split(delimiter);
  const negativeNumbers: string[] = [];

  const sum = numberArr.reduce((acc, num) => {
    const numInt = parseInt(num, 10);
    if (numInt < 0) {
      negativeNumbers.push(num);
      return acc;
    }
    if (numInt > 1000) {
      return acc;
    }
    return acc + parseInt(num, 10);
  }, 0);

  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
  }
  return sum;
};

export default add;

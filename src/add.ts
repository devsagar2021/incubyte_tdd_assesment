const add = (numbers: string): number => {
  if (numbers === "") {
    return 0;
  }

  let delimiter: string | RegExp = /[,\n]/;
  let numbersToSum = numbers;

  // Check if custom delimiter
  if (numbers.startsWith("//")) {
    const delimiterSubstring = numbers.substring(2, numbers.indexOf("\n"));
    if (delimiterSubstring.startsWith("[")) {
      let delimiters = delimiterSubstring.split("][");
      delimiters = delimiters.map((d) => {
        const cleanDelimiter = d.replace("[", "").replace("]", "");
        return cleanDelimiter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
      });
      delimiter = new RegExp(delimiters.join("|"), "g");
    } else { 
      delimiter = delimiterSubstring;
    }
    numbersToSum = numbers.substring(numbers.indexOf("\n") + 1);
  }

  // Split numbers
  const numberArr = numbersToSum.split(delimiter);
  
  const negativeNumbers: string[] = [];

  // Sum numbers
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

  // Throw error if there are negative numbers
  if (negativeNumbers.length > 0) {
    throw new Error(`Negatives not allowed: ${negativeNumbers.join(",")}`);
  }
  return sum;
};

export default add;

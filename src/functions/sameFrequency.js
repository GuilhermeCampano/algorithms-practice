export function sameFrequency(number1, number2) {
  const text1 = number1.toString();
  const text2 = number2.toString();

  if (text1.length !== text2.length) {
    return false;
  }

  let frequency1 = {};
  let frequency2 = {};

  let textArr1 = text1.split("");
  let textArr2 = text2.split("");

  textArr1.forEach((val) => {
    frequency1[val] = (frequency1[val] || 0) + 1;
  });

  textArr2.forEach((val) => {
    frequency2[val] = (frequency2[val] || 0) + 1;
  });

  for (let key in frequency1) {
    if (!frequency2[key]) {
      return false;
    }

    if (frequency2[key] !== frequency1[key]) {
      return false;
    }
  }

  return true;
}

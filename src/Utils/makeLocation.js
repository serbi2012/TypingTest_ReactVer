function makeLocation(text, input) {
  const result = [];

  let stringNum = 0;
  let spaceNum = 0;

  for (let i = 0; i < input.length; i++) {
    if (text[i] == " ") {
      spaceNum++;
    } else {
      stringNum++;
    }

    if (input[i] !== text[i]) {
      if (i === 0) {
        result.push({ location: [0, 0] });
      } else if (stringNum % 2 === 0) {
        result.push({ location: [stringNum / 2, i - stringNum / 2] });
      } else {
        result.push({
          location: [(stringNum + 1) / 2, i - (stringNum + 1) / 2],
        });
      }
    }
  }

  return result;
}

export { makeLocation };

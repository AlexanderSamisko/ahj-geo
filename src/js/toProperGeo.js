export default function toProperGeo(string) {
  const arr = [...string];
  let borderLeft = 0;
  let borderRight = 0;
  arr.forEach((element) => {
    if (element === '[') {
      borderLeft += 1;
    } else if (element === ']') {
      borderRight += 1;
    }
  });

  const substrings = string.split(',');
  if (substrings[1].charAt(0) === ' ') {
    if (borderLeft === 1 && borderRight === 1) {
      return string;
    } if (borderLeft === 0 && borderRight === 1) {
      arr.unshift('[');
      return arr.join('');
    } if (borderLeft === 1 && borderRight === 0) {
      arr.push(']');
      return arr.join('');
    } if (borderLeft === 0 && borderRight === 0) {
      arr.unshift('[');
      arr.push(']');
      return arr.join('');
    }
  } else {
    console.log(substrings[1]);
    console.log(substrings[1].charAt(0));
    arr.splice(substrings[0].length + 1, 0, ' ');
    if (borderLeft === 1 && borderRight === 1) {
      return arr.join('');
    } if (borderLeft === 0 && borderRight === 1) {
      arr.unshift('[');
      return arr.join('');
    } if (borderLeft === 1 && borderRight === 0) {
      arr.push(']');
      return arr.join('');
    } if (borderLeft === 0 && borderRight === 0) {
      arr.unshift('[');
      arr.push(']');
      return arr.join('');
    }
  }
}

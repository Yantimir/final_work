const array = ["Russia", "Denmark", "Kazan", "Ru", "Kz", "Den"];

function newArray(array) {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i].length <= 3) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(newArray(array));
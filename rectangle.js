const row = function (length) {
  return "*".repeat(length);
}

const rectangle = function (width, height) {
  if (height == 1) {
    return row(width);
  }
  return row(width) + "\n" + rectangle(width, height - 1);
}

console.log(rectangle(4, 4));
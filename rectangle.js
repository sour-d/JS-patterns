const row = function (length) {
  return "*".repeat(length);
}

const rectangle = function (width, height) {
  let rectangle = row(width);

  for (let i = 1; i < height; i++) {
    rectangle += "\n" + row(width); 
  }
  return rectangle;
}

console.log(rectangle(4, 4));
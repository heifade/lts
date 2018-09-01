enum Color {
  Red,
  Green,
  Blue
}

console.log(Color.Red);

function ff(color: Color): string {
  switch (color) {
    case Color.Red:
      return "red";
    case Color.Green:
      return "green";
    case Color.Blue:
      return "blue";
    // default:
    //   return "blue";
  }
}

ff(Color.Red);

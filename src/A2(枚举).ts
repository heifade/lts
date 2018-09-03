enum Color {
  Red,
  Green,
  Blue
}

console.log(Color.Red);

function a2f1(color: Color): string {
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

a2f1(Color.Red);

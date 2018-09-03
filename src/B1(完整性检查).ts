let b11: "production" | "development";

function b1f1(): string {
  switch (b11) {
    case "production":
      return "production";
    case "development":
      return "development";
    case "ddd": // 不会有这种情况
      return "ddd";
    // default:
    //   return "other";
  }
}

b1f1();

//---------------------------------------------------------------------------------

enum B1Color {
  Red,
  Green,
  Blue
}

function b1f2(color: B1Color): string {
  switch (color) {
    case B1Color.Red:
      return "red";
    case B1Color.Green:
      return "green";
    case B1Color.Blue:
      return "blue";
    // default:
    //   return "blue";
  }
}

b1f2(B1Color.Red);

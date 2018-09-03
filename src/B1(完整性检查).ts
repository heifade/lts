let b11: "production" | "development";

function bf1(): string {
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

bf1();


//---------------------------------------------------------------------------------

enum BColor {
  Red,
  Green,
  Blue
}

function bf2(color: BColor): string {
  switch (color) {
    case BColor.Red:
      return "red";
    case BColor.Green:
      return "green";
    case BColor.Blue:
      return "blue";
    // default:
    //   return "blue";
  }
}

bf2(BColor.Red);

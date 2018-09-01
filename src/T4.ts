let value4: "production" | "development";

value4 = "production";
value4 = "development";

value4 = "aa";

function ff1(): string {
  switch (value4) {
    case "production":
      return "production";
    case "development":
      return "development";
    // default:
    //   return "other";
  }
}

ff1();

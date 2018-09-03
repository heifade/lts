function e1f1<T>(value: T): T {
  return value;
}

let v1 = e1f1(1);
let v2 = e1f1("ss");
let v3 = e1f1(true);


// ------------------------------------------------------------------

function e2f2<T>(list: T[], index: number): T {
  return list[index];
}

let v4 = e2f2(["1", "2", "3"], 1);
let v5 = e2f2([1, 2, 3], 1);
let v6 = e2f2([true, false, false], 1);

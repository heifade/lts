function t9f1<T>(value: T): T {
  return value;
}

let v1 = t9f1(1);
let v2 = t9f1("ss");
let v3 = t9f1(true);


// ------------------------------------------------------------------

function t9f2<T>(list: T[], index: number): T {
  return list[index];
}

let v4 = t9f2(["1", "2", "3"], 1);
let v5 = t9f2([1, 2, 3], 1);
let v6 = t9f2([true, false, false], 1);

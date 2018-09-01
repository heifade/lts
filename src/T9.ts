function ff5<T>(value: T): T {
  return value;
}

let v1 = ff5(1);
let v2 = ff5("ss");
let v3 = ff5(true);

function ff6<T>(list: T[], index: number): T {
  return list[index];
}

let v4 = ff6(["1", "2", "3"], 1);
let v5 = ff6([1, 2, 3], 1);
let v6 = ff6([true, false, false], 1);

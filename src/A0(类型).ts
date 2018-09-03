let a01: number = 1; // 数字
let a02: string = "aaa"; // 字符串
let a03: boolean = false; // 布尔
let a04: number[] = [1, 2, 3]; // 数组
let a05: [string, number] = ['aa', 1]; // 元组
let a06: any = '1'; a06 = 1; a06 = true; // 动态类型



let a088: {
  stringField1: string;
  numberField2: number;
  canUndefineNumberField3?: number;
};

a088 = {
  stringField1: "sss",
  numberField2: 100,
  //canUndefineNumberField3: 5
};

a088 = {
  stringField1: 5,
  numberField2: "ss",
  canUndefineNumberField3: true,
};

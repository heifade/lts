let value2: {
  stringField1: string;
  numberField2: number;
  canUndefineNumberField3?: number;
};

value2 = {
  stringField1: "sss",
  numberField2: 100
  //canUndefineNumberField3: 5
};

value2 = {
  stringField1: 5,
  numberField2: "ss",
};



let a1 : string | number;


a1 = "aa";
a1 = 100;
a1 = true;





function fa1(value: string | number) {
  return value.toString();
}

fa1(1);
fa1('a');
fa1(false);
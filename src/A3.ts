

let value3 : string | number;


value3 = "aa";
value3 = 100;
value3 = true;





function ff3(value: string | number) {
  return value.toString();
}

ff3(1);
ff3('a');
ff3(false);
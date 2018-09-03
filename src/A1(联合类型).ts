let a1: string | number;

a1 = "aa";
a1 = 100;
a1 = true;

//------------------------------------------------------

function a1f1(value: string | number) {
  return value.toString();
}

a1f1(1);
a1f1("a");
a1f1(false);

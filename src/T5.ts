interface User {
  userId: string;
  userName: string;
  birthday: Date;

  [otherField: string]: any;
}

function save(user: User): boolean {
  return true;
}

save({
  userId: "111",
  userName: "bbb",
  birthday: new Date(),
  otherField: 111
});

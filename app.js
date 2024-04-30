const users = [
  { username: "mlewis" },
  { username: "akagen" },
  { username: "msmith" },
];

function findUserByUsername(users, username) {
  return users.find((user) => user.username === username);
}

console.log(findUserByUsername(users, "mlewis")); //return mlewis
console.log(findUserByUsername(users, "taco")); //return undefined

function removeUser(users, username) {
  let index = users.findIndex((user) => user.username === username);
  if (index === -1) {
    return undefined;
  } else {
    return users.splice(index, 1)[0];
  }
}

console.log(removeUser(users, "akagen")); //displays and removes akagen
console.log(removeUser(users, "akagen")); //displays undefined

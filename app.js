/* const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string]
} = {
  name: 'Pablo',
  age: 27,
  hobbies: ['Sports', 'Traveling'],
  role: [2, 'author']
} */
var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role[Role["READ_ONLY"] = 100] = "READ_ONLY";
    Role[Role["AUTHOR"] = 101] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Pablo',
    age: 27,
    hobbies: ['Sports', 'Traveling'],
    role: Role.ADMIN
};
// person.role.push('admin');
// person.role[1] = 10 //error
var favoriteActivities;
// favoriteActivities = ['sport', 1] errorr because we have a number
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
    // hobby.map() error
}
if (person.role == Role.ADMIN) {
    console.log('is read only');
}

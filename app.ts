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


enum Role { ADMIN = 'ADMIN', READ_ONLY = 100, AUTHOR };

const person = {
  name: 'Pablo',
  age: 27,
  hobbies: ['Sports', 'Traveling'],
  role: Role.ADMIN
}

// person.role.push('admin');
// person.role[1] = 10 //error

let favoriteActivities: string[];
// favoriteActivities = ['sport', 1] errorr because we have a number


console.log(person.name)

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase())
  // hobby.map() error
}

if(person.role == Role.ADMIN) {
  console.log('is read only')
}
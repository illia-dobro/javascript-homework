import users from './users.js';

//Завдання 1

const getUserNames = users => {
  return users.reduce((acc, next) => {
    acc.push(next.name);
    return acc;
  }, []);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

//Завдання 2

const getUsersWithEyeColor = (users, color) => {
  return users.filter(i => i.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Carey Barr]

//Завдання 3

const getUsersWithGender = (users, gender) => {
  return users.reduce((acc, next) => {
    if (next.gender === gender) {
      acc.push(next.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

//Завдання 4

const getInactiveUsers = users => {
  return users.filter(i => i.isActive === false);
};

console.log(getInactiveUsers(users)); // [об'єкт Moore Hensley, об'єкт Ross Vazquez, об'єкт Blackburn Dotson]

//Завдання 5

const getUserWithEmail = (users, email) => {
  return users.filter(i => i.email === email)[0];
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {об'єкт користувача Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {об'єкт користувача Elma Head}

//Завдання 6

const getUsersWithAge = (users, min, max) => {
  return users.filter(i => i.age >= min && i.age <= max);
};

console.log(getUsersWithAge(users, 20, 30)); // [об'єкт Ross Vazquez, об'єкт Elma Head, об'єкт Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [об'єкт Moore Hensley, об'єкт Sharlene Bush, об'єкт Blackburn Dotson, об'єкт Sheree Anthony]

//Завдання 7

const calculateTotalBalance = users => {
  return users.reduce((acc, next) => acc + next.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

//Завдання 8

const getUsersWithFriend = (users, friendName) => {
  return users.reduce((acc, next) => {
    if (next.friends.includes(friendName)) {
      acc.push(next.name);
    }
    return acc;
  }, []);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

//Завдання 9

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((a, b) => a.friends.length - b.friends.length)
    .reduce((acc, next) => {
      acc.push(next.name);
      return acc;
    }, []);
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

//Завдання 10
const getSortedUniqueSkills = users => {
  const skills = users.reduce((acc, next) =>{
    acc = [...acc, ...next.skills];
    return acc
  }, [])
  return [...new Set(skills)]
  
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]

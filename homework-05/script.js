//Завдання 1

function Account({ login, email }) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`login:${this.login}, Email:${this.email}`);
};

console.log(Account.prototype.getInfo); // function

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

poly.getInfo(); // Login: Poly, Email: poly@mail.com

//Завдання 2

class User {
  constructor({ name, age, followers }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }
  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${this.follower} followers`
    );
  }
}

const mango2 = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango2.getInfo(); // User Mango is 2 years old and has 20 followers

const poly2 = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly2.getInfo(); //User Poly is 3 years old and has 17 followers

//Завдання 3

class Storage{
    constructor(items){
        this.items = items
    }
    getItems(){
        return this.items;
    }
    addItem(item){
        this.items.push(item)
    }
    removeItem(item){
        this.items = this.items.filter(i => i !== item)
    }
}

const storage = new Storage([
  'Нанітоіди',
  'Пролонгер',
  'Залізні жупи',
  'Антигравітатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

storage.addItem('Дроїд');
console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]

//Завдання 4
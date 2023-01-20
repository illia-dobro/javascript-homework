//Завдання 1
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (let key of Object.keys(user)) {
  console.log(`${key}:${user[key]}`);
}

//Завдання 2

const countProps = function (obj) {
  return Object.keys(obj).length;
};

console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 })); // 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//Завдання 3

const findBestEmployee = function (employees) {
  return Object.keys(employees).find(
    i => employees[i] === Math.max(...Object.values(employees))
  );
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux

//Завдання 4

const countTotalSalary = function (employees) {
  return Object.values(employees).reduce((acc, i) => acc + i, 0);
};

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400

//Завдання 5

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const getAllPropValues = function (arr, prop) {
  return arr.reduce((acc, i) => {
    i[prop] ? acc.push(i[prop]) : [];
    return acc;
  }, []);
};

console.log(getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроїд', 'Захоплення']
console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
console.log(getAllPropValues(products, 'category')); // []

//Завдання 6

const products2 = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроїд', price: 400, quantity: 7 },
  { name: 'Захоплення', price: 1200, quantity: 2 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
    for (let i of allProdcuts){
        if(i.name ===  productName){
            return i.price * i.quantity
        }
    }
  return 
};

console.log(calculateTotalPrice(products2, 'Радар')); // 5200
console.log(calculateTotalPrice(products2, 'Дроїд')); // 2800

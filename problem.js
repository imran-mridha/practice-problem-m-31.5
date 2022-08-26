// Practice problem -- 01
let name = 'Imaran';
const age = 25;

// Practice problem -- 2

const obj = {
  hope: 'Want to be a web developer',
  duration: 6
}

const string = `My name is ${name}. & age is ${25}.
I wish ${obj.hope}, Within ${obj.duration} Month.
`
// console.log(string)

// Practice Problem -- 03.1

const dividedByFive = num => num / 5;

// console.log(dividedByFive(50))

// Practice Problem -- 03.2
const fun2pera = (num1,num2)=>((num1+2)*(num2+2));
// console.log(fun2pera(10,20))
// Practice Problem -- 03.3
const fun3Pera = (num3,num4,num5)=> num3*num4*num5;
// console.log(fun3Pera(10,20,30));
// Practice Problem -- 03.4
const plusMulti = (num1,num2)=> {
  const plus1 = num1 + 2;
  const plus2 = num2 + 2;
  const multi = plus1 * plus2;
  // console.log(plus1)
  // console.log(plus2)
  // console.log(multi)
}
plusMulti(2,3)
// Practice Problem -- 5
const numbers = [20,30,40,50,60,7,70,90,100];
const nums5Multi = numbers.map(num => num*5)
// console.log(nums5Multi)
// Practice Problem -- 6
const numbers2 = [3,10,7,5,12,1,14,17,20,19];
const getOdNums = numbers2.filter(num => num % 2 == 1);
// console.log(getOdNums)
// Practice Problem -- 7
const products = [
  {name: 'Laptop', price: 50000},
  {name: 'Iphone', price: 80000},
  {name: 'Monitor', price: 10000},
  {name: 'Nokia Phone', price: 5000},
  {name: 'Ketboard', price: 3000},
]

const findProduct = products.find(product => product.price === 5000)
// console.log(findProduct);
// Practice Problem -- 8
const [getName] = products.map(product =>product.name);
// console.log(getName)
// 0R
const car = {
  carName: 'Hyundai',
  model: 'Accent',
  color: ['Red','Blue', 'Black']
}
const {carName, model, color} = car;
// console.log(carName,model,color)
// Practice Problem -- 9
const [,,three] = [20, 25, 35, 40];
// console.log(three)
// Practice Problem -- 10
const plus3Para = ((p1,p2,p3 = 7) => p1 + p2 + p3)
// console.log(plus3Para(10,20))
// console.log(plus3Para(10,20,30))
// Practice Problem -- 11-12
const users ={
  user1: {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  },
  user2: {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
}
// console.log(users.user1?.address.geo?.lat)
// console.log(users.user2?.address.geo.lng)


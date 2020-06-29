const array = [1,3,4,5,7,8,10];

const newArrayDobroItem = array.map(function(item){
    return item *2
})

console.log(newArrayDobroItem)

const newArrayMaisPosicao = array.map(function(item,index){
    return item + index;
})

console.log(newArrayMaisPosicao);

const sum = array.reduce(function(item,next){
    return item + next;
})

console.log(sum);

const filter = array.filter(function(item){
    return item % 2 === 0;
})
console.log(filter);

const find = array.find(function(item){
    return item == 4;
})

console.log(find);

const user = {
    name: "Lucas",
    age: 23,
    address: {
        city: "Ceilandia",
        state: "DF"
    }
}

function showName({name, age}){
    console.log(name, age);
}

showName(user);

const {address: {city,state}} = user;

console.log(city);
console.log(state);
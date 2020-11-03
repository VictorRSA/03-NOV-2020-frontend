let cars=[{
    "color":"purple",
    "type":"minivan",
    "registration":new Date(2020-03-11),
    "capacity":7 

},{
    "color":"red";
    "type":"statiopn wagon",
    "registration":new Date(2018-03-03),
    "capacity":5
}]

let car ={
    "color":"red",
    "type":"cabrio",
    "registration": new Date(2016-05-02),
    "capacity":2
}

cars.unshift(car)   /*add an object at the first position ,use array.unshift
add new object at the last position use Array.push*/

/*add an object in the middle use array.splice,this function is very handy it can be used to remove items */

// Array.splice(
//     {index where to start}
//     {how many items to remove}
//     {items to add}
// )

cars.splice(4,0,car) 
console.log(cars)
//add a red Volkswagen Cabrio in the fifith position



let car =cars.find(car =>c.color ==="red");
console.log(car);


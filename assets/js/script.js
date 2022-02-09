  
// Øvelse 1: Happy Hour
function doubleNumbers(arr) {
     let newArray = arr.map((val, i, arr) => {
        return val * 2;
      });
      return newArray
}
console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]


//øvelse 2
function stringItUp(arr) {
    let newArr = arr.map(element=>element).join("-")
      return newArr
}
console.log(stringItUp([2, 5, 100])); 

//øvelse 3
function capitalizeNames(arr) {
    let newArr = arr.map(element=>element).join(" - ")
    result = newArr.toUpperCase()
      return result
}
console.log(capitalizeNames(["lone", "Allan", "Hello woRld", "tim22"]));


//øvelse 4
function namesOnly(arr){
    let newArray = arr.map((val, i, arr) => {
        val = val.name
        return val;
      });
      return newArray
}

console.log(namesOnly([
    {
        name: "Mads Mikkelsen",
        age: 80
    },
    {
        name: "Sofie Gråbøl",
        age: 2
    },
    {
        name: "Sidse Babett Knudsen",
        age: 5
    },
    {
        name: "Nikolaj Lie Kaas",
        age: 16
    },
    {
        name: "Frank Hvam",
        age: 100
    }
])); 

//øvelse 4

function makeStrings(arr) {
    let newArray = arr.map((val, i, arr) => {
        age = val.age
        name = val.name
        return age > 2 ? name + " Er Gammel nok" : name + " Er ikke gammel nok";
      });
      return newArray
}

console.log(makeStrings([
    {
        name: "Mads Mikkelsen",
        age: 80
    },
    {
        name: "Sofie Gråbøl",
        age: 2
    },
    {
        name: "Sidse Babett Knudsen",
        age: 5
    },
    {
        name: "Nikolaj Lie Kaas",
        age: 16
    },
    {
        name: "Frank Hvam",
        age: 100
    }
])); 
// Result =>
// ["Mads Mikkelsen er gammel nok", 
// "Sofie Gråbøl er IKKE gammel nok!!", 
// "Sidse Babett Knudsen er IKKE gammel nok!!", 
// "Nikolaj Lie Kaas er IKKE gammel nok!!", 
// "Frank Hvam er gammel nok"]

//øvelse 5

function readyToPutInTheDOM(arr){
    let newArray = arr.map((val, i, arr) => {
        age = val.age
        name = val.name
     
        return `<h1>${name}</h1><h2>${age}</h2>`
      });
      return newArray
}
console.log(readyToPutInTheDOM([
    {
        name: "Mads Mikkelsen",
        age: 80
    },
    {
        name: "Sofie Gråbøl",
        age: 2
    },
    {
        name: "Sidse Babett Knudsen",
        age: 5
    },
    {
        name: "Nikolaj Lie Kaas",
        age: 16
    },
    {
        name: "Frank Hvam",
        age: 100
    }
]));
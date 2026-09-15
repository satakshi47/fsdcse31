// let student = {
//     name: "satakshi srivastva",
//     roll_no: 1014,
//     CGPA: 9.7,
//     isPass: true
// };

// console.log(student);
//  let marks=[34,55,6,89];
//  for(let i=0;i<4;i++){
//     console.log(marks[i]);
//  }

let student= [{
    
    name:"amit",
    city:"delhi",
    CGPA:7.5,
},
{name:"rahul",
    city:"punjab",
    CGPA:9.5,
},
{name:"prateek",
    city:"punjab",
    CGPA:6.5,
},
{name:"anjali",
    city:"Mumbai",
    CGPA:9.3,
},
{name:"Aditya",
    city:"Mumbai",
    CGPA:8.9,
},
{name:"Ravi",
    city:"Mumbai",
    CGPA:8.5,
},
{name:"sanvi",
    city:"Ghaziabad",
    CGPA:9.8,
},
{name:"Shagun",
    city:"Muzzaffarnagar",
    CGPA:9.4,
},

{name:"Tanya",
    city:"Gorakhpur",
    CGPA:10.0,
},
{name:"Anshika",
    city:"kerala",
    CGPA:9.3,
},




];

for(let i=0;i<student.length;i++){
    if(student[i].CGPA>9.0){
      console.log(student[i]);
    }}
 console.table(student);

//  let obj ={
//     name: "pen",
//     price: 10,
//  };
//  console.log("the cost of", obj.name,"is",obj.price);
//  console.log(`the cost of ${obj.name}is ${obj.price}`);

//    let str = "hello";
// let count = 0;

// for (let ch of str) {
//     count++;
// }

// console.log(count); 


















let s = "Hello";
let count = 0;

for (let i = 0; s[i] != undefined; i++) {
    count++;
}

console.log(count);


// let s="satakshi";
// console.log(s.length);
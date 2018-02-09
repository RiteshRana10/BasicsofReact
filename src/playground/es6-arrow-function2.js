// arguments object - no longer bound with arrow function

const add =(a,b) =>
{

  //  console.log(arguments);
    return a+b;
}
console.log(add(5,6,80));


// this keyword -no longer bound
const user={
    name:"Ritesh",
    cities:['chandigarh','punjab','Bangalore'],
   printPlacesLived(){
       
return this.cities.map((city) => {
return this.name+ ' has lived in' + city;
       });
//         this.cities.forEach((city) =>{
// console.log(this.name + ' has lived in' + city)
//        });
    }
};
console.log(user.printPlacesLived());


/// arrow function has global scope if we will change  printPlacesLived funtion to arrow function it will give output undefined
//
const number={
    num: [1,2,3,4,5],
    multi: 4,
    multiply: function (){
        return this.num.map((numb)=>{
return numb* this.multi;
        });
    }
};
console.log(number.multiply());
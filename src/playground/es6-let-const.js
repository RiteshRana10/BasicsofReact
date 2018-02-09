var nameVar='chetan';
var nameVar = 'Ritesh';
console.log('nameVar', nameVar);


// We can not redefine variable with same name using let & const
let nameLet='Parteek';
//let nameLet='Parteek';
 nameLet='gupta';
console.log('nameLet', nameLet);

const nameConst ='Yashvi';
//const nameConst ='Yash';
//nameConst ='Yash';
console.log('nameConst', nameConst);

//Block Level Scoping
 const fullName='Ritesh Rana';
 let firstName
 if(fullName)
 {
      firstName=fullName.split(' ')[0];
     console.log(firstName);
 }
 console.log(firstName);
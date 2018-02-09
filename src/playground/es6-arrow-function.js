const square = function(x)
{return x * x;
};
console.log(square(5));

// const squareArrow =(x) =>
// {return x * x;
// };

const squareArrow=(x) => x+x;
console.log(squareArrow(8));

const getFirstName = (name) =>{
  return   name.split(' ')[0];
}
console.log(getFirstName("Parteek Gupta"));

 const getFName = (name) => name.split(' ');

 console.log(getFirstName("Ritesh Rana"));
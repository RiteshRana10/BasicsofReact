class Person
{
constructor(name = 'Anonymous',age)
{
   this.fullName=name ;
   this.age = age || 0;
}
getGreeting()
{
    return `Hi, I am ${this.fullName}`;
}
getDescription()
{
    return `${this.fullName} is ${this.age} yeears old`
}
}

class Student extends Person
{
constructor(name, age, major)
{
    super(name, age);
this.major=major;
}
hasMajor()
{
    return !!this.major;
}
getDescription()
{
    let description = super.getDescription();
   if(this.hasMajor())
   {
    return description;
   }
}
}
class Traveler extends Person
{
    constructor(name,age,major,place)
    {
        super(name, age);
        this.place = place;
        this.name = name;
       
    }
    getGreeting(){
        let locations= super.getGreeting();
        return `Hi i am ${this.name}, visiting from ${this.place}`;
        
    }
       
    
}

const me = new  Traveler('Ritesh Rana',50,'computer science','Chandigarh');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());
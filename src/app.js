console.log('app.js is running');

// JSX = JavaScript XML

var app={
    title: 'TrickBay',
    subTitle:'Learn Share & Grow',
    name: 'Ritesh',
    age: 20,
   location: 'Chandigarh',
   options: ['one', 'two']

};

var template =(<div> <p>{app.title}</p>{(app.subTitle) && <p>{app.subTitle}</p> }
<ol>
<li>{app.name}</li>
<li>Learning React</li>
<li>Learning Java Script</li>
{app.options.length>0?<p>Here are your options</p>:<p>No Options</p>}
</ol>
</div>
);

function getLocation(abcLocation)
{
if(abcLocation)
{
    return<p> location: {abcLocation}</p>;
}

}

var templateTwo =(<div> <p>{app.title}</p><h5>{app.subTitle}</h5> 
    <ol>
    
    <li>{app.name? app.name:'None' }</li>
    <li>{app.age >=15 && <p>Age: {app.age}</p>}</li>
   
    {getLocation(app.location)}
    </ol>
    </div>
    );

//if statements
//ternary operator
//logical and operateor

var appRoot =document.getElementById('app');

ReactDOM.render(template, appRoot);
console.log('app.js is running');

// JSX = JavaScript XML

const app = {
    title: 'TrickBay',
    subTitle: 'Learn Share & Grow',
    name: 'Ritesh',
    age: 20,
    location: 'Chandigarh',
    options: []

};
const  onFormSubmit=(e)=>
{

e.preventDefault();
const option= e.target.elements.option.value;
if(option)
{
    app.options.push(option);
    e.target.elements.option.value="";
    renderArray();
}
}

const onMakeDecision=()=>
{
const randomNum = Math.floor(Math.random()*app.options.length);
let option = app.options[randomNum];
alert(option);
};

const onRemoveAll=()=>
{
    app.options=[];
    renderArray();
}

const renderArray=()=>
{
const template = (<div> <p>{app.title}</p>{(app.subTitle) && <p>{app.subTitle}</p>}
<button onClick={onRemoveAll}>Remove ALL !!</button>
<p>{app.options.length}</p> 
<button disabled={app.options.length===0} onClick={onMakeDecision}>What should i do </button>


<ol>
        <li>{app.name}</li>
        <li>Learning React</li>
        <li>Learning Java Script</li>
        {app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
    </ol>
<form onSubmit={onFormSubmit}>
<input type="text" name="option"/>
<button>Add Options</button>
</form>


</div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot)
};
renderArray();
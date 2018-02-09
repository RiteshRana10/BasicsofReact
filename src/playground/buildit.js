const appRoot = document.getElementById('app')

let visibilityFlag =false;
const textVisible= ()=>
{
    visibilityFlag = !visibilityFlag;
    <p>These are the some of the dumb question</p>
    visibility();
}
const visibility=()=>
{
const visible=(
<div> 
<h1>Visibility Toggle</h1>
<button onClick={textVisible}>{visibilityFlag ? 'Hide Details': 'Show Details'}</button>
{visibilityFlag && (<div>
    <p>This is wot i have</p>
    </div>)}
</div>
)
ReactDOM.render(visible, app);
};

visibility();
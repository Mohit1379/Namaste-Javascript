import React from 'react';
import ReactDOM from 'react-dom/client'

const Heading=()=> <h1>Hello React</h1>;
const Title = ()=>
    (
<div className='heading'><Heading/>
<h1>This is my tittle</h1>
</div>
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Title />);

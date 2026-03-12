import { useState } from "react";

export default function Checkin(){

const [visitor,setVisitor] = useState({})

return(

<div style={{padding:"40px"}}>

<h2>Visitor Check-in</h2>

<input
placeholder="Name"
onChange={(e)=>setVisitor({...visitor,name:e.target.value})}
/>

<br/><br/>

<input
placeholder="Phone"
/>

<br/><br/>

<input
placeholder="Purpose"
/>

<br/><br/>

<input
placeholder="Host"
/>

<br/><br/>

<button>Generate Visitor Pass</button>

</div>

)

}
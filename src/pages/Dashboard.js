export default function Dashboard(){

return(

<div style={{padding:"40px"}}>

<h2>Visitor Dashboard</h2>

<table border="1" cellPadding="10">

<thead>
<tr>
<th>Name</th>
<th>Purpose</th>
<th>Host</th>
<th>Status</th>
</tr>
</thead>

<tbody>

<tr>
<td>John Doe</td>
<td>Meeting</td>
<td>Manager</td>
<td>Checked In</td>
</tr>

<tr>
<td>Sarah</td>
<td>Interview</td>
<td>HR</td>
<td>Checked Out</td>
</tr>

</tbody>

</table>

</div>

)

}
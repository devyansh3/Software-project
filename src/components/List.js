import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'

let data = {
  1: 0,
  2: 0,
  3: 0
}

function List() {

  const vote = (e) => {
    data[e.target.value] += 1
  }
  
  return (
    <div>
      <h1 style={{textAlign:'center', marginTop: '1%'}}>ACM Elections</h1>
      <Table striped bordered hover variant="dark" style={{marginTop: '2%'}}>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Post</th>
      <th>Vote</th>
    </tr>
  </thead>
  <tbody>
    <tr  id={"1"}>
      <td id={"1"}>1</td>
      <td>Mark</td>
      <td>President</td>
      <td id="1"><button value="1" id="1" onClick={vote} >Vote Confirm</button></td>
    </tr>
    <tr id={"2"}>
      <td>2</td>
      <td>Jacob</td>
      <td>President</td>
      <td id = '2'><button value="2" id="2" onClick={vote}>Vote Confirm</button>
</td>
      
    </tr>
    <tr id={"3"}>
      <td>3</td>
      <td>Larry</td>
      <td>Secretary</td>
      <td id="3"><button value="3" id="3" onClick = { vote }>Vote Confirm</button></td>

      
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default List
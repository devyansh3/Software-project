import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Table} from 'react-bootstrap'


function List() {
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
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>President</td>
      <td>Vote Confirm</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>President</td>
      <td>Vote Confirm</td>
      
    </tr>
    <tr>
      <td>3</td>
      <td>Larry</td>
      <td>Secretary</td>
      <td>Vote Confirm</td>

      
    </tr>
  </tbody>
</Table>
    </div>
  )
}

export default List
import './pagestyles.css'
import React from 'react'
import {Dropdown, Button} from 'react-bootstrap'




  function Candidates() {

    
    
    return (
      <div className='mt-4 text-center w-100 ' >
      <form>
      <label>Enter candidate name:
        <input type="text" />
      </label>
      <br></br>

      <label>Position Standing for:
        <input type="text" />
      </label>

      <Dropdown>
  <Dropdown.Toggle variant="info" id="dropdown-basic">
    Select Election
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item href="#/action-1">ACM election</Dropdown.Item>
    <Dropdown.Item href="#/action-2">Mech election</Dropdown.Item>
    <Dropdown.Item href="#/action-3">Club Election</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>

<Button className='mt-2' type="submit">
              Submit
            </Button>




    </form>
      </div>
    )
  }

  
  export default Candidates;
  
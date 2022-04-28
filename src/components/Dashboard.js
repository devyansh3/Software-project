import React, { useState } from "react"
import {Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import { useEffect } from "react";
import List from './List'
import Card from './Card'


async function getUsers() {
  const usersRef = collection(db, "users");
  const usersData = await getDocs(usersRef);
  
  return usersData;
}
async function postUser(user) {
  try{
   let  user = {
      "name":"some",
      "age":20,
      "img":"url"
    }
    const usersRef = collection(db,"users");
    await setDoc(doc(usersRef),user);
    return 1;
  }catch(e){
    console.log(e)
  }
} 

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = getUsers()
      .then((res) => {
        res.docs.forEach((user) => {
          setUserData([...userData, user.data()]);
        });
      })
      .catch((err) => {
        console.log(err);
      });
      postUser()
      .then((res) => {
        console.log("success")
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    console.log(userData);
  }, [userData]);

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      {/* <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card> */}
      

      <div className="wrapper mt-5">
      <Card
        img="/acm1png.png"
        title="ACM-elections"
        description="Candidates : 5" 
        date="End date: 3rd may"
        
          route='/list'
      />

      <Card
        img='mech.jpg'
        title="Mech society"
        description="Candidates : 6" 
        date="End date: 2nd june"
        route='/mechanical'
      />

      <Card
        img='club.jpg'
        title="Club elections"
        description="Candidates : 7" 
        date="End date: 5th march"
        route='/club'
      />
    </div>

    <div className="w-100 text-center mt-3">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

     
     
     
    </>
  )
}

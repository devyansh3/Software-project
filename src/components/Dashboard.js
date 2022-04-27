import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import { db } from "../firebase"
import { collection, getDocs, setDoc, doc} from "firebase/firestore";
import { useEffect } from "react";


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
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>

     
      <Card>
        <Card.Body>
          <img style={{maxWidth: '50%', marginLeft: '25%' }} src="https://image.shutterstock.com/image-vector/female-candidate-avatar-tied-hairs-260nw-1088450453.jpg"/>
          <h2 style={{fontSize: '14px', textAlign: "center"}}><strong>ACM-Elections</strong></h2>
          <h3 style={{fontSize: '12px', textAlign: "center"}}>No of candidates:<string> 13</string></h3>
        </Card.Body>
      </Card>
     
    </>
  )
}

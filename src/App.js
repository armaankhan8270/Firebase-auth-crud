import "./App.css";
import Chat from "./Components/Chat";
import { auth, db, googleSignIn } from "./firebse-config";
import { useState, useEffect } from "react";
import Google from "./Components/Google";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./Components/SignOut";
import { collection, getDocs, addDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

function App() {
  const [users, setuser] = useState([]);
  const [users2, setuser2] = useState([]);
  const [send, setsend] = useState([]);
  const userCollectionRef = collection(db, "messages");
  const userCollectionRef1 = collection(db, "armaan");
  const createuser = async () => {
    await addDoc(userCollectionRef, { name: send });
    window.location.reload(false);
  };
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(userCollectionRef);
      console.log("..", data);
      setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('12',setuser.id)
    };
    getdata();
  }, []);
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(userCollectionRef1);
      console.log(".123.", data);
      setuser2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getdata();
  }, []);
  // const messagesRef = db.collection("messages");
  const [user] = useAuthState(auth);

  return (
    <div className="div">
      <Chat />
      <button style={{ color: "white" }} onClick={useEffect}>
        butttonnnn
      </button>
      {user ? <Google /> : <Chat />}
      <div
        style={{
          margin: "200px",
          backgroundColor: "whitesmoke",
          borderRadius: "20px",
          boxShadow: "20px 20px 20px ",
        }}
      >
        <button
          style={{ fontSize: "50px", borderRadius: "20px" }}
          onClick={createuser}
        >
          send
        </button>
        <input
          className="input-group-3"
          onChange={(e) => setsend(e.target.value)}
          type="text"
          placeholder="Name....."
          style={{
            fontSize: "60px",
            borderRadius: "20px",
            border: "2px solid",
          }}
        />
        {users.map((val, ind) => {
          return (
            <div key={ind} className="div">
              <div>
                <span
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "40px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {ind}
                  {val.text}
                </span>
                <h1>{users.id}</h1>
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "40px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {val.name}
                </span>
              </div>
            </div>
          );
        })}
        {users2.map((val, ind) => {
          return (
            <div className="div">
              <div>
                <span
                  style={{
                    backgroundColor: "white",
                    color: "black",
                    fontSize: "40px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  {val.name}
                </span>
                <span
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    fontSize: "40px",
                    borderRadius: "20px",
                    overflow: "hidden",
                  }}
                >
                  {" "}
                  {val.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
}

export default App;

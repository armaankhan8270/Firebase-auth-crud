import "./App.css";
import Chat from "./Components/Chat";
import { auth, db, googleSignIn } from "./firebse-config";
import { useState, useEffect } from "react";
import Google from "./Components/Google";
import { useAuthState } from "react-firebase-hooks/auth";
import SignOut from "./Components/SignOut";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";


function App() {
  const [users, setuser] = useState([]);
  const [users2, setuser2] = useState([]);
  const [send, setsend] = useState([]);
  const [Items, setItems] = useState([])
  const [number, setnumber] = useState(1)
  const userCollectionRef = collection(db, "messages");
  const userCollectionRef1 = collection(db, "armaan");

  const createuser = async () => {
    await addDoc(userCollectionRef, { name: send });
    // window.location.reload(false);
    setnumber(number+1)
  };
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(userCollectionRef);
      console.log("..", data);
      setuser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      console.log('12',setuser.id)
    };
    getdata();
  }, [number]);
  useEffect(() => {
    const getdata = async () => {
      const data = await getDocs(userCollectionRef1);
      console.log(".123.", data);
      setuser2(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getdata();
  }, [number]);
  // const messagesRef = db.collection("messages");
  const [user] = useAuthState(auth);
 const create=async(id)=>{
  const userdoc=doc(db,"messages",id)
 await deleteDoc(userdoc)
 setnumber(number+1)
 }
  return (
    <div className="div grid justify-center grid-col-2   ">
      <h1 className="-ml-[200px]">{`user info                   `}`</h1>
      
<div class="max-w-sm ml-[300px] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img class="rounded-t-lg ml-[40%] mt-4 h-20 bg-slate-800" src={localStorage.getItem("photo")} alt=""/>
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Name Of user:{localStorage.getItem("name")}</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Email Id:{localStorage.getItem("email")}.</p>
        {/* <a href="#" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a> */}
    </div>
</div>

      <Chat />
     
      {user ? <Google /> : <Chat />}
      <div className="bg-white shadow-xl text-black   p-4 text-center"  >
       
        <div className="flex  bg-gray-600">

        <input
          className="w-[1000px] outline-none focus:outline-none text-black bg-white border-2 text-xl p-4  rounded-lg "
          onChange={(e) => setsend(e.target.value)}
          type="text"
          placeholder="Name....."
          
        />
        <button onClick={createuser} className="text-2xl bg-cyan-400 p-2 text-ellipsis rounded-lg">Send</button>
        </div>
      
        <div className="grid grid-cols-1 w-[1000px] m-24 bg-slate-900 rounded-3xl">
        {users.map((val, ind) => {
          return (
            <div key={ind} className="div text-black ">
              <div>
                <h1 className="bg-white text-black shadow-2xl rounded-3xl p-2 w-1/2 m-2 "
                  
                >
                  {val.name}
                </h1>
                <button className="text-black text-3xl bg-white p-4  rounded-lg" onClick={()=>{
                  create(val.id)
                }}>Delete</button>

                {/* <h1  className="bg-white text-black shadow-2xl rounded-3xl p-4 m-4">{users.id}</h1> */}
                {/* <span
                   className="bg-white text-black shadow-2xl rounded-3xl p-4 m-4"
                >
                  {val.name}
                </span> */}
              </div>
            </div>
          );
        })}</div>
       
      </div>
      
    </div>
  );
}

export default App;

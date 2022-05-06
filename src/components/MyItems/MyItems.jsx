import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Items from "../Items/Items";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
 
  useEffect(() => {
    const getData = async () => {
        if(loading){
            return <p>Loading...</p>
        }
     if(user){
        const { data } = await axios.get(
            `http://localhost:5000/my-items?email=${user?.email}`,
            {
              headers: {
                authorization: `Bearer ${localStorage.getItem("AccessToken")}`,
              },
            }
          );
          setMyItems(data);
     }
    
    };
    getData();
  }, [user,loading]);
  if(loading){
    return <p>Loading..</p>
  }

  
  return (
    <>
      {
        user?.emailVerified ? <div className="pt-20 grid grid-cols-3 gap-4">
        {myItems.map(item  => <Items key={item._id} item={item}></Items>)}
        </div>
       : <div className="pt-20">
       <h1>Please verify your Email <a href="https://mail.google.com/" target="_blank">Verify Now!</a> </h1>
        </div>
      }
    </>
  );
};

export default MyItems;

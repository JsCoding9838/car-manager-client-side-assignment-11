import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { GridLoader } from "react-spinners";
import auth from "../../firebase.init";
import Items from "../Items/Items";

const MyItems = () => {
  const [user, loading, error] = useAuthState(auth);
  const [myItems, setMyItems] = useState([]);
  const [isReload,setIsReload] = useState(false);

  useEffect(() => {
    const getData = async () => {
       
     if(user){
        const { data } = await axios.get(
            `https://polar-plateau-07967.herokuapp.com/my-items?email=${user?.email}`,
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
  }, [user,isReload]);
  const deleteHandler = (id) => {
    const agree = window.confirm("are you sure? delete this item");
    if (agree) {
      fetch(`https://polar-plateau-07967.herokuapp.com/manage-inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            const deleted = data?.result?.deletedCount;
            if(deleted){
              setIsReload(!isReload)
            }
          } catch (err) {
            // console.log(err)
          }
         
        });
      }
    };

  if(loading){
    return  <div className="flex justify-center pt-[35vh] ">  <GridLoader size={10}/>
    </div>
  }
  if(error){
    return <p>error</p>
  }
  
  return (
    <>
      {
        user?.emailVerified ? <div className="pt-[65px] grid md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center gap-4">

        {myItems.map(item  => <Items key={item._id} deleteHandler={deleteHandler} item={item}></Items>)}

        </div>

       : <div className="pt-20">
            <h1  >Please verify your Email <a href="https://mail.google.com/" target="_blank">Verify Now!</a> </h1>
        </div>
      }

    </>
  );
};

export default MyItems;

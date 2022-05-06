
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useParams } from "react-router-dom";





const InventoryDetails = () => {
  const init = 0;
  const [selected , setSelected] = useState({})
  const [quan , setQuan] = useState(0)
  const [isLoading , setIsLoading] = useState(false)
  const { id } = useParams();
  
 
  useEffect(() => {

    fetch(`http://localhost:5000/add-inventory/${id}`)
    .then(res => res.json())
    .then(data => {
      setSelected(data)
     
     
      
    })
  },[id,isLoading])
  const updateQuan = (add, deleted) => {
    fetch(`http://localhost:5000/add-inventory/${id}?add=${add}&deleted=${deleted}`,{
      method: 'PUT',
     
    })
    .then(res => res.json())
    .then(data =>{
      if(data.error){

        return toast.error(data.error,{id:1})
      }
    })
  }
  const quantity =(event) =>{
    const quan =  event.target.value;
    if(quan){
      setQuan(quan )
    }
   
   
  }
  const addQuantity = ()=>{
    updateQuan(quan,0);
    setIsLoading(!isLoading);
  
  }
  
  
  const deleteQuantity = ()=>{
    updateQuan(init, quan)
    setIsLoading(!isLoading)
  }
  

  return (
   <>
   <div className="w-screen pt-16">
      <div className="w-full grid grid-cols-4 lg:px-24 ">
        <div>
          <div className="flex flex-col font-semibold  mt-8">
            <div
             
              className="flex items-center "
            > 
          <input onBlur={quantity}
                  className="border rounded px-3 py-1 mt-2 focus:outline-0"
                  type="text" name="quantity"
                  placeholder="add" required
                />
            
             
            </div>
            <div  className="flex items-center space-x-2 mt-7">
            <button onClick={addQuantity}
              type="submit"
              className="text-white  bg-sky-600 hover:bg-sky-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-500"
            >
            Add quantity
            </button>
            
            <button
            onClick={deleteQuantity}
              type="submit"
              className="text-white  bg-sky-600 hover:bg-sky-800  font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 duration-500"
            >
             Delivered
            </button>
           
            </div>
          </div>
        </div>

        <div className="">
        <div className=" px-8  mt-8 w-full h-[80vh]">


        <div className="flex flex-col items-center rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
          <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={selected.banner} alt=""/>
          <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{selected.title}</div>
              <p className="font-semibold">Id: <span className="font-normal">{selected?._id}</span> </p>
              <p className="font-semibold">Description: <span className="font-normal">{selected?.description}</span> </p>
              <p className="font-semibold">Price: <span className="font-normal">{selected?.price}</span> </p>
              <p className="font-semibold">Quantity: <span className="font-normal">{selected?.quantity}</span> </p>
              
              <p className="mb-3 font-semibold">Decription: <span className="font-normal">{selected?.description}</span></p>
          </div>
        </div>


            <Link to='/manage-inventory'
              type="submit"
              className="bg-sky-600 py-2  px-8 absolute right-28 text-white mt-4 rounded hover:bg-sky-800 duration-500"
            >
         Manage inventory
            </Link>
            </div>
          
        </div>
      </div>
    </div>
   
   </>
  );
};

export default InventoryDetails;

import React from 'react';
import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';

const Inventory = () => {
  const {inventorys} = useApi();
    return (
        <div className="md:px-20 md:py-10 my-8">
            <h1 className="text-3xl my-4 md:mb-5 lg:mb-8 text-center uppercase font-semibold">Our Inventory</h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 sm:grid-cols-1 gap-6">
                {inventorys.slice(0,6).map(inventory => <div key={inventory.id}> 
                    <div className="mg:hover:scale-105 lg:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p>
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={inventory.img} alt="" />
                        </p>
                        <div className="p-5">
                            <p>
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{inventory.name}</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">{inventory.description}</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">{inventory.suplierName}</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">{inventory.quantity}</span></p>
                                    </div>
                            </div>
                            <Link to={`/inventory/${inventory.id}`} className="flex  items-center justify-between">
                            <a href="/" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-2 duration-500">
                            Manage Stock
                                    <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </a>
                                <p className="text-xl font-semibold">$ {inventory.price}</p>
                            </Link>
                        </div>
                    </div>
                </div>)}
           </div>
        </div>
    );
};

export default Inventory;
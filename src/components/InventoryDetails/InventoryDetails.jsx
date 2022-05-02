import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import cardImg from "../../assets/img/header-img.png";



const InventoryDetails = () => {
  const { id } = useParams();
  console.log(id)
  
  
  

  return (
   <>
      <div className="flex flex-col md:flex-row  lg:flex-row md:gap-x-2 lg:gap-x-8">



        <div className="p-2 sm:p-8 md:p-3 lg:p-3 mb-4 mt-20 md:mt-20 lg:mt-20">
          <h3 className='text-center text-2xl sm:text-5xl lg:text-5xl mb-3 font-semibold md:mb-6'>Manage Section</h3>


          <div className='lg:p-1 grid md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8 md:gap-3 lg:gap-5'>
            


          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>
          <div className="lg:hover:scale-105 md:hover:scale-105 max-w-full bg-white rounded-lg border border-gray-300 hover:border-sky-500 duration-500 shadow-md  dark:bg-gray-800 dark:border-gray-700">
                        <p >
                            <img className="w-[90%] rounded-t-lg flex mx-auto pt-4"  src={cardImg} alt="" />
                        </p>
                        <div className="p-3 sm:p-6 md:p-3 lg:p-3">
                            <p >
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">John</h5>
                            </p>
                            <p className=" font-normal text-gray-700 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam qui aliquid laborum consequuntur, doloribus dolores ut iusto corrupti magnam!</p>
                            <div className="flex items-center py-2">
                                    <div className="">
                                        <p className="text-1xl font-bold">Supplier by : <span className="text-gray-700">josim</span></p>
                                        <p className='text-1xl font-bold'>Quantity : <span className="text-gray-700">10</span></p>
                                    </div>
                            </div>
                            <Link to='' className="flex  items-center justify-between">
                            <p  className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-sky-500 rounded-lg hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 hover:translate-x-1 duration-500">
                            Manage Stock
                                    <svg className="ml-2 mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </p>
                                <p className="text-xl font-semibold">$ 45</p>
                            </Link>
                        </div>
          </div>




          </div>
        </div>




        <div className='px-5 pb-6'>
          <div className="sticky top-24 flex flex-col  font-semibold  mt-8">
              <div className="flex items-center"> 
            <input className="border rounded px-3 py-1 mt-2 focus:outline-0" type="text" name="title" placeholder="add here"      required/>
              </div>
              <p  className="flex items-center space-x-2 mt-7">
              <button
                type="submit"
                className="text-white  bg-sky-500 hover:bg-sky-700 duration-500 font-medium rounded-full text-sm px-4 py-2 md:w-32 lg:py-2 lg:px-5 lg:w-32 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              Add quantity
              </button>
              
              <button
                type="submit"
                className="text-white  bg-sky-500 hover:bg-sky-700 duration-500 font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
              Delivered
              </button>
            
              </p>
            </div>
        </div>





      </div>
   </>
  );
};

export default InventoryDetails;

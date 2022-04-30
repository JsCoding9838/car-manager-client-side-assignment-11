import React from 'react';
import aboutimg from '../../assets/img/header-img.png';
import { FaCar } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";

const AboutWarehouse = () => {
    return (
        <div className=" border border-red-500 md:my-4">
        <div className='text-center mt-5 font-semibold'>
        <h3 className='text-3xl md:text-4xl lg:text-5xl'>About Us</h3>
        <p className='px-2 lg:px-60 md:px-40 text-1xl pt-3 leading-normal mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit distinctio perspiciatis placeat provident dicta odit, suscipit dolor, saepe fugit qui rem est deserunt dolorem fuga? Laboriosam dolorem odio est modi alias assumenda ducimus? Delectus quidem</p>
        </div>
        <div href="/" className="flex flex-col items-center md:gap-x-6 lg:gap-12 justify-evenly bg-white rounded-lg mx-auto shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 border border-green-700">

        

            <div className='border border-red-500 md:h-[450px] md:w-[50%] flex items-center justify-center'>
            <img className="object-cover w-full rounded-t-lg md:h-auto md:w-full md:rounded-none md:rounded-l-lg" src={aboutimg} alt="" />
            </div>



            <div className="p-4 leading-normal border border-green-700 md:h-[450px] md:w-[50%]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Inventory's Details 2022</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                <div className='grid md:grid-cols-2 gap-4 md:gap-16 mt-4 md:mt-20 border border-red-700'>
                    <div className='flex items-center font-semibold border border-red-500'>
                        <span className='text-6xl mx-3 text-[#0A66C2]'><FaCar/></span>
                        <span>
                            <p>Vehicles</p>
                            <p>387</p>
                        </span>

                    </div>
                    <div className='flex items-center font-semibold border border-red-500'>
                        <span className='text-6xl mx-3 text-[#1C3675]'><BsPersonFill/></span>
                        <span>
                            <p>Sellers</p>
                            <p>387</p>
                        </span>

                    </div>
                    <div className='flex items-center font-semibold border border-red-500'>
                        <span className='text-6xl mx-3 text-[#1C3675]'><FaUsers/></span>
                        <span>
                            <p>Users</p>
                            <p>387</p>
                        </span>

                    </div>
                    <div className='flex items-center font-semibold border border-red-500'>
                        <span className='text-6xl mx-3 text-[#1C3675]'><AiFillCar/></span>
                        <span>
                            <p>Featured</p>
                            <p>387</p>
                        </span>

                    </div>
                </div>
            </div>



        </div>
        </div>
    );
};

export default AboutWarehouse;
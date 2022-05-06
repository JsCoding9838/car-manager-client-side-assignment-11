import React from 'react';

const Items = ({item}) => {
    return (
        <div className="bg-green-500">
            <div className="bg-red-500 flex justify-center rounded-lg border shadow-md md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <div>
                    <img className="object-cover rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={item.banner} alt=""/>
                </div>
                <div className="flex flex-col justify-between p-4 leading-normal">
                    <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</p>
                    <p className="font-semibold">Id: <span className="font-normal">{item?._id}</span> </p>
                    <p className="font-semibold">Description: <span className="font-normal">{item?.description}</span> </p>
                    <p className="font-semibold">Price: <span className="font-normal">{item?.price}</span> </p>
                    <p className="font-semibold">Quantity: <span className="font-normal">{item?.quantity}</span> </p>
                    <p className="mb-3 font-semibold">Decription: <span className="font-normal">{item?.description}</span></p>
                </div>
            </div>
        </div>
    );
};

export default Items;
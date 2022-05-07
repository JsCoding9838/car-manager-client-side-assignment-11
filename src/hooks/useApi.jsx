import { useEffect, useState } from "react";

const useApi = () => {
  const [isReload, setIsReload] = useState(false);

  const [inventorys, setInventorys] = useState([]);
  //load all product from server
  useEffect(() => {
    fetch("http://localhost:5000/add-inventory")
      .then((res) => res.json())
      .then((data) => setInventorys(data));
  }, [isReload]);

  //delete -handler --remove item in client side
  const deleteHandler = (id) => {
    const agree = window.confirm("Are you sure! for delete this item");
    if (agree) {
      fetch(`http://localhost:5000/manage-inventory/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          try {
            const deleted = data?.result?.deletedCount;
            if (deleted) {
              const collection = inventorys.filter(
                (inventory) => inventory.id !== id
              );
              setInventorys(collection);
              setIsReload(!isReload);
            }
          } catch (err) {
            console.log(err);
          }
        });
    }
  };

  //searchHandler for manage all inventory
  const searchHandler = (event) => {
    const searchValue = event.target.value;
    if (event.key === "Enter" && searchValue) {
      fetch(`http://localhost:5000/search?title=${searchValue}`)
        .then((res) => res.json())
        .then((data) => {
          setInventorys(data);
          setIsReload(!isReload);
        });
    }
  };

  return {
    inventorys,
    deleteHandler,
    searchHandler,
  };
};

export default useApi;

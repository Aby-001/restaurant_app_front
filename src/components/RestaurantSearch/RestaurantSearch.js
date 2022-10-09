import React, { useState } from 'react';

const RestaurantSearch = () => {

              const [search, setSearch]= useState("");

              const searchHandler = (value)=>{
                            fetch("http://localhost:3000/restaurant?q="+value).then((data)=>{
                                          data.json().then((resp)=>{setSearch(resp)})
                            })
              }
              console.log(search);
  return (
    <div>
      <h1>RestaurantSearch</h1>
      <input type="text" onChange={(e)=>searchHandler(e.target.value)}/>
              <div>
                            {
                                          search && <div>
                                                        {search.map(item=><p key={item.id}>{item.name}</p>)}
                                          </div>
                            }
              </div>
    </div>
  );
}

export default RestaurantSearch;

import React, {useState} from 'react';

const RestaurantCreate = () => {
 
              const [name, setName] =useState(""); 
              const [email, setEmail] =useState(""); 
              const [rating, setRating] =useState(""); 
              const [address, setAddress] =useState(""); 

              const addRestaurantHandler=()=>{
                           const restData={
                                          name,
                                          email,
                                          rating,
                                          address
                            }

                            // console.log("resData",restData);

                            fetch('http://localhost:3000/restaurant',{
                                          method:'POST',
                                          headers:{
                                                        'Content-Type' : 'application/json'
                                          },
                                          body: JSON.stringify(restData)
                            }).then((result)=>{
                                          result.json().then((resp)=>{
                                                        alert('Restaurant added susscessfully')
                                                        // console.log("api res", resp);
                                          })
                            })
              }

  return (
    <div>
      <h1>RestaurantCreate</h1>
      <div>
              <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder='Restaurant Name'/> <br/><br/>

              <input value={email} onChange={(event)=>setEmail(event.target.value)} placeholder='Restaurant Email'/> <br/><br/>

              <input value={rating} onChange={(event)=>setRating(event.target.value)} placeholder='Restaurant Rating'/> <br/><br/>

              <input value={address} onChange={(event)=>setAddress(event.target.value)} placeholder='Restaurant Address'/> <br/><br/>



              <button onClick={addRestaurantHandler}>Add Restaurant</button>

      </div>
    </div>
  );
}

export default RestaurantCreate;

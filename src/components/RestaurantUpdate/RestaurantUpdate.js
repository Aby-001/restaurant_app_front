import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const RestaurantUpdate = () => {

  const params = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState("");
  const [address, setAddress] = useState(" ");

  console.log(params.id);


  useEffect(() => {
    fetch('http://localhost:3000/restaurant/' + params.id).then((res) => {
      res.json().then((result) => {
        console.log(result);
        setName(result.name);
        setEmail(result.email);
        setRating(result.rating);
        setAddress(result.address)
      })
    })
  }, [params])

  const updateRestaurantHandler = () => {

    const restData = {
      name,
      email,
      rating,
      address
    }

    // console.log("resData",restData);

    fetch('http://localhost:3000/restaurant/' + params.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(restData)
    }).then((result) => {
      result.json().then((resp) => {
        alert('Restaurant updated susscessfully')
        // console.log("api res", resp);
      })
    })

    navigate('/list')
  }


  return (
    <div>
      <h1>RestaurantUpdate</h1>
      <div>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)} placeholder='Restaurant Name' /> <br /><br />

        <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder='Restaurant Email' /> <br /><br />

        <input value={rating} onChange={(event) => setRating(event.target.value)} placeholder='Restaurant Rating' /> <br /><br />

        <input value={address} placeholder="Restaurant Address" onChange={(event) => setAddress(event.target.value)} />
        <br /><br />

        <button onClick={updateRestaurantHandler}>Add Restaurant</button>

      </div>
    </div>
  );
}

export default RestaurantUpdate;

import React, { useEffect, useState } from 'react';
import classes from "./RestaurantList.module.css";
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"



const RestaurantList = () => {
  const [list, setList] = useState([]);

  const fetchList = async () => {
    let res = await fetch("http://localhost:3000/restaurant", {
      method: 'GET'
    })
    let restaurant = res.json().then(data => setList(data));


  }
  useEffect(() => {
    fetchList()

  }, [])

  const deleteHandler = (id) => {
    if (window.confirm("Are you Sure you want to delete")) {

      fetch('http://localhost:3000/restaurant/' + id, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result) => {
        result.json().then((resp) => {
          alert('Restaurant deleted')
          fetchList()
          // console.log("api res", resp);
        })
      })



    }
  }

  //   console.log(list);

  return (
    <>
      <h1>RestaurantList</h1>
      {
        list.length > 0 ?
          <div>
            <Table striped bordered hover>
              <thead>

                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Rating</th>
                  <th>Address</th>
                  <th>Operations</th>

                </tr>
              </thead>
              <tbody>
                {list.map((item, i) =>
                  <tr key={item.id} >
                    <td>{item.id}</td>
                    <td> {item.name}</td>
                    <td> {item.email}</td>
                    <td> {item.rating}</td>
                    <td> {item.address}</td>
                    <td>
                      <Link to={"/update/" + item.id}      >Update</Link>
                      <span onClick={() => deleteHandler(item.id)}>Del</span>
                    </td>
                  </tr>)}
              </tbody>
            </Table>
          </div> :
          <p>Please wait...</p>
      }
    </>
  );
}

export default RestaurantList;

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home/Home'
import RestaurantList from '../components/RestaurantList/RestaurantList'
import RestaurantCreate from '../components/RestaurantCreate/RestaurantCreate'
import RestaurantSearch from '../components/RestaurantSearch/RestaurantSearch'
import RestaurantDetails from '../components/RestaurantDetails/RestaurantDetails'
import RestaurantUpdate from '../components/RestaurantUpdate/RestaurantUpdate'
import Login from '../Forms/Login'
import Layout from '../Layout/Layout'

const NavigationRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/list" element={<RestaurantList />} />
      <Route exact path="/create" element={<RestaurantCreate />} />
      <Route exact path="/search" element={<RestaurantSearch />} />
      <Route exact path="/details" element={<RestaurantDetails />} />
      <Route exact path="/update/:id" element={<RestaurantUpdate />} />
      <Route exact path="/login" element={<Login />} />
    </Routes>

  )
}

export default NavigationRoutes
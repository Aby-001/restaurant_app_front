import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home/Home'
import RestaurantList from '../components/RestaurantList/RestaurantList'
import RestaurantCreate from '../components/RestaurantCreate/RestaurantCreate'
import RestaurantSearch from '../components/RestaurantSearch/RestaurantSearch'
import RestaurantDetails from '../components/RestaurantDetails/RestaurantDetails'
import RestaurantUpdate from '../components/RestaurantUpdate/RestaurantUpdate'
import Login from '../Forms/Login'

const NavigationRoutes = () => {
  return (
              
               <Switch>
                            <Route  path="/" exact component={                    Home
                            } />
                            {/* </Route> */}
                            <Route path="/list" component={RestaurantList} />
                                                        {/* <RestaurantList/> */}
                            {/* </Route> */}
                            <Route path="/create" component={RestaurantCreate} />
                                                        {/* <RestaurantCreate/> */}
                            {/* </Route> */}
                            <Route path="/search" component={RestaurantSearch} />
                                                        {/* <RestaurantSearch/> */}
                            {/* </Route> */}
                            <Route path="/details" component={RestaurantDetails}/>
                                                        {/* <RestaurantDetails/> */}
                            {/* </Route> */}
                            <Route path="/update/:id" component={RestaurantUpdate} />
                                                        {/* <RestaurantUpdate/> */}
                            {/* </Route> */}
                            <Route path="/login"component={Login} />
                                          {/* <Login/> */}
                            {/* </Route> */}
               </Switch>
    
  )
}

export default NavigationRoutes
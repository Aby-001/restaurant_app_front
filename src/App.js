import './App.css';
import Layout from './Layout/Layout';
// import { Route, Switch } from 'react-router-dom'
// import Home from './components/Home/Home'
// import RestaurantList from './components/RestaurantList/RestaurantList'
// import RestaurantCreate from './components/RestaurantCreate/RestaurantCreate'
// import RestaurantSearch from './components/RestaurantSearch/RestaurantSearch'
// import RestaurantDetails from './components/RestaurantDetails/RestaurantDetails'
// import RestaurantUpdate from './components/RestaurantUpdate/RestaurantUpdate'
// import MainNavigation from './Layout/MainNavigation';
import NavigationRoutes from './routes/IndexRoutes';
import { BrowserRouter } from "react-router-dom"

function App() {
  return (

    <BrowserRouter>
      <Layout>
        <NavigationRoutes />
      </Layout>
    </BrowserRouter>


  );
}

export default App;

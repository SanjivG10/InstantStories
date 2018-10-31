import React from 'react'
import  {Scene,Router} from 'react-native-router-flux'
//
import Login from './login'
import SignUp from './signUp'
import Home from './HomePage/home'

import CustomNavBar from './HomePage/customNavbar'

class AllRoutes extends React.Component
{
  render()
  {
    return(
      <Router>
        <Scene key="root">

        <Scene initial key= "main_home" hideNavBar>
          <Scene hideNavBar= {false} key="home" component={Home} title= "Home" navBar={CustomNavBar}  />
        </Scene>

        <Scene  key="login" component={Login}  title= "Login" />
        <Scene   key="signUp" component={SignUp}  title= "SignUp"  />



        </Scene>


      </Router>
    )
  }
}

export default AllRoutes

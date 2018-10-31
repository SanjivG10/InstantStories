import React from  'react'
import {Text, View, Dimensions,TouchableOpacity} from 'react-native'
import {TextInput, Screen, Image, Button,Title, NavigationBar , Icon } from '@shoutem/ui'

import {Actions} from 'react-native-router-flux'

import firebase from 'firebase'

import Login from './../login'
import ListViewDay from './listViewForDay'
import UserInfo from './UserInfoView'
import TopUsersPost from './topUsersPost'
import Spinner from './../spinner'


const height = Dimensions.get('window').height;

class HomePage extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state= {
      user: "notFetched",
      data: null
    }
  }

  componentWillMount()
  {
    firebase.auth().onAuthStateChanged(user => {
      var oldProperties =  {...this.state}
      oldProperties.user = user
      console.warn(user)
      this.setState(oldProperties)
    })
  }



  render() {


    switch (this.state.user) {
      case "notFetched":
         return ( <Spinner /> )
      case null:
          Actions.login({type: 'reset'})
      default:
          console.warn("LOGGED IN")
    }

    return(
      <View>

        <ListViewDay />

        <UserInfo />

        <TopUsersPost />

      </View>
    )
  }
}

export default HomePage

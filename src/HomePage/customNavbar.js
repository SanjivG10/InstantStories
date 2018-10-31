import React from 'react'
import {Text,View,TouchableOpacity,Image, Alert} from 'react-native'
import {Actions} from 'react-native-router-flux'

import firebase from 'firebase'


const styles= {
  navbarStyle: {
    flexDirection: 'row'
  },
  navBarItem: {
    flex: 1,
    justifyContent: 'center'
  }
}

class CustomNavBar extends React.Component
{


  logoutUser()
  {
    firebase.auth().signOut().then(function() {
        Actions.login({type: 'reset'})
    }, function(error) {
      console.warn("Could not log out", error.message);
    });
  }

  alertOpen()
  {
    Alert.alert(
      'Upload your photo',
      'Choose photo from Gallery or Camera',
      [
        {text: 'Camera', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
        {text: 'Gallery', onPress: () => console.log('OK Pressed')},
      ],
      { cancelable: true }
    )
  }

  renderLeft() {
        return (
          <TouchableOpacity onPress={() =>  this.logoutUser()  } style={[styles.navBarItem, { paddingLeft: 10 }]}>
            <Image
              style={{ width: 30, height: 50 }}
              resizeMode="contain"
              source={require('./../logout.png')}
            />
          </TouchableOpacity>
        );

    }

  renderRight()
  {
    return(
      <TouchableOpacity style={{ paddingRight: 10 }} onPress= {  ()=> this.alertOpen()   }   >
          <Image style={{ width: 30, height: 50 }} resizeMode="contain" source={require('./../plus.png')}  />
        </TouchableOpacity>
    )
  }


  render()
  {
    return(
      <View style= {styles.navbarStyle}>
        {this.renderLeft()}
        {this.renderRight()}
      </View>
    )
  }




}

export default CustomNavBar

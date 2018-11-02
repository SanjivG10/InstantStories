import React from 'react'
import {Text} from 'react-native'

import {TextInput, Screen, Image, Button,Title, NavigationBar, TouchableOpacity } from '@shoutem/ui'
import {Actions} from 'react-native-router-flux'

// firebase
import firebase from 'firebase'

// selfmade Component
import Home from './HomePage/home'
import Spinner from './spinner'
import {width,height} from './config'

const styles= {
  textInputStyle: {
    width: width,
    elevation: 2 ,
    marginTop: 10,
    marginLeft: 10

  },
  screenStyle: {
    backgroundColor: '#FFF'
  },

  imageStyle: {
    marginTop: 85,
    backgroundColor: '#FFF',
    alignSelf: 'center',
    marginBottom: 30
  },
  loginButtonStyle: {
    alignSelf: 'flex-end',
    marginRight: 20,
    backgroundColor: '#FFF',
    marginTop: 30,
    padding: 10
  },
  loginTextStyle: {
    textSize: 20
  },
  errorTextStyle: {
    color: 'red',
    alignSelf: 'center',
    fontSize: 16
  },
  signUpTextStyle: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 30,
    textAlign: 'center',
    alignSelf: 'center',
    backgroundColor: '#e5e5e5'
  }
}


class SignUp extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state = {
      error: '',
      email: '',
      password: '',
      re_password: '',
      isLoading: false,
      user : undefined
    }
  }



  setEmailText(email)
  {
    this.setState({
      email
    })
  }

  setPasswordText(password)
  {
    this.setState({
      password
    })
  }

  setRePasswordText(re_password)
  {
    this.setState({
      re_password
    })
  }



//firebase database saving
  saveDatabase(userID)
  {
    var currRef = this;
     firebase.database().ref('users/' + userID).set({
     username: this.state.username,
     email: this.state.email,
     password: this.state.password
     }, function(error) {
       if (error) {
         currRef.setState({
           error : error.message,
           isLoading: false
         })
         return false
       }
       else {
         Actions.main_home({user: this.state.user})
         return true
       }
     });
  }

  startSignUp()
  {

    this.setState({
      isLoading: true,
      error: ''
    })

    if (this.state.password===this.state.re_password)
    {
      let currRef = this;
      firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then(
          ()=> {
            const user = firebase.auth().currentUser;
            const userId = user.uid;

            this.setState({
              user
            })

            if(this.saveDatabase(userId))
              {
                Actions.main_home({user: this.state.user})
              }
          }
      ).catch(
        (error)=>{
          this.setState({
            isLoading: false,
            error: error.message
          })
        }
      )
    }

    else
    {
      this.setState({
        isLoading: false,
        error: 'Password do not match!'
      })
    }

  }

  render()
  {
    return(

       this.state.isLoading ?
          <Spinner /> :

            <Screen style= {styles.screenStyle}>

              <Image
                styleName="small"
                style= {styles.imageStyle}
                source={require('./icons/boy.png')}
              />


              <TextInput
                style= {styles.textInputStyle}
                placeholder={'Email'}
                onChangeText= { (text)=> { this.setEmailText(text) } }
                value={this.state.email}
              />

              <TextInput
                placeholder={'Password'}
                style= {styles.textInputStyle}
                secureTextEntry
                onChangeText= { (text) =>  {this.setPasswordText(text) } }
                value={this.state.password}
              />

              <TextInput
                placeholder={'Confirm Password'}
                style= {styles.textInputStyle}
                secureTextEntry
                onChangeText= { (text) =>  {this.setRePasswordText(text) } }
                value={this.state.re_password}
              />

              <Button style= {styles.loginButtonStyle} styleName="secondary" onPress = { () => this.startSignUp()}>
                <Text style= {styles.loginTextStyle} >Sign Up</Text>
              </Button>


              {
                this.state.error ?
                <Text style= {styles.errorTextStyle}>
                  {this.state.error}
                </Text>  :
                null

              }

              <TouchableOpacity onPress={() => { Actions.login({type: "reset"}) }} style= {styles.signUpTextStyle}>
                <Text >
                  Already have an account?
                </Text>
              </TouchableOpacity>


            </Screen>
          )
  }
}

export default SignUp

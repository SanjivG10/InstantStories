import React from 'react'
import {Text, Dimensions,TouchableOpacity} from 'react-native'
import {TextInput, Screen, Image, Button,Title, NavigationBar } from '@shoutem/ui'
import {Actions} from 'react-native-router-flux'

//firebase
import firebase from 'firebase'


//selfmade Component
import Home from './HomePage/home'
import Spinner from './spinner'
import {width} from './config'




const styles= {
  screenStyle: {
    backgroundColor: '#FFF'
  },

  textInputStyle: {
    width: width,
    elevation: 2 ,
    marginTop: 10,
    marginLeft: 10

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
    fontSize: 16,
    marginTop: 20,
    marginLeft: 20
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

class Login extends React.Component
{
  constructor(props) {
    super(props)
  }

  state = {
    error: '',
    email: '',
    password: '',
    isLoading: false,
    user: undefined
  }

  componentWillMount()
  {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({
        user
      })
    })
  }


  startLoggingIn(email, password){

    this.setState({
      isLoading: true
    })

    firebase.auth().signInWithEmailAndPassword (email,password).then(
        ()=> Actions.main_home()
    ).catch((error)=>{
      this.setState({
        isLoading: false,
        error : error.message
      })
    })
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

  render()
  {

    if (this.state.user)
    {
      Actions.home({user: this.state.user})
    }

    return(

      this.state.isLoading ?
         <Spinner /> :

      <Screen style= {styles.screenStyle}>

        <Image
          styleName="small"
          style= {styles.imageStyle}
          source={require('./icons/lock.png')}
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
          onChangeText= { (text) =>  {this.setPasswordText(text) } }
          value={this.state.password}
          secureTextEntry

        />

        <Button style= {styles.loginButtonStyle} styleName="secondary" onPress = { () => this.startLoggingIn( this.state.email, this.state.password )} >
          <Text style= {styles.loginTextStyle} >Login</Text>
        </Button>


        { this.state.error ?

          <Text style= {styles.errorTextStyle}>
            {this.state.error}
          </Text>: null

        }

        <TouchableOpacity onPress={() => { Actions.signUp() }} style= {styles.signUpTextStyle}>
          <Text >
            Don't have an account?
          </Text>
        </TouchableOpacity>


      </Screen>

    )
  }
}

export default Login

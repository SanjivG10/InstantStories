import React from 'react'
import {Text,View,TextInput} from 'react-native'
import {Button} from '@shoutem/ui'

//self made compnents
import Spinner from './spinner'

//firebase
import firebase from 'firebase'

class Login extends React.Component
{

  constructor(props)
  {
    super(props);
    this.state= {
      email: '',
      password: '',
      error: '',
      isLoading: false
    }
  }

  componentWillMount()
  {
    console.warn("I am in component wil Mount");
  }

  setEmail(email)
  {
    this.setState({
      email
    })
  }

  setPassword(password)
  {
    this.setState({
      password
    })
  }

  setError(error)
  {
    this.setState({
      error
    })
  }

  logInEmailAndPassword()
  {
    console.warn(this.state.email + this.state.password);
  }

  render()
  {
    console.warn("I am in render section")
    return(

         !this.state.isLoading ?
            <View>
              <TextInput
                placeholder={'Email'}
                onChangeText = { (email)=> this.setEmail(email)}
                value= {this.state.email}
              />

              <TextInput
                placeholder={'Password'}
                secureTextEntry
                onChangeText= {(password)=>this.setPassword(password)}
                value= {this.state.password}
              />

              { this.state.error ?
                <Text>
                  {this.state.error}
                </Text>:
                null
              }

              <Button onPress= {()=> {this.logEmailAndPassword() }} >
                <Text> Login </Text>
              </Button>
              </View>
            :
        <Spinner />


    )
  }
}
export default Login

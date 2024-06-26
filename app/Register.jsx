import React from 'react'
import { Component } from 'react'
import {View, Button, TextInput} from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc,setDoc } from 'firebase/firestore';
export class Register extends Component{
    constructor(props){
        super(props);
        this.state={
            email: '',
            password: '',
            name:''
        }
        this.onSignUp=this.onSignUp.bind(this)
    }
    onSignUp() {
        const { email, password, name } = this.state;
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            setDoc(doc(db, 'users', auth.currentUser.uid), {
                name,
                email
              });
          })
          .catch((error) => {
            console.error(error);
          });
      }
    render()
    { return (
        <View>
            <TextInput
            placeholder='name'
            onChangeText={(name)=>this.setState({name})}/>
             <TextInput
            placeholder='email'
            onChangeText={(email)=>this.setState({email})}/>
             <TextInput
            placeholder='password'
            secureTextEntry={true}
            onChangeText={(password)=>this.setState({password})}/>
            <Button onPress={this.onSignUp}
            title='Sign Up'/>
        </View>
      )}
 
}

export default Register
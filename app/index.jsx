import { Text, View,Button,Pressable } from "react-native";
import { Link } from "expo-router";
import { Component } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
class Index extends Component{
  constructor(props){
    super(props);
    this.state={
      loaded:false,
    }
  }
  componentDidMount(){
    onAuthStateChanged(auth,(user)=>{
      if(!user){
        this.setState(
          {
            loggedIn: false,
            loaded: true
          }
        )
      } else {
        this.setState(
          {
            loggedIn: true,
            loaded: true
          }
        )
      }
    })
  }
 
  render(){
    const {loggedIn,loaded}=this.state;
    if (!loaded){
      <View>
        <Text>Loading</Text>
      </View>
    }if(!loggedIn){
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
         <Link href="/Register" asChild>
          <Button title="Register"/>
        </Link>
        <Link href="/Login" asChild>
        <Button
          title="Login"
        
        />
        </Link>
      </View>
      );
    }
    return(
      <View>
        <Text>User is logged in</Text>
      </View>
    )
    
  
  }
}
export default Index
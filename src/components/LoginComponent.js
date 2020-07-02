import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    FormLabel,
    TextInput,
    TouchableOpacity
} from 'react-native';


export default class LoginApp extends Component {

  constructor(props){
     super(props);
     this.state={
       email:'',
       password:'',
       isLoggedIn: false
     }
   }


   render(){
     return(
       <View style={{flex:1}}>
         <TextInput autoCapitalize="none" keyboardType="email-address" style={{marginTop:200,marginHorizontal:40,height:40}} placeholder="Enter email" value={this.state.email} onChangeText={email => this.setState({email})}/>
         <TextInput autoCapitalize="none" secureTextEntry style={{marginTop:20,marginHorizontal:40,height:40}} placeholder="Enter password" value={this.state.password} onChangeText={password => this.setState({password})}/>
         <TouchableOpacity onPress={() => this.props.login(this.state.email, this.state.password, this.state.isLoggedIn)}>

           <Text style={{marginTop:20,color:'black',textAlign:'center'}}>
             Login
           </Text>
         </TouchableOpacity>
       </View>
     )
   }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

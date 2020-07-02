import * as Actions from '../actions/ActionTypes';
import { Alert } from 'react-native';
import {checkValidUser} from '../services/user_api';

const UserReducer = (state = {isLoggedIn : false} ,action) => {
    switch (action.type){
        case Actions.VALIDATE_USER:
          {
            if(checkValidUser(action.payload.email, action.payload.password)) {
              Alert.alert('Login successful');
                  return { ...state,
                      isLoggedIn: true
                  };
              }else {
                Alert.alert('Wrong credentials. Please try again');
                return state;
              }
          }
      
        default:
            return state;
    }
}
export default UserReducer;

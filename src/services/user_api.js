//import firestore from '@react-native-firebase/firestore';

export const checkValidUser = async (email, password) => {
    //const users = firestore().collection('users');
    if(email == "admin@admin.com" && password == "admin@123"){
        return true;
    }
    else{
        return false;
    }
}

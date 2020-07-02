import { connect } from 'react-redux';

import * as Actions from './ActionTypes';
import LoginComponent from '../components/LoginComponent';


const mapStateToProps = (state) => ({
  isLoggedIn:state.isLoggedIn,
  email: state.email,
  password: state.password
});

const mapDispatchToProps = (dispatch) => ({
    validateLogin:(email,password,isLoggedIn) => dispatch({type:Actions.VALIDATE_USER, payload: {email:email, password:password, isLoggedIn: isLoggedIn}})
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

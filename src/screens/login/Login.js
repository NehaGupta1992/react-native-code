import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validateLogin } from '../../actions/UserAction';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    }
  }

	render() {
		return(
			<View style={styles.container}>
        <Text h4>Student Login</Text>
        <FormLabel>Enter your Email</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ email: text })}
        />
        <FormLabel>Password</FormLabel>
        <FormInput
          onChangeText={text => this.setState({ password: text })}
        />
        <Button
          onPress={this.handleSubmit}
          buttonStyle={[{ marginBottom: 5, marginTop: 5 }]}
          title="Login"
        />
      </View>
    )
  }

  handleSubmit() {
    const { user } = this.state;
    this.props.onLogin({ user }); 
	}
}

const mapStateToProps = state => ({
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  onLogin: (user) => {
    dispatch(validateLogin(user));
  },
});


export default connect(mapStateToProps, mapDispatchToProps) (Login);

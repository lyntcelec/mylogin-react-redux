import React from 'react';
// import PropTypes from 'prop-types';
import style from './Login.module.scss';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { Form, Button } from 'react-bootstrap';
import { UserLogin } from '../../actions/user';

class Login extends React.Component {
  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null
    };
  }

  handleLogin = async () => {
    const data = {
      "email": this.state.email,
      "password": this.state.password
    }
    this.props.UserLogin(data)
  }

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }

  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className={style.root}>
        <Form className={style.mainform}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmail}/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" onChange={this.handlePassword}/>
          </Form.Group>
          <Button variant="primary" onClick={this.handleLogin}> Login </Button>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  };
}

const mapDispatchToProps = ({
  UserLogin: UserLogin
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));


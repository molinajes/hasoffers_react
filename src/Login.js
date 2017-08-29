import React, { Component } from 'react';
import ApiForm from './ApiForm.js';
import Signup from './Signup.js';
import {Button, Input, Row, Col, Preloader} from 'react-materialize';
import './App.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      error: '',
      isAuthenticated: 0
    };
  }

  handleChange(field, value) {
    this.setState(Object.assign({},
      this.state,
      {
        [field]: value
      }
    ));
  }

  countdown(x) {
    this.setState(Object.assign({},
        this.state,
        {
            isAuthenticated: x
        }
    ))
  }

  handleSubmit() {
    if (!this.state.email || !this.state.password) {
        this.setState(
            Object.assign({},
                this.state,
                {error: 'Please fill account details'}
            )
        );

        return false;
    }

    if (this.state.email === 'test' && this.state.password === 'test') {
        this.setState(
            Object.assign({},
                this.state,
                {isAuthenticated: 1}
            )
        );
    } else {
        this.setState(
            Object.assign({},
                this.state,
                {
                    error: 'Wrong credentials!',
                    email: '',
                    password: ''
                }
            )
        );
    }
  }

  render() {
    if (this.state.isAuthenticated === 0) {
        return (
            <Row style={{margin: '100px'}}>
                <Col s={2} offset='s5'>
                    <Input
                        s={12}
                        label='Email address'
                        type="email"
                        name="email"
                        value={this.state.email}
                        onChange={(e) => this.handleChange('email', e.target.value)}
                    />

                    <Input
                        s={12}
                        label='Password'
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={(e) => this.handleChange('password', e.target.value)}
                    />
                    
                    <Row>
                        <Col>
                            <Button waves='light' onClick={() => this.handleSubmit()}>
                                Login
                            </Button>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            Don't have account?
                            <span style={{color: '#039be5', textDecoration: 'none', cursor: 'pointer'}} onClick={() => this.countdown(-1)}> Register</span>
                        </Col>
                    </Row>
                    
                    <Row>
                        <Col>
                            {this.state.error}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    } else if (this.state.isAuthenticated === 1) {
        setTimeout(() => this.countdown(2), 3000);

        return (
            <div style={{
                width: '100px',
                height: '100px',
                position: 'absolute',
                top:0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
            }}>
		        <Preloader size='small'/>
            </div>
        );
    } else if (this.state.isAuthenticated === 2) {
        setTimeout(() => this.countdown(3), 1500);

        return (
            <div style={{
                width: '300px',
                height: '50px',
                position: 'absolute',
                top:0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
            }}>
		        <h5>Success! You've made it...</h5>
            </div>
        );
    } else if (this.state.isAuthenticated === 3) {
        return (
            <ApiForm />
        );
    } else if (this.state.isAuthenticated === -1) {
        return (
            <Signup onSubmit={() => this.countdown(0)} />
        );
    }
  }
}

export default Login;

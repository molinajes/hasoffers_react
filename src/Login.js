import React, { Component } from 'react';
import ApiForm from './ApiForm.js';
import {Button, Input, Row, Col, Preloader, Icon} from 'react-materialize';
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

  countdown() {
    this.setState(Object.assign({},
        this.state,
        {
            isAuthenticated: this.state.isAuthenticated + 1
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
                            {this.state.error}
                        </Col>
                    </Row>
                </Col>
            </Row>
        );
    } else if (this.state.isAuthenticated === 1) {
        setTimeout(() => this.countdown(), 3000);

        return (
            <div style={{
                width: '100px',
                height: '100px',
                marginLeft: '-50%',
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
        setTimeout(() => this.countdown(), 1500);

        return (
            <div style={{
                width: '100px',
                height: '100px',
                marginLeft: '-50%',
                position: 'absolute',
                top:0,
                bottom: 0,
                left: 0,
                right: 0,
                margin: 'auto',
            }}>
		        <h5>Success!</h5>
            </div>
        );
    } else if (this.state.isAuthenticated === 3) {
        return (
            <ApiForm />
        );
    }
  }
}

export default Login;

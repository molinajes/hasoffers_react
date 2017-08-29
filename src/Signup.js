import React, { Component } from 'react';
import {Button, Input, Row, Col} from 'react-materialize';
import Card from './Card.js';
import './App.css';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      account_type: 'Publisher',
      company_name: '',
      primary_url: '',
      first_name: '',
      last_name: '',
      email: '',
      confirm_email: '',
      contact_type: 'Skype',
      contact_id: '',
      username: '',
      password: '',
      confirm_password: '',
      answer: '',
      terms: 'false'
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

  handleSubmit() {
    if (!this.state.company_name || 
        !this.state.first_name ||
        !this.state.last_name ||
        !this.state.email ||
        !this.state.confirm_email ||
        !this.state.contact_type ||
        (this.state.contact_type && !this.state.contact_id) ||
        !this.state.username ||
        !this.state.password ||
        !this.state.confirm_password ||
        !this.state.terms
    ) {
        this.setState(
            Object.assign({},
                this.state,
                {error: 'Please fill all required fields!'}
            )
        );

        return false;
    }

    this.props.onSubmit();
  }

  render() {
    return (
        <Row style={{margin: '50px'}}>
            <Col s={4} offset='s4'>
                <h4 style={{textAlign: 'center'}}>Create Your Account</h4>

                <Card title="Account Type">
                    <Row>
                        <Input s={12} type='select' defaultValue='Publisher' onChange={(e) => this.handleChange('account_type', e.target.value)}>
                            <option value='Publisher'>Publisher</option>
                            <option value='Performance Network'>Performance Network</option>
                        </Input>
                    </Row>
                </Card>
                
                <Card title="About Your Business">
                    <Row>
                        <Input
                            s={6}
                            label='Company Name*'
                            type='text'
                            name='company_name'
                            value={this.state.company_name}
                            onChange={(e) => this.handleChange('company_name', e.target.value)}
                        />

                        <Input
                            s={6}
                            label='Primary Url'
                            type="email"
                            name="primary_url"
                            value={this.state.primary_url}
                            onChange={(e) => this.handleChange('primary_url', e.target.value)}
                        />
                    </Row>
                </Card>

                <Card title="Contact Information">
                    <Row>
                        <Input
                            s={6}
                            label='First Name*'
                            type='text'
                            name='first_name'
                            value={this.state.first_name}
                            onChange={(e) => this.handleChange('first_name', e.target.value)}
                        />

                        <Input
                            s={6}
                            label='Last name*'
                            type="text"
                            name="last_name"
                            value={this.state.last_name}
                            onChange={(e) => this.handleChange('last_name', e.target.value)}
                        />
                    </Row>
                
                    <Row>
                        <Input
                            s={6}
                            label='Email*'
                            type='email'
                            name='email'
                            value={this.state.email}
                            onChange={(e) => this.handleChange('email', e.target.value)}
                        />

                        <Input
                            s={6}
                            label='Confirm Email*'
                            type="email"
                            name="confirm_email"
                            value={this.state.confirm_email}
                            onChange={(e) => this.handleChange('confirm_email', e.target.value)}
                        />
                    </Row>

                    <Row>
                        <Input s={6} type='select' defaultValue='Skype' onChange={(e) => this.handleChange('contact_type', e.target.value)}>
                            <option value='Skype'>Skype</option>
                            <option value='ICQ'>ICQ</option>
                            <option value='No instant messaging'>No instant messaging</option>
                        </Input>

                        <Input
                            s={6}
                            label='Contact ID*'
                            type="text"
                            name="contact_id"
                            value={this.state.contact_id}
                            onChange={(e) => this.handleChange('contact_id', e.target.value)}
                        />
                    </Row>
                </Card>

                <Card title="Login Information">
                    <Row>
                        <Input
                            s={6}
                            label='Username*'
                            type='text'
                            name='username'
                            value={this.state.username}
                            onChange={(e) => this.handleChange('username', e.target.value)}
                        />

                        <Input
                            s={6}
                            label='Password*'
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={(e) => this.handleChange('password', e.target.value)}
                        />
                    </Row>

                    <Row>
                        <Input
                            s={6}
                            label='Confirm Password*'
                            type="password"
                            name="confirm_password"
                            value={this.state.confirm_password}
                            onChange={(e) => this.handleChange('confirm_password', e.target.value)}
                        />
                    </Row>
                </Card>

                <Card title="How did you hear about us?">
                    <Row>
                        <Input
                            s={12}
                            type="text"
                            name="answer"
                            value={this.state.answer}
                            onChange={(e) => this.handleChange('answer', e.target.value)}
                        />
                    </Row>
                </Card>

                <Row>
                    <Col>
                        <div className="g-recaptcha" data-sitekey="6LdwnC4UAAAAAKT03Ka8vL1uf8xclwj4-IrTMDBG"></div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Input
                            name='terms'
                            type='checkbox'
                            onChange={(e) => this.handleChange('terms', e.target.checked)}
                            label='I have read and agreed to the Terms and Condition.*'
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Button waves='light' onClick={() => this.handleSubmit()}>
                            Signup
                        </Button>

                        <span style={{marginLeft: '10px', color: 'red'}}>{this.state.error}</span>
                    </Col>
                </Row>
            </Col>
        </Row>
    );
  }
}

export default Signup;

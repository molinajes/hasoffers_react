import React, { Component } from 'react';
import axios from 'axios';
import {Button, Input, Row, Col} from 'react-materialize';
import './App.css';

class ApiForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      network_token: '',
      network_id: '',
      api_response: ''
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
    let self = this;

    if (!this.state.network_id || !this.state.network_token) {
      console.log('Please fill network_id and network_token!');
      return false;
    }

    let url = `http://api.hasoffers.com/v3/ApiKey.json?Method=findApiKeys&NetworkToken=${this.state.network_token}&NetworkId=${this.state.network_id}`;

    axios.get(url)
      .then(response => {
        let res = '';

        if (response.data.response.errors && response.data.response.errors.publicMessage) {
          res = response.data.response.errors.publicMessage;
        } else if (response.data.response.data.length > 0) {
          res = response.data.response.data
        } else {
          res = 'No  api keys found';
        }
        
        self.setState(Object.assign({},
          self.state,
          {api_response: res}
        ));
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });
  }

  render() {
    return (
      <Row>
        <Col s={6}>
          <h5>HasOffers API fetchApiKeys method implementation</h5>

          <Input
            s={12}
            label='Network Token'
            type="text"
            name="network_token"
            value={this.state.network_token}
            onChange={(e) => this.handleChange('network_token', e.target.value)}
          />

          <Input
            s={12}
            label='Network ID'
            type="text"
            name="network_id"
            value={this.state.network_id}
            onChange={(e) => this.handleChange('network_id', e.target.value)}
          />

          <Row>
            <Col>
              <h5>Production</h5>

              <Input 
                s={12}
                name='on'
                type='switch'
                value='2'
              />
            </Col>
          </Row>
        
          <Row>
            <Col>
              <Button waves='light' onClick={() => this.handleSubmit()}>
                RUN
              </Button>
            </Col>
          </Row>
          
          <div className="api_reponse">
            {this.state.api_response}
          </div>
        </Col>
      </Row>
    );
  }
}

export default ApiForm;

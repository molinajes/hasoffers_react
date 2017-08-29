import React, { Component } from 'react';
import axios from 'axios';
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

        if (response.data.response.errorMessage) {
          res = response.data.response.errorMessage;
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
      <div className="api-form">
        <label>
          Newtwork Token:
          <input
            type="text"
            name="network_token"
            value={this.state.network_token}
            onChange={(e) => this.handleChange('network_token', e.target.value)}
          />
        </label><br />

        <label>
          Network ID:
          <input
            type="text"
            name="network_id"
            value={this.state.network_id}
            onChange={(e) => this.handleChange('network_id', e.target.value)}
          />
        </label><br />
        
        <button onClick={() => this.handleSubmit()}>
          RUN
        </button>

        <div className="api_reponse">
          {this.state.api_response}
        </div>
      </div>
    );
  }
}

export default ApiForm;

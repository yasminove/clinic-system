import React, { Component } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addUser } from '../actions/users';

class Form extends Component {
  state = {
    name: '',
    email: '',
  };

  componentDidMount() {
    // console.log('here');
  }

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { name, email } = this.state;
    const user = { name, email };
    this.props.addUser(user);
    this.setState({
      name: '',
      email: '',
    });
  };

  render() {
    // console.log(this.state, 'this.state');
    const { name, email } = this.state;
    return (
      <div className='p-4 card card-body m-4' style={{ width: '700px' }}>
        <form onSubmit={this.onSubmit}>
          <div className='form-group mb-3'>
            <input
              onChange={this.onChange}
              type='text'
              name='name'
              className='form-control'
              placeholder='Enter Name'
              value={name}
            />
          </div>
          <div className='form-group mb-3'>
            <input
              onChange={this.onChange}
              type='email'
              name='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              placeholder='Enter email'
              value={email}
            />
          </div>

          <button type='submit' className='btn btn-primary mb-3 btn-sm'>
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default connect(null, { addUser })(Form);

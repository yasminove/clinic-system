import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUsers, deleteUser } from '../actions/users';
import { Table } from 'react-bootstrap';

class UserTable extends Component {
  static propTypes = {
    users: PropTypes.array,
    deleteUser: PropTypes.func,
  };
  // handleClick = (e) => {
  //   console.log('hiiiiiiiiii9999');
  // };
  componentDidMount() {
    console.log(this.props, 'this.propsssssss');
    this.props.getUsers();
  }
  render() {
    return (
      <div className='table-responsive'>
        <table className='table table-striped table-bordered table-hover table-sm'>
          <thead>
            <tr>
              <th scope='col'>ID</th>
              <th scope='col'>Name</th>
              <th scope='col'>Email</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map((user) => (
              <tr key={user.id} scope='row'>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    className='btn btn-danger'
                    onClick={() => this.props.deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.users.users,
});

export default connect(mapStateToProps, { getUsers, deleteUser })(UserTable);

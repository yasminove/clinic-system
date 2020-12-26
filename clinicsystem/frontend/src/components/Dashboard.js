import React, { Component } from 'react';
import Form from './Form';
import UserTable from './Table';

class Dashboard extends Component {
  render() {
    return (
      <div>
        {/* <h5 style={{ marginLeft: '25px', paddingTop: '19px' }}>Dashboard</h5> */}
        <Form />
        <UserTable />
      </div>
    );
  }
}

export default Dashboard;

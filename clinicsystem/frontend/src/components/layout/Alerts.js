import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getError } from '../../actions/errors';
import { createMessage } from '../../actions/message';
import { withAlert } from 'react-alert';
import messages from '../../reducers/messages';

class Alerts extends Component {
  componentDidMount() {
    console.log(this.props, 'this.props');
    // console.log('hiii');
    // console.log(this.props, 'this.props');
    // this.props.alert.show('it works!');
  }

  componentDidUpdate(prevProps) {
    console.log(prevProps, 'prevProps');
    const { errors, alert, messages } = this.props;
    if (errors !== prevProps.errors) {
      //   alert.error('there is an error');
      console.log(errors, 'errors');
      if (errors.msg.name) alert.error(`Name: ${errors.msg.name}`);
      if (errors.msg.email) alert.error(`Email: ${errors.msg.email}`);
    }
    if (messages !== prevProps.messages) {
      //   console.log('9999');
      if (messages.userAdded) {
        // console.log(messages.userAdded, 'messages');
        // console.log('888');
        alert.success(messages.userAdded);
      }
      if (messages.userDeleted) {
        alert.success(messages.userDeleted);
      }
    }
  }
  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  errors: state.errors,
  messages: state.messages,
});

export default connect(mapStateToProps, { getError, createMessage })(
  withAlert()(Alerts)
);

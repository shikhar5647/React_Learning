import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong>: {props.alert.msg}
      </div>
    )
  );
}

export default Alert;


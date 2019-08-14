// Higher Order Component (HOC)
// A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Info = (props) => {
  const { info } = props;
  return (
    <div>
      <h1>Info</h1>
      <p>The info is: {info}</p>
    </div>
  );
};

Info.propTypes = {
  info: PropTypes.string
};

// eslint-disable-next-line no-unused-vars
const withAdminWarning = (WrappedComponent) => (props) => {
  // eslint-disable-next-line react/prop-types
  const { isAdmin } = props;
  return (
    <div>
      {isAdmin && <p>This is private info. Please don\'t share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

withAdminWarning.propTypes = {
  info: PropTypes.string
};

const requireAuthentication = (WrappedComponent) => (props) => {
  // eslint-disable-next-line react/prop-types
  const { isAuthenticated } = props;
  return (
    <div>
      {
        isAuthenticated
          ? <WrappedComponent {...props} />
          : <p>Please log in!</p>
      }
    </div>
  );
};

requireAuthentication.propTypes = {
  WrappedComponent: PropTypes.object,
  isAuthenticated: PropTypes.bool
};

// const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin info="There are the details"/>,
// document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated info="There are the details" />,
  document.getElementById('app'));

import React, { Component, PropTypes } from 'react';


class CustomerActions = ({ children }) => {

    render() {
        return (
          <div>
          	<div className="customera-actions"></div>
          </div>
        );
    }
}s

CustomerActions.propTypes = {
	children: PropTypes.node.isRequired,
};

export default CustomerActions;

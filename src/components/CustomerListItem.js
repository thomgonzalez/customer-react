import React, { Component, PropTypes } from 'react';


class CustomerListItem = ({ name, editAction, delAction }) => {

    render() {
        return (
            <div>
            	<div className="Customer-list-item">
            		<div className="field">
            			<Link to={`$props.urlPath}${dni}`}>{name}</Link>
            		</div>
            		<div className="field">
            			<Link to={`$props.urlPath${dni}/edit`}>{editAction}</Link>
            		</div>
            		<div className="field">
            			<Link to={`$props.urlPath${dni}/del`}>{delAction}</Link>
            		</div>
            	</div>
            </div>
        );
    }
}

CustomerListItem.propTypes = {
	name: PropTypes.string.isRequired,
	editAction: PropTypes.string.isRequired,
	delAction: PropTypes.string.isRequired,
	urlPath: PropTypes.string.isRequired
}

export default CustomerListItem;

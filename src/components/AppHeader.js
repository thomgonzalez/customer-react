import React, { PropTypes } from 'react';


class AppHeader = props => {

    render() {
        return (
            <div>
            	<div className="app-header"> 
            		<h1>{props.title}</h1>
            	</div>
            </div>
        );
    }
}

AppHeader.propTypes = {
	title: PropTypes.string.isRequired,
}

export default AppHeader;

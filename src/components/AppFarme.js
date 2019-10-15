import React, { PropTypes } from 'react';
import AppHeader from './AppHeader';



class AppFame = ({header, body, footer}) => {
  
    render() {
        return (
          <div>
          	<div className="app-frame">
          		<AppHeader title={this.header}></AppHeader>
          		<div>{body}</div>
          		<div>footer</div>
          	</div>
          </div>
        );
    }
}

AppFame.propTypes = {
	header: PropTypes.string.isRequired,
	body: PropTypes.element.isRequired,

};

export default AppFame;

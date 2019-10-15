import React, { PropTypes } from 'react';
import AppHeader from './AppHeader';



class AppFame = ({header, body, footer}) => {
  
    render() {
        return (
          <div>
          	<div className="app-frame">
          		<AppHeader title={this.header}></AppHeader>
          		<div></div>
          		<div></div>
          	</div>
          </div>
        );
    }
}

AppFame.propTypes = {

};

export default AppFame;

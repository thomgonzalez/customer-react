import React, { Component, PropTypes } from 'react';

class CustomerData = ({name, dni, age }) => {

    render() {
        return (
           <div>
           	<div className=customer-data>
           		<h2> Datos de cliente</h2>
         			<div><strong>Nombre </strong><i>{name}</i></div>
         			<div><strong>DNI </strong><i>{dni}</i></div>
         			<div><strong>Edad </strong><i>{age}</i></div>
           	</div>
           </div>
        );
    }
}

CustomerData.propTypes = {
	name: PropTypes.string.isRequired,
	dni: PropTypes.string.isRequired,
	age: PropTypes.number,
}

export default CustomerData;

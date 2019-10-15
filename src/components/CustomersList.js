import React, { Component, PropTypes } from 'react';

class CustomerList = ({ customers }) => {
    render() {
        return (
            <div>
            	<div className="customer-list">
            		{
            			customers.map( c =>
            				<CustomerListItem
            					key={c.cdi}
            					customer={c.name}
            					editAction={'Editar'}
            					delAction={'Eliminar'}
            					urlPath={urlPath}></CustomerListItem>)
            		}
            	</div>
            </div>
        );
    }
}

CustomerList.propTypes = {
	customers: PropTypes.array.isRequired,
}

export default Component;

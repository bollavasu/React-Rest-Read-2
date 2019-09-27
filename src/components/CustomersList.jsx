import React, {Component} from 'react';

const GetCustomersList = ({customers}) => {
    return (
        <div>
            <center><h1>Customers List</h1></center>
            <table>
                <tbody>
                <tr>
                  <th>CustomerId</th>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Salary</th>
                  <th>Address</th>
                  <th>Qualification</th>
                  <th>IsMarried</th>
                  <th>Gender</th>
                </tr>
            {customers.map((customer) => (
                <tr>
                  <td>{customer.customerId}</td>
                  <td>{customer.name}</td>
                  <td>{customer.age}</td>
                  <td>{customer.sal}</td>
                  <td>{customer.address}</td>
                  <td>{customer.qualification}</td>
                  <td>{customer.isMarried}</td>
                  <td>{customer.gender}</td>
                </tr>
            ))}
             </tbody>
            </table>
        </div>
    )
};

export default GetCustomersList
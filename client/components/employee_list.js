import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employee';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
  // props.employees => an array of employee objects
  
  return (
    <div>
      <div className="employee-list">
        {props.employees.map(employee => <EmployeeDetail employee={employee} />)}
      </div>
    </div>
  )
};

export default createContainer(() => {
  // set up subscription
  Meteor.subscribe('employees');

  // return an object. Will be sent to EmployeeList
  // as props
  return { employees: Employees.find({}).fetch()};
}, EmployeeList);
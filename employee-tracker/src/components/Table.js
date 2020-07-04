import React from 'react';
import TableBody from './TableBody';

export default function Table(props) {
  return (
    <div className='datatable mt-5'>
      <table id='table' className='table table-condensed'>
        <thead>
          <tr>
            <th scope='col' style={{ width: '35%' , color: '#17a2b8' }}>
              Name
            </th>
            <th scope='col' style={{ width: '20%', color: '#17a2b8' }}>
              Department
            </th>
            <th scope='col' style={{ width: '22.5%', color: '#17a2b8' }}>
              Email
            </th>
            <th scope='col' style={{ width: '22.5%', color: '#17a2b8' }}>
              Phone
            </th>
          </tr>
        </thead>
        <TableBody users={props.users} />
      </table>
    </div>
  );
}
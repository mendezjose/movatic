import React from 'react';
import Table from './Table';
import { BikeTypesAvaliable } from '../types';

const ExpandedComponent = ({ data: { value } }: { data: { value: BikeTypesAvaliable } }) => (
  <div className='flex border border-t-0 border-x-0'>
    <div className='min-w-[48px] flex-[0_0_48px]'></div>
    <div className='max-w-full min-w-[100px] grow shrink-0 basis-0 flex'></div>
    <div className='max-w-full min-w-[100px] grow shrink-0 basis-0 flex border border-y-0 border-r-0'>
      <Table
        customStyles={{
          headRow: {
            style: {},
          },
        }}
        columns={[
          {
            name: 'Classic',
            selector: (row) => row.classic,
          },
          {
            name: 'Electric',
            selector: (row) => row.electric,
          },
          {
            name: 'Smart',
            selector: (row) => row.smart,
          },
        ]}
        data={[value]}
      />
    </div>
  </div>
);

export default ExpandedComponent;

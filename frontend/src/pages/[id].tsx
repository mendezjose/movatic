import React, { useContext, useEffect, useState } from 'react';
import ExpandedComponent from '../components/ExpandedComponent';
import { ThemeContext } from '../components/Layout';
import Table from '../components/Table';
import { navigate, PageProps } from 'gatsby';

const StationPage = ({ params }: PageProps) => {
  const [station, setStation] = useState([]);
  const [pending, setPending] = useState(true);

  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    fetchStation(params.id);
  }, []);

  const fetchStation = async (id: string) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      const res = await fetch('http://localhost:3000/station', {
        headers: myHeaders,
        method: 'POST',
        body: JSON.stringify({
          station_id: id,
        }),
      });
      const body = await res.json();
      const keys = Object.keys(body);
      if (keys.length === 0) navigate('/404');
      const mapObjToArr = keys.map((key) => ({ key: key, value: body[key] })).reverse();
      setStation(mapObjToArr);
      setPending(false);
    } catch (e) {
      alert(e.message);
      setStation([]);
      setPending(false);
    }
  };

  const mapKeyValuePair = (row) => {
    switch (row.key) {
      case 'last_reported':
        return new Date(row.value * 1000).toLocaleString();
      case 'is_installed':
        return !!row.value ? 'Yes' : 'No';
      case 'is_renting':
        return !!row.value ? 'Yes' : 'No';
      case 'is_returning':
        return !!row.value ? 'Yes' : 'No';
      case 'num_bikes_available_types':
        return `Classic: ${row.value.classic}, Electric: ${row.value.electric}, Smart: ${row.value.smart}`;
      default:
        return row.value;
    }
  };

  const columns = [
    {
      selector: (row) => row.key.replaceAll('_', ' ').toUpperCase(),
    },
    {
      selector: mapKeyValuePair,
    },
  ];

  return (
    <div className='max-w-[1224px] px-3 mx-auto py-8'>
      <h1 className={`text-3xl font-[400] mb-5 ${darkMode ? 'text-white' : 'text-black'}`}>
        Station: <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{params.id}</span>
      </h1>
      <div className='border rounded-md'>
        <Table
          expandableRows
          expandableRowsComponent={ExpandedComponent}
          expandableRowDisabled={(row) => row.key !== 'num_bikes_available_types'}
          noTableHead
          data={station}
          columns={columns}
          progressPending={pending}
        />
      </div>
      <button
        className={`items-center gap-1 flex my-6 sm:my-8 text-md rounded mx-auto ${
          darkMode ? 'text-gray-400 hover:text-gray-300' : 'text-gray-700 hover:text-gray-400'
        }`}
        onClick={() => navigate('/')}
      >
        <svg xmlns='http://www.w3.org/2000/svg' width='19' height='19' viewBox='0 0 24 24'>
          <path
            fill='currentColor'
            d='m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z'
          />
        </svg>
        Back
      </button>
    </div>
  );
};

export default StationPage;

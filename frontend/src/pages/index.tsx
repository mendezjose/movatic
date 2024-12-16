import React, { useContext } from 'react';
import { ThemeContext } from '../components/Layout';
import CheckIcon from '../components/CheckIcon';
import Table from '../components/Table';
import type { Station } from '../types';
import { navigate } from 'gatsby';

const IndexPage = () => {
  const { darkMode, stations, pending, filterText, setFilterText, page, setPage } = useContext(ThemeContext);

  const columns = [
    {
      name: 'Station Id',
      selector: (row: Station) => row.station_id,
      cell: (row: Station) => (
        <div onClick={() => navigate(`/${row.station_id}`)} className='font-[500]'>
          {row.station_id}
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Docks Available',
      selector: (row: Station) => row.num_docks_available,
      cell: (row: Station) => <div onClick={() => navigate(`/${row.station_id}`)}>{row.num_docks_available}</div>,
      sortable: true,
    },
    {
      name: 'Bikes Available',
      selector: (row: Station) => row.num_bikes_available,
      cell: (row: Station) => <div onClick={() => navigate(`/${row.station_id}`)}>{row.num_bikes_available}</div>,
      sortable: true,
    },
    {
      name: 'Installed',
      grow: 0,
      selector: (row: Station) => (row.is_installed ? 'YES' : 'NO'),
      cell: (row: Station) => (
        <div onClick={() => navigate(`/${row.station_id}`)}>
          <CheckIcon isChecked={!!row.is_installed} />
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Renting',
      grow: 0,
      selector: (row: Station) => (row.is_renting ? 'YES' : 'NO'),
      cell: (row: Station) => (
        <div onClick={() => navigate(`/${row.station_id}`)}>
          <CheckIcon isChecked={!!row.is_renting} />
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Returning',
      grow: 0,
      selector: (row: Station) => (row.is_returning ? 'YES' : 'NO'),
      cell: (row: Station) => (
        <div onClick={() => navigate(`/${row.station_id}`)}>
          <CheckIcon isChecked={!!row.is_returning} />
        </div>
      ),
      sortable: true,
    },
    {
      name: 'Last Reported',
      cell: (row: Station) => (
        <div onClick={() => navigate(`/${row.station_id}`)}>
          {row.last_reported ? new Date(row.last_reported * 1000).toLocaleString() : ''}
        </div>
      ),
      sortable: true,
      sortFunction: (a: Station, b: Station) => new Date(b.last_reported).valueOf() - new Date(a.last_reported).valueOf(),
    },
  ];

  const filteredStations = stations.filter((station: Station) => station.station_id.includes(filterText));

  return (
    <div className='max-w-[1224px] px-3 mx-auto py-8'>
      <div className='flex flex-wrap justify-between mb-4'>
        <h1 className={`text-3xl font-[400] ${darkMode ? 'text-white' : 'text-black'}`}>Stations</h1>
        <div className='flex items-center mb-2 ml-4'>
          <div className={`mr-2 text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Filter by: </div>
          <input
            value={filterText}
            onChange={(e) => setFilterText(e.currentTarget.value)}
            className={`text-sm px-2 border border-gray-300 w-[230px] rounded-l h-[32px] ${
              darkMode ? 'bg-slate-700 text-gray-200' : 'bg-white text-gray-600'
            }`}
            placeholder='Station Id'
          ></input>
          <button
            onClick={() => setFilterText('')}
            className='text-[#0000008a] bg-gray-300 hover:bg-gray-400 rounded-r h-[32px] w-[32px] flex items-center justify-center'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M6.225 4.811a1 1 0 0 0-1.414 1.414L10.586 12L4.81 17.775a1 1 0 1 0 1.414 1.414L12 13.414l5.775 5.775a1 1 0 0 0 1.414-1.414L13.414 12l5.775-5.775a1 1 0 0 0-1.414-1.414L12 10.586z'
              />
            </svg>
          </button>
        </div>
      </div>
      <div className='border rounded-md'>
        <Table
          paginationDefaultPage={page}
          onChangePage={setPage}
          pagination
          fixedHeader
          highlightOnHover
          pointerOnHover
          progressPending={pending}
          columns={columns}
          data={filteredStations}
          onRowClicked={(row: Station) => navigate(`/${row.station_id}`)}
        />
      </div>
    </div>
  );
};

export default IndexPage;

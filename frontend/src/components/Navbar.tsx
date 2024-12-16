import React from 'react';
import { navigate } from 'gatsby';

const Navbar = ({
  darkMode,
  denseMode,
  toogleDarkMode,
  toogleDenseMode,
}: {
  darkMode: boolean;
  denseMode: boolean;
  toogleDarkMode: () => void;
  toogleDenseMode: () => void;
}) => {
  return (
    <div
      className={`h-[50px] border border-gray-700 border-x-0 border-t-0 mb-3 ${
        darkMode ? 'bg-slate-950 text-white' : 'bg-slate-700 text-white'
      }`}
    >
      <div className='max-w-[1224px] px-3 mx-auto flex justify-between items-center h-full'>
        <div
          onClick={() => navigate('/')}
          className={`cursor-pointer text-2xl font-[700] ${darkMode ? 'text-slate-300' : 'text-slate-200'}`}
        >
          movatic
        </div>
        <div className={`${darkMode ? 'text-slate-300' : 'text-slate-200'}`}>
          <button
            title={`${denseMode ? 'Increase' : 'Decrease'} row size`}
            onClick={toogleDenseMode}
            className={`rounded-lg p-1 bg-slate-600 hover:bg-slate-500`}
          >
            {denseMode ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='m12 22l-6-6l1.425-1.425L12 19.15l4.575-4.575L18 16zM7.45 9.4L6 8l6-6l6 6l-1.45 1.4L12 4.85z'
                />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M7.4 22L6 20.6l6-6l6 6l-1.4 1.4l-4.6-4.6zM12 9.4l-6-6L7.4 2L12 6.6L16.6 2L18 3.4z'
                />
              </svg>
            )}
          </button>
          <button
            title={`${darkMode ? 'Disable' : 'Enable'} Dark Mode`}
            onClick={toogleDarkMode}
            className='rounded-lg p-1 bg-slate-600 hover:bg-slate-500 ml-4'
          >
            {darkMode ? (
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21'
                />
              </svg>
            ) : (
              <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24'>
                <path
                  fill='currentColor'
                  d='M12 21q-3.75 0-6.375-2.625T3 12t2.625-6.375T12 3q.35 0 .688.025t.662.075q-1.025.725-1.638 1.888T11.1 7.5q0 2.25 1.575 3.825T16.5 12.9q1.375 0 2.525-.613T20.9 10.65q.05.325.075.662T21 12q0 3.75-2.625 6.375T12 21m0-2q2.2 0 3.95-1.213t2.55-3.162q-.5.125-1 .2t-1 .075q-3.075 0-5.238-2.163T9.1 7.5q0-.5.075-1t.2-1q-1.95.8-3.163 2.55T5 12q0 2.9 2.05 4.95T12 19m-.25-6.75'
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

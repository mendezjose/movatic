import React, { useContext } from 'react';
import DataTable, { createTheme, TableProps } from 'react-data-table-component';
import { ThemeContext } from './Layout';

function Table<T>(props: TableProps<T>) {
  const { darkMode, denseMode } = useContext(ThemeContext);

  createTheme(
    'customDark',
    {
      text: {
        primary: '#FFFFFF',
        secondary: 'rgba(255, 255, 255, 0.7)',
        disabled: 'rgba(0,0,0,.12)',
      },
      background: {
        default: '#1f2937',
      },
      context: {
        background: '#1f2937',
        text: '#FFFFFF',
      },
      divider: {
        default: 'rgba(81, 81, 81, 1)',
      },
      button: {
        default: '#FFFFFF',
        focus: 'rgba(255, 255, 255, .54)',
        hover: 'rgba(255, 255, 255, .12)',
        disabled: 'rgba(255, 255, 255, .18)',
      },
      selected: {
        default: 'rgba(0, 0, 0, .7)',
        text: '#FFFFFF',
      },
      highlightOnHover: {
        default: '#374151',
        text: '#FFFFFF',
      },
      striped: {
        default: 'rgba(0, 0, 0, .87)',
        text: '#FFFFFF',
      },
    },
    'dark'
  );

  createTheme(
    'customLight',
    {
      text: {
        primary: 'rgba(0, 0, 0, 0.87)',
        secondary: 'rgba(0, 0, 0, 0.54)',
        disabled: 'rgba(0, 0, 0, 0.38)',
      },
      background: {
        default: '#f1f5f9',
      },
      context: {
        background: '#e3f2fd',
        text: 'rgba(0, 0, 0, 0.87)',
      },
      divider: {
        default: 'rgba(0,0,0,.12)',
      },
      button: {
        default: 'rgba(0,0,0,.54)',
        focus: 'rgba(0,0,0,.12)',
        hover: 'rgba(0,0,0,.12)',
        disabled: 'rgba(0, 0, 0, .18)',
      },
      selected: {
        default: '#e3f2fd',
        text: 'rgba(0, 0, 0, 0.87)',
      },
      highlightOnHover: {
        default: '#e2e8f0',
        text: 'rgba(0, 0, 0, 0.87)',
      },
      striped: {
        default: '#FAFAFA',
        text: 'rgba(0, 0, 0, 0.87)',
      },
    },
    'dark'
  );

  return <DataTable {...props} theme={darkMode ? 'customDark' : 'customLight'} dense={denseMode} />;
}

export default Table;

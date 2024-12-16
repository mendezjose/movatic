import React, { createContext, useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import Navbar from '../components/Navbar';
import { PageProps } from 'gatsby';

export const ThemeContext = createContext({
  darkMode: false,
  denseMode: false,
  stations: [],
  pending: true,
  page: 1,
  filterText: '',
});

const Layout = ({ children, location }: PageProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [denseMode, setDenseMode] = useState(false);
  const [stations, setStations] = useState([]);
  const [pending, setPending] = useState(true);
  const [page, setPage] = useState(1);
  const [filterText, setFilterText] = useState('');

  useEffect(() => {
    if (location.pathname === '/' && stations.length === 0) fetchStations();
  }, [location]);

  const fetchStations = async () => {
    try {
      const res = await fetch('http://localhost:3000/');
      const body = await res.json();
      setStations(body);
      setPending(false);
    } catch (e) {
      alert(e.message);
      setStations([]);
      setPending(false);
    }
  };

  const [cookies, setCookie] = useCookies(['motaic-dark-mode', 'motaic-dense-mode']);

  const toogleDarkMode = () => {
    setDarkMode((prev) => {
      setCookie('motaic-dark-mode', !prev);
      return !prev;
    });
  };

  const toogleDenseMode = () => {
    setDenseMode((prev) => {
      setCookie('motaic-dense-mode', !prev);
      return !prev;
    });
  };

  useEffect(() => {
    if (cookies['motaic-dark-mode']) setDarkMode(true);
    if (cookies['motaic-dense-mode']) setDenseMode(true);
  }, []);

  const context = {
    darkMode,
    denseMode,
    stations,
    pending,
    page,
    filterText,
    setPage,
    setFilterText,
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-[#101827]' : 'bg-white'}`}>
      <Navbar darkMode={darkMode} denseMode={denseMode} toogleDenseMode={toogleDenseMode} toogleDarkMode={toogleDarkMode} />
      <ThemeContext.Provider value={context}>{children}</ThemeContext.Provider>
    </div>
  );
};

export default Layout;

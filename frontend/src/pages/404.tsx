import * as React from 'react';
import { Link, HeadFC, PageProps } from 'gatsby';
import { ThemeContext } from '../components/Layout';

const NotFoundPage: React.FC<PageProps> = () => {
  const { darkMode } = React.useContext(ThemeContext);

  return (
    <div className='max-w-[1224px] px-3 mx-auto py-8'>
      <div className={`text-center py-24 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        <h1 className='text-5xl font-[500] mt-3'>Page not found</h1>
        <div className='mt-8 text-xl underline'>
          <Link to='/'>Go home</Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;

export const Head: HeadFC = () => <title>Not found</title>;

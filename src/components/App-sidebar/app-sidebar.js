import React from 'react';
import { Link } from 'react-router-dom';
import './app-sidebar.scss';

const AppSidebar = () => {
  return (
    <div className='sidebar'>
      <Link to={'/'}>
        <div className='pokeball all unselected' title='All'>
          <div className='upper-half'> </div>
          <div className='lower-half'> </div>
          <div className='base'> </div>
          <div className='inner-circle'> </div>
          <div className='indicator visible'> </div>
          <div className='indicator-inner'> </div>
        </div>
      </Link>
      <Link to={'/catched'}>
      <div className='pokeball catched selected' title='Catched'>
          <div className='upper-half'> </div>
          <div className='lower-half'> </div>
          <div className='base'> </div>
          <div className='inner-circle'> </div>
          <div className='indicator visible'> </div>
          <div className='indicator-inner'> </div>
        </div>
      </Link>
    </div>
  );
};

export default AppSidebar;

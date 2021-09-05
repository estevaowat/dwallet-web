import React from 'react';

import useTheme from '../../../hooks/useTheme';
import './ToggleTheme.scss';

const ToggleTheme = () => {
   const { toggleTheme } = useTheme();

   return (
      <div>
         <label className="theme-switch" htmlFor="theme-checkbox">
            <input
               type="checkbox"
               className="checkbox-theme"
               id="theme-switch"
               onChange={() => {
                  console.log('clicou');
                  toggleTheme();
               }}
            />
            <div className="slider round" />
         </label>
      </div>
   );
};

export default ToggleTheme;

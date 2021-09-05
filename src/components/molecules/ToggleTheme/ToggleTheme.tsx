import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import Switch from 'react-switch';

import useTheme from '../../../hooks/useTheme';
import './ToggleTheme.scss';

const ToggleTheme = () => {
   const { toggleTheme, theme } = useTheme();

   return (
      <div>
         <label htmlFor="theme-checkbox">
            <Switch
               checkedHandleIcon={<FiSun size={24} />}
               uncheckedIcon={false}
               uncheckedHandleIcon={<FiMoon size={24} />}
               checkedIcon={false}
               checked={theme === 'light-theme'}
               className="theme-checkbox"
               id="theme-checkbox"
               name="theme-checkbox"
               onChange={() => {
                  toggleTheme();
               }}
            />
         </label>
      </div>
   );
};

export default ToggleTheme;

import { forwardRef } from 'react';
import './navbar.css';
import MaterialUISwitch from '../cursor/materialUISwitch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Navbar({ isSwitchChecked, onSwitchChange }) {

  const handleSwitchChange = () => {
    onSwitchChange();
  };

  return (
    <div className='navbar'>
      <div className="navContainer">
        <a className="navA" href="/">
          Julijus
        </a>
        <div className="navBtn">
          <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} checked={!isSwitchChecked} onChange={handleSwitchChange} />} />
        </div>
      </div>
    </div>
  );
}
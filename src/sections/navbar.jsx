import MaterialUISwitch from '../components/switch/materialUISwitch';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Navbar({ isSwitchChecked, onSwitchChange }) {

  const handleSwitchChange = () => {
    onSwitchChange();
  };

  return (
    <div className="fixed z-[9999] h-12 w-full flex items-center flex-col top-0 left-0 p-4 bg-transparent mix-blend-difference">
      <div className="w-full justify-between flex sm:w-[95%]">
        <a className="text-decoration-none text-4xl text-white font-JostR" href="/">
          Julijus
        </a>
        <div className="flex justify-end mix-blend-none">
          <FormControlLabel control={<MaterialUISwitch sx={{ m: 1 }} checked={!isSwitchChecked} onChange={handleSwitchChange} />} />
        </div>
      </div>
    </div>
  );
}
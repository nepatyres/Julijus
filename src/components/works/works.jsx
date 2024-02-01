import React, { useState } from 'react';
import WorkOne from './workOne/workOne';
import WorkTwo from './workTwo/workTwo';
import './works.css';

export default function Works({ isSwitchChecked }) {
    const [localSwitchChecked, setLocalSwitchChecked] = useState(true);

    const handleSwitchChangeLocal = () => {
        setIsSwitchCheckedLocal((prev) => !prev);
    };

    return (
        <section className='worksSection'>
            <div className={`worksContainer ${isSwitchChecked ? 'containerLight' : 'containerDark'}`}>
                <div className="worksMain">
                    <WorkOne isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChangeLocal} />
                    <WorkTwo isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChangeLocal} />
                </div>
            </div>
        </section>
    );
}



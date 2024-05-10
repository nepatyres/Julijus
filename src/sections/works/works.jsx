import React, { useState } from 'react';
import WorkOne from './workOne/workOne';
import WorkTwo from './workTwo/workTwo';

export default function Works({ isSwitchChecked }) {
    const [localSwitchChecked, setLocalSwitchChecked] = useState(true);

    const handleSwitchChangeLocal = () => {
        setIsSwitchCheckedLocal((prev) => !prev);
    };

    return (
        <section className='h-full block'>
            <div className={`h-full relative w-full z-[13] ${isSwitchChecked ? 'bg-containerLight' : 'bg-containerDark'}`}>
                <div className="h-full top-0 flex-col mx-auto flex justify-center items-center sticky">
                    <WorkOne isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChangeLocal} />
                    <WorkTwo isSwitchChecked={isSwitchChecked} onSwitchChange={handleSwitchChangeLocal} />
                </div>
            </div>
        </section>
    );
}



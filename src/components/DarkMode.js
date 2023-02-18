import React from 'react';
import { useEffect, useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

const DarkMode = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
        }
        else {
            document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    const [isDarkMode, setDarkMode] = useState(false);

    const toggleDarkMode = (checked) => {
        setDarkMode(checked);
    };
    return (
        <div className='flex flex-col top-[40%] right-0 fixed'>
            <button className="bg-gray-500 p-4 rounded-l-md" onClick={handleThemeSwitch}>
                <DarkModeSwitch
                    checked={isDarkMode}
                    onChange={toggleDarkMode}
                    size={30}
                    style={{ marginBottom: '2rem', marginTop: '2rem' }}
                />
            </button>
        </div>
    );
};

export default DarkMode;
import { useState, useEffect } from 'react';
import './switch.css'

export default function Switch(){
    const [theme, setTheme] = useState('light');
    
    useEffect(() => {
        const root = document.documentElement;

        theme === 'dark' ? root.className = 'dark' : root.removeAttribute('class');

    }, [theme]);

    const HandleButtonClick = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
    }

    return <span className="tt" onClick={HandleButtonClick}>{theme==='dark' ? "🌙" : "☀️"}</span>
}
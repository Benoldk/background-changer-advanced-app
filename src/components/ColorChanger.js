import React from 'react';
import '../stylesheets/backgroundchanger.css';

export default function ColorChanger({ colorStyle, colorName, setBackgroundStyle }) {
    return (
        <div className='color-changer'>
            <div className={`color ${colorStyle}`}
                onClick={() => setBackgroundStyle(colorStyle)}></div>
            <div className='color-codes'>
                <div style={{ textAlign: 'center' }}>{colorName}</div>
            </div>
        </div>
    )
}
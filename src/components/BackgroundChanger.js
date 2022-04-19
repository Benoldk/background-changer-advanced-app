import React, { useState } from 'react';
import ColorChanger from './ColorChanger';
import '../stylesheets/backgroundchanger.css';
import { HexColorPicker } from "react-colorful";

export default function BackgroundChanger({ setBackgroundStyle, setCustomBackgroundColor }) {
    const [customColor, setCustomColor] = useState('#ffff00');

    const onCustomColorChange = col => {
        setCustomColor(col);
        setCustomBackgroundColor(customColor);
    }

    return (
        <div className='background-changer'>
            <ColorChanger colorStyle='background-black' colorName='BLACK' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-red' colorName='RED' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-green' colorName='GREEN' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-blue' colorName='BLUE' setBackgroundStyle={setBackgroundStyle} />
            <ColorChanger colorStyle='background-purple' colorName='PURPLE' setBackgroundStyle={setBackgroundStyle} />
            <HexColorPicker width={240} height={120} color={customColor} onChange={onCustomColorChange} />
        </div>
    )
}
import { useState } from 'react';
import './App.css';
import BackgroundChanger from './components/BackgroundChanger';

function App() {
  const [backgroundStyle, setBackgroundStyle] = useState('background-black');
  const [backgoundCustomColorStyle, setCustomBackgroundColorStyle] = useState(null);

  const setSystemBackgroundStyle = colStr => {
    setCustomBackgroundColorStyle(null);
    setBackgroundStyle(colStr);
  }

  const setCustomBackgroundCol = col => {
    console.log(col);
    const bkgStyle = {
      backgroundColor: col
    };
    setCustomBackgroundColorStyle(bkgStyle);
  }

  return (
    <div className={`App ${backgroundStyle}`} style={backgoundCustomColorStyle} >
      <BackgroundChanger setBackgroundStyle={setSystemBackgroundStyle} setCustomBackgroundColor={setCustomBackgroundCol} />
    </div>
  );
}

export default App;
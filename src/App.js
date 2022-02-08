
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [theme, setTheme] = useState("light")
  return (
    <div className="App">
      <Button theme = {theme}>CLick me</Button>
      <button onClick={()=>{
setTheme(theme === "light"? "dark":"light")
      }}>
        Change theme
      </button>
    </div>
  );
}

export default App;

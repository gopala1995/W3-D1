
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import {Flex} from './components/flex'

function App() {
  const [theme, setTheme] = useState("light")
  console.log(theme);
  return (
    <div className="App">
      <Button theme = {theme}>CLick me</Button>
      <Flex>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </Flex>
      <button onClick={()=>{
         setTheme(theme === "light"? "dark":"light")
      }}>
        Change theme
      </button>
    </div>
  );
}

export default App;

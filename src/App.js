import logo from './logo.svg';
import './App.css';
import Body from './components/Body'
import MouseTracker from './components/MouseTracker';
import MouseWithCat from './components/MouseWithCat';
import Calculate from './components/Calculate/Calculate';




function App() {
  return ( 
    <div className='bodyClass'>
      <Body/>
      {/* <MouseTracker/>  */}
      <MouseWithCat/>
      <Calculate/>

    </div>
  );
}

export default App;

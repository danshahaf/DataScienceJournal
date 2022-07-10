import './App.css';
import Topbar from './blocks/topbar'
import Brief from './blocks/brief'
import Sections from './blocks/sections'

function App() {
  return (
    <div className='main-container'>
        <Topbar />
        <Brief />
        <Sections />
    </div>
  );
}

export default App;

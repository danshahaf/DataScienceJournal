import './App.css';
import Topbar from './blocks/topbar'
import Brief from './blocks/brief'
import Sections from './blocks/sections'
import Notebook from './blocks/notebook'

import "katex/dist/katex.min.css";

function App() {
  return (
    <div className='main-container'>
        <Topbar />
        <Brief />
        <Sections />
        {/* <Notebook /> */}
        {/* 
          <Router>
              <Routes>
                  <Route path="/"></Route>
                  <Route path="/nba"></Route>
              </Routes>
          </Router> 
        */}
    </div>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router,Route,Routes} from 'react-router-dom';
import './App.scss';
import Headers from './components/Headers/Headers.tsx';
import Main from './components/Main/Main.tsx';
import ProDucts from './components/ProDucts/ProDucts.tsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Headers/>
        <Routes>
          <Route path='/' element={<Main/>}> </Route>
          <Route path='/products' element={<ProDucts/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import { HashRouter as Router,Route,Routes} from 'react-router-dom';
import './App.scss';
import Headers from './components/Headers/Headers.tsx';
import ProDucts from './components/ProDucts/ProDucts.tsx';
import Document from './components/Document/Document.tsx';
import About from './components/About/About.tsx';
function App() {
  return (
    <div className="App">
      <Router>
        <Headers/>
        <Routes>
          <Route path='/' element={<ProDucts/>}> </Route>
          <Route path='/products' element={<ProDucts/>}></Route>
          <Route path='/documents' element={<Document/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

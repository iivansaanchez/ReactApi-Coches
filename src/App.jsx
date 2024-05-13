import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarComponent from './components/Navbar';
import ListCoche from './components/coche/ListCoche';
import DetailCoche from './components/coche/DetailCoche';
import AddCoche from './components/coche/AddCoche';
import EditCoche from './components/coche/EditCoche';

function App() {
  return (
    <div className='app-container'>
      <BrowserRouter>
      <NavbarComponent />
        <div className='container-content'>
          <Routes>
            <Route path="/"/>
            <Route path="/coches" element={<ListCoche />} />
            <Route path="/coches/:id" element={<DetailCoche />}/>
            <Route path="/coches/new" element={<AddCoche />}/>
            <Route path="/coches/edit/:id" element={<EditCoche />}/>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

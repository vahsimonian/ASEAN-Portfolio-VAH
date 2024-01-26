import './App.css';
import './index.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MyWorks from './pages/MyWorks';
import TeachingProgram from './pages/TeachingProgram';
import Contacts from './pages/Contacts';
import More from './pages/MoreInfo';
import SharedLayout from './components/SharedLayout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/my-works" element={<MyWorks />} />
          <Route path="/teachingprogram" element={<TeachingProgram />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/more" element={<More />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

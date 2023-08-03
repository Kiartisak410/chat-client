import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NotFound from './page/NotFound';
import LoginPage from './page/Login';
import ChatPage from './page/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' Component={LoginPage} />
        <Route path='/chat/:id' Component={ChatPage} />
        <Route Component={NotFound} />
      </Routes>
    </Router>
  );
}

export default App;

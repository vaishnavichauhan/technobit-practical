import logo from './logo.svg';
import './App.css';
import Counter from './pages/Counter';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HOME from './pages/Home';
import RecentlyAdd from './pages/Recentylyadded';
import Toppage from './pages/Toppage';
import Signuppage from './pages/SignUp';
import Loginpage from './pages/Loginpage';
import Protectroute from './pages/Protectroute';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Protectroute/>}>
        <Route path="/" element={<HOME/>}/>
        </Route>
        <Route  path="/recentlyadd" element={<RecentlyAdd/>}/>
        <Route  path="/toppage" element={<Toppage/>}/>
        <Route  path="/loginpage" element={<Loginpage/>}/>
        <Route  path="/signpage" element={<Signuppage/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

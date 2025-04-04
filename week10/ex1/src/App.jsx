import { Link, Route, Routes } from 'react-router-dom'
import { Home } from './views/home';
import { Llamas } from './views/llamas';
import { Alpaca } from './views/alpaca';
import './App.css'

function App() {

  return (
    <>
    {/*Navigation here*/}
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/llamas">Llamas</Link></li>
      <li><Link to="/alpaca">Alpacas</Link></li>
    </ul>

    {/*Routes here*/}
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/llamas" element={<Llamas/>} />
      <Route path="/alpaca" element={<Alpaca/>} />
    </Routes>

    </>
  )
}

export default App

import Plan from './Plan'
import Header from './Header'
import Report from './Report'
import Store from './Store'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div className="App">
      <Header />
      <Store> 
        <Routes>
          <Route path='/plan' element={<Plan />} />
          <Route path='/report' element={<Report />} />
        </Routes>
      </Store>
    
    </div>
  );
}

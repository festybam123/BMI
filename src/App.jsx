// src/App.jsx
import BMI from './components/BMI';
import BMICalculator from './components/BMICalculator';
import { BrowserRouter as BrowseRouter, Routes as Routers, Route } from 'react-router-dom';

function App() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <BrowseRouter>
        <Routers>
          <Route path="/" element={<BMICalculator />} />
          <Route path="/simple" element={<BMI />} />
        </Routers>
      </BrowseRouter>
    </div>
  );
}

export default App;

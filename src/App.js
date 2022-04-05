//IMPORTS - Components
import Header from './components/Header';
import Home from './components/home-screen/Home';

//IMPORTS - React
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//IMPORTS - Styling and Mui
import './App.css';
// import '@fontsource/roboto/300.css';

// import { ThemeProvider } from '@mui/system';
// import theme from './theme';

//----------APP----------
function App() {
  return (
    <BrowserRouter>
      <div className="AppContainer">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/projects/:projectName" element={<ProjectPage />} />
          <Route path="*" element={<InvalidUrl />} /> */}
        </Routes>

      </div>
    </BrowserRouter>
  );
}

export default App;

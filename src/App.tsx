import { HeaderMenu } from './components/HeaderBackground';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderMenu />
        {/* <div style={{height: '500px'}}></div>
        <ScrollAnimation /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

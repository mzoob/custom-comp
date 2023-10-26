import { HeaderMenu } from './components/HeaderBackground';
import { ScrollAnimation } from './components/ScrollAnimation';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ScrollAnimation globalData={{}}/>
    </BrowserRouter>
  );
}

export default App;

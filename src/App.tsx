import { HeaderMenu } from './components/HeaderBackground';
import { ScrollAnimation } from './components/ScrollAnimation';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div>
        <HeaderMenu globalData={{}} />
        {/* <div style={{height: '500px'}}></div>
        <ScrollAnimation /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

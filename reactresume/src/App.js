import './App.css';

import MainComponents from './components/MainComponents';
import UptoTop from './components/UptoTop/UptoTop';
import Footer from './components/Footer/Footer';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
      <MainComponents />
      <UptoTop />
      <Footer/>
    </div>
  );
}

export default App;

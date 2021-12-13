import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/Home';
import { Navbar } from './components/nav/Navbar';
import { Cart } from './components/pages/Cart';
import { PageNotFound } from './components/pages/PageNotFound';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <div>
      <Router>
        <ToastContainer />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

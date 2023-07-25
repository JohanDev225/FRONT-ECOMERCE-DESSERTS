import { AppRouter } from "./router/AppRouter";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css';
function App() {
  return (
    <>
    <AppRouter />
    <ToastContainer />
    </>
  )
}

export default App

import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './common/Header';


const App = () => {

  return <>
  <Header/>
  <Outlet/>
  </>;
}

export default App;

import { AnimatePresence } from 'framer-motion';
import { createContext, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { HomeView } from './views/home';

export const AppContext = createContext({});

const Main = () => {

  const ScrollToTop = () => {
    const { pathname } = useLocation()
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [pathname])
  
    return null
  }

  return (
    <AnimatePresence>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<HomeView />} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => {
  return (
    <Main />
  );
}
export default App;

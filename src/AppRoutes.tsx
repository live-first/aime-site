import { AnimatePresence } from 'framer-motion'
import { createContext, useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { HomeView } from './views/home'
import { AboutView } from './views/about'
import { NewsView } from './views/news'
import { ProfileView } from './views/profile'
import { ScheduleView } from './views/schedule'
import { ContactView } from './views/contact'
import { NotFoundView } from './views/notFound'
import { NewsDetailView } from './views/news/newsDetail'

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
        <Route path='/news' element={<NewsView />} />
        <Route path='/news/:newsId' element={<NewsDetailView />} />
        <Route path='/about' element={<AboutView />} />
        <Route path='/profile' element={<ProfileView />} />
        <Route path='/schedule' element={<ScheduleView />} />
        <Route path='/contact' element={<ContactView />} />
        <Route path='*' element={<NotFoundView />} />
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

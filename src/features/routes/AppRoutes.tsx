import AboutMe from '@/pages/AboutMe';
import Home from '@/pages/Home';
import { Route, Routes } from 'react-router-dom';

/* App routes. Routes are hash based (see src/main.tsx), so URLs look like /#/quizzes/new */
export default function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-me" element={<AboutMe />} />
    </Routes>
  )
}

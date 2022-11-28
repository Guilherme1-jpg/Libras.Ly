import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import LibrasView from '../pages/librasView'
import { Dashboard } from '../pages/dashboard'
import Signin from '../pages/signin'
import SignUp from '../pages/signup'
import PageConteudo from '../pages/pageconteudo'
import Lesson2 from '../pages/lessons/lesson2'
import Lesson3 from '../pages/lessons/lesson3'

export default function UserRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/librasview" element={<LibrasView />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/:slug" element={<PageConteudo />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard/Lesson2" element={<Lesson2 />} />
        <Route path="/dashboard/Lesson3" element={<Lesson3 />} />
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

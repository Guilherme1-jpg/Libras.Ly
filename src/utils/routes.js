import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../pages/home'
import LibrasView from '../pages/librasView'
import { Dashboard } from '../pages/dashboard'
import Signin from '../pages/signin'
import SignUp from '../pages/signup'
import PageConteudo from '../pages/pageconteudo'

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
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

import logo from './logo.svg'
import './App.css'
import UserRoute from './utils/routes'
import { AuthProvider } from './utils/contexts/auth'

function App() {
  return (
    <>
      <AuthProvider>
        <UserRoute />
      </AuthProvider>
    </>
  )
}

export default App

import { Routes, Route } from 'react-router-dom'
import { Authentication } from './pages/Authentication'

const RoutesProvider = () => {
  return (
    <Routes>
      <Route index element={<Authentication />} />
    </Routes>
  )
}

export default RoutesProvider

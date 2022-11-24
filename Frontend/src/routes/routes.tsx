import { Routes, Route } from 'react-router-dom'
import Dashboard from '../components/pages/Dashboard'
import BillingCycle from '../components/pages/BillingCycle'

export default () => (
  <Routes>
    <Route path='/' element={<Dashboard />} />
    <Route path='/billingcycle' element={<BillingCycle />} />
  </Routes>
)
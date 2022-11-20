import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import Page from './components/Page'
import './tailwind.css'

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Page>
        <Navbar />
      </Page>
    </div>
  )
}

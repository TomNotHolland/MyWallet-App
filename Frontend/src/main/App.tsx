import Alert from '../components/Alert'
import Page from '../components/Page'
import Sidebar from '../components/Sidebar'
import Routes from '../routes/routes'
import './tailwind.css'

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <Page>
        <Routes />
        <Alert />
      </Page>
    </div>
  )
}

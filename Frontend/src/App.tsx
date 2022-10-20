import Header from './components/Navigator'
import './index.css'
import MenuStateProvider from './states/MenuState'

export default function App() {

  return (
    <div>
      <MenuStateProvider>
        <Header />
      </MenuStateProvider>
    </div>
  )
}

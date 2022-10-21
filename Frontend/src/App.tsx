import Navigator from './components/Navigator'
import MenuStateProvider from './states/MenuState'
import './tailwind.css'

export default function App() {

  return (
    <div>
      <MenuStateProvider>
        <Navigator />
      </MenuStateProvider>
    </div>
  )
}

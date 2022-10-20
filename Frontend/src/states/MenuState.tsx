import { useState, createContext, Dispatch, SetStateAction, ReactNode } from 'react'

//? Custom Context

export interface Context {
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
}

type PropsType = {
  children: ReactNode;
}

export const MenuState = createContext({} as Context)
export function MenuStateProvider({ children }: PropsType) {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <MenuState.Provider value={{ openMenu, setOpenMenu }}>
      {children}
    </MenuState.Provider>
  )
}

export default MenuStateProvider
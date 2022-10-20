import { MenuState, Context } from '../states/MenuState';
import { useContext } from 'react'

//? Custom Hook

export function useMenu(): Context {
  const value = useContext(MenuState)
  return value
}
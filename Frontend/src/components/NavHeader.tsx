import { Cardholder } from 'phosphor-react'
import { useMenu } from '../hooks/MenuHook';

const NavHeader = () => {
  const { openMenu, setOpenMenu } = useMenu()

  return (
    <nav className="inline-flex h-16 bg-yellow-600 w-full text-zinc-900 font-semibold">
      <span
        className={`${!openMenu ? "flex invisible overflow-hidden opacity-0 duration-200 translate-x-32"
          : "select-none overflow-hidden flex text-2xl m-4 duration-300"}`}>
        MyWallet
        <Cardholder size={32} className="mx-2 my-0.5" />
      </span>
    </nav>
  )
}

export default NavHeader
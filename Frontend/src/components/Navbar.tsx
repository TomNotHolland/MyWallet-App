import { Wallet } from "phosphor-react"

const Navbar = () => {
  return (
    <nav className="inline-flex h-16 bg-sky-800 w-screen text-white select-none">
      <a href="/" className="flex text-2xl items-center my-4">
        <Wallet size={32} weight="fill" className="ml-2.5 mr-5" />
        <strong className="mr-1.5">My</strong>Wallet
      </a>
    </nav>
  )
}

export default Navbar
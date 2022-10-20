import { Cardholder, List } from "phosphor-react";
import { useMenu } from '../hooks/MenuHook';
import Accordion from "./Accordion";

export default function Sidebar() {
  const { openMenu, setOpenMenu } = useMenu()

  return (
    <section className="flex">
      <aside className={`flex flex-col relative bg-zinc-900 min-h-screen gap-y-4 ${openMenu ? "w-16" : "w-72"} duration-500`}>
        <div className="inline-flex w-[90%] justify-between">
          <a href="#" className={`cursor-pointer select-none 
            ${!openMenu ? "inline-flex justify-start mt-4 ml-4 text-yellow-500 text-xl"
              : "flex mt-4 opacity-0 overflow-hidden duration-500"}`}>
            MyWallet
            <Cardholder size={32} weight="light" className="ml-3 min-w-fit" />
          </a>
          <div className={`${!openMenu ? "self-end" : "self-end mr-3"}`} onClick={() => setOpenMenu(!openMenu)}>
            <List size={32} weight="regular"
              className={`${!openMenu ? "text-yellow-500 cursor-pointer duration-500 translate-x-0"
                : "text-yellow-500 cursor-pointer duration-500 -translate-x-0"}`} />
          </div>
        </div>
        <Accordion />
      </aside>

      <nav className="inline-flex h-16 bg-yellow-600 w-full text-zinc-900 font-semibold">
        <span
          className={`${!openMenu ? "flex invisible overflow-hidden opacity-0 duration-200 translate-x-32"
            : "select-none overflow-hidden flex text-2xl m-4 duration-300"}`}>
          MyWallet
          <Cardholder size={32} className="mx-2 my-0.5" />
        </span>
      </nav>
    </section>
  );
}

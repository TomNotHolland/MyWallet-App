import { Cardholder, List } from "phosphor-react";
import { useMenu } from '../hooks/MenuHook';
import Accordion from "./Accordion";
import { AccordionOption } from "./AccordionOption";
import NavHeader from "./NavHeader";

export default function Sidebar() {
  const { openMenu, setOpenMenu } = useMenu()

  return (
    <section className="flex">
      <aside className={`flex flex-col relative bg-zinc-900 min-h-screen gap-y-5 ${openMenu ? "w-16" : "w-72"} duration-500`}>
        <div className="flex justify-between">
          <a href="#" className={`flex cursor-pointer select-none mt-4 duration-500
            ${!openMenu ? "justify-start ml-4 text-yellow-500 text-xl"
              : "opacity-0 overflow-hidden"}`}>
            MyWallet
            <Cardholder size={32} weight="light" className="ml-3 min-w-fit" />
          </a>
          <div className={`${!openMenu ? "self-end" : "self-end mr-3"}`} onClick={() => setOpenMenu(!openMenu)}>
            <List size={32} className={`duration-500 text-yellow-500 cursor-pointer 
            ${openMenu ? "-translate-x-1"
              : "-translate-x-3"}`} />
          </div>
        </div>
        <Accordion>
          <AccordionOption />
        </Accordion>
      </aside>
      <NavHeader />
    </section>
  );
}

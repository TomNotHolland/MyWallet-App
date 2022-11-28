import { Money, List, Gauge, Notepad, CaretDown, CurrencyBtc } from "phosphor-react"
import { createElement, useState } from 'react';
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const [openSuboption, setOpenSuboption] = useState(true)

  const menuItems = [{
    name: "Dashboard",
    icon: Gauge,
    link: '/'
  },
  {
    name: "Registrations",
    icon: Notepad,
    link: '#',
    subIcon: Money,
    subLink: '/billingcycle',
    suboptionName: ["Billing Cycle"]
  },{
    name: "Buy Cripto",
    icon: CurrencyBtc,
    link: '#'
  }]

  return (
    <aside className={`bg-zinc-900 h-screen text-white duration-500
      ${!openSidebar ? 'w-14' : 'w-72 mobile:w-52 mobile:absolute'}`}>
      <header className="flex items-center h-16 bg-sky-900 text-white select-none">
        <div className="flex text-lg">
          <button onClick={() => [setOpenSidebar(!openSidebar),
          setOpenSuboption(!openSidebar && openSuboption ? !openSuboption : openSuboption),
          setOpenSuboption(openSidebar && !openSuboption ? !openSuboption : openSuboption)]}
            className="ml-3">
            <List size={28} />
          </button>
          <span className={`flex gap-x-3 ml-6 duration-300 ${!openSidebar ? 'overflow-hidden hidden' : ''}`}>
            Menu
          </span>
        </div>
      </header>
      {menuItems?.map(({ name, icon, link, subIcon, subLink, suboptionName }, index) => (
        <section className="duration-100 whitespace-nowrap" key={index} style={{ transitionDelay: `${index + 3}00ms` }}>
          {!suboptionName && (
            <Link to={link} className="flex text-white overflow-hidden h-12 items-center duration-300 hover:bg-sky-800 ">
              <div className="flex gap-3 items-center">
                {createElement(icon, { size: 28, className: 'mx-3' })}
                <span className={`${!openSidebar ? 'hidden' : ''}`}>{name}</span>
              </div>  
            </Link>
          )}
          {suboptionName && (
            <>
              <Link to={link} onClick={() => setOpenSuboption(!openSidebar ? openSuboption : !openSuboption)}
                className="flex whitespace-nowrap relative z-10 duration-300 overflow-hidden text-white h-12 items-center hover:bg-sky-800 
                  border-l-[0.1875rem]">
                <div className="flex justify-between gap-3 items-center">
                  {createElement(icon, { size: 28, className: 'mx-2.5' })}
                  <span className={`${!openSidebar ? 'hidden' : ''}`}>{name}</span>
                  <CaretDown size={18} className={` ml-10 mobile:mx-2 tablet:mx-2 laptop:ml-6 lg-laptop:ml-8 duration-200 
                  ${!openSidebar ? 'hidden' : ''} ${!openSuboption ? 'rotate-180' : ''}`} />
                </div>
              </Link>
              <Link to={subLink}
                className={`flex gap-2 text-sm overflow-hidden bg-zinc-800 hover:bg-cyan-800
                items-center duration-300 
                  ${!openSuboption ? 'h-10 z-0' : '-z-10 relative -translate-y-6 h-0'}
                  ${!openSidebar && !setOpenSuboption}`}>
                {createElement(subIcon, { size: 28, className: `mx-3` })}
                {suboptionName}
              </Link>
            </>
          )}
        </section>
      ))}
    </aside>
  )
}

export default Sidebar

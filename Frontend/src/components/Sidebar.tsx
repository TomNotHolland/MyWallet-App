import { Money, List, Gauge, Notepad, CaretDown } from "phosphor-react"
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
  }]

  return (
    <aside className={`bg-[#01334E] h-screen text-white duration-500 
      ${!openSidebar ? 'w-14' : 'w-72 mobile:absolute mobile:z-10 mobile:w-52'}`}>
      <header className="flex items-center h-16 bg-sky-900 text-yellow-500 select-none">
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
        <section className="duration-100" key={index} style={{ transitionDelay: `${index + 3}00ms` }}>
          {!suboptionName && (
            <Link to={link} className="flex text-yellow-500 overflow-hidden h-12 items-center duration-300 hover:bg-slate-100 hover:text-[#01334E]">
              <div className="flex gap-3 items-center">
                {createElement(icon, { size: 28, className: 'mx-3' })}
                <span className={`${!openSidebar ? 'hidden' : ''}`}>{name}</span>
              </div>  
            </Link>
          )}
          {suboptionName && (
            <>
              <Link to={link} onClick={() => setOpenSuboption(!openSidebar ? openSuboption : !openSuboption)}
                className="flex relative z-10 duration-300 overflow-hidden text-yellow-500 h-12 items-center hover:bg-slate-200 
                  hover:text-[#01334E] border-l-[0.1875rem] border-yellow-500 hover:border-cyan-800">
                <div className="flex justify-between gap-3 items-center">
                  {createElement(icon, { size: 28, className: 'mx-2.5' })}
                  <span className={`${!openSidebar ? 'hidden' : ''}`}>{name}</span>
                  <CaretDown size={18} className={` ml-10 mobile:mx-2 tablet:mx-2 laptop:ml-6 lg-laptop:ml-8 duration-200 
                  ${!openSidebar ? 'hidden' : ''} ${!openSuboption ? 'rotate-180' : ''}`} />
                </div>
              </Link>
              <Link to={subLink}
                className={`flex gap-2 text-sm overflow-hidden bg-sky-900 hover:bg-cyan-800 items-center border-l-[0.1875rem] border-white duration-300 
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
